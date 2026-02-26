import { useState } from "react";
import { events as staticEvents, type EventData } from "@/data/events";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Pencil, Trash2, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ViewEventsProps {
  extraEvents: EventData[];
  onUpdateExtra: (slug: string, updated: EventData) => void;
  onDeleteExtra: (slug: string) => void;
}

const ViewEvents = ({ extraEvents, onUpdateExtra, onDeleteExtra }: ViewEventsProps) => {
  const { toast } = useToast();
  const allEvents = [...staticEvents, ...extraEvents];

  const [editEvent, setEditEvent] = useState<EventData | null>(null);
  const [deleteSlug, setDeleteSlug] = useState<string | null>(null);
  const [localStaticEdits, setLocalStaticEdits] = useState<Record<string, EventData>>({});
  const [deletedStaticSlugs, setDeletedStaticSlugs] = useState<string[]>([]);

  const mergedEvents = [
    ...staticEvents
      .filter((e) => !deletedStaticSlugs.includes(e.slug))
      .map((e) => localStaticEdits[e.slug] || e),
    ...extraEvents,
  ];

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [type, setType] = useState("ON-STAGE");
  const [guidelines, setGuidelines] = useState<string[]>([""]);
  const [prelimsDate, setPrelimsDate] = useState("");
  const [prelimsTime, setPrelimsTime] = useState("");
  const [prelimsVenue, setPrelimsVenue] = useState("");
  const [finalsDate, setFinalsDate] = useState("");
  const [finalsTime, setFinalsTime] = useState("");
  const [finalsVenue, setFinalsVenue] = useState("");
  const [coordinators, setCoordinators] = useState<{ name: string; phone: string }[]>([{ name: "", phone: "" }]);
  const [deadline, setDeadline] = useState("");

  const isStaticEvent = (slug: string) => staticEvents.some((e) => e.slug === slug);

  const openEdit = (event: EventData) => {
    setEditEvent(event);
    setTitle(event.title);
    setSubtitle(event.subtitle);
    setType(event.type);
    setGuidelines(event.guidelines.length ? [...event.guidelines] : [""]);
    setPrelimsDate(event.prelims.date);
    setPrelimsTime(event.prelims.time);
    setPrelimsVenue(event.prelims.venue);
    setFinalsDate(event.finals.date);
    setFinalsTime(event.finals.time);
    setFinalsVenue(event.finals.venue);
    setCoordinators(event.coordinators.length ? event.coordinators.map((c) => ({ ...c })) : [{ name: "", phone: "" }]);
    setDeadline(event.deadline);
  };

  const handleSave = () => {
    if (!editEvent) return;
    const updated: EventData = {
      ...editEvent,
      title,
      subtitle,
      type,
      guidelines: guidelines.filter(Boolean),
      prelims: { date: prelimsDate, time: prelimsTime, venue: prelimsVenue },
      finals: { date: finalsDate, time: finalsTime, venue: finalsVenue },
      coordinators: coordinators.filter((c) => c.name.trim()),
      deadline,
    };
    if (isStaticEvent(editEvent.slug)) {
      setLocalStaticEdits((prev) => ({ ...prev, [editEvent.slug]: updated }));
    } else {
      onUpdateExtra(editEvent.slug, updated);
    }
    setEditEvent(null);
    toast({ title: "Event Updated", description: `"${title}" saved.` });
  };

  const handleDelete = () => {
    if (!deleteSlug) return;
    if (isStaticEvent(deleteSlug)) {
      setDeletedStaticSlugs((prev) => [...prev, deleteSlug]);
    } else {
      onDeleteExtra(deleteSlug);
    }
    setDeleteSlug(null);
    toast({ title: "Event Deleted", description: "The event has been removed." });
  };

  const inputClass = "border-border bg-muted/50 focus-visible:ring-secondary";

  return (
    <div className="space-y-6">
      <h2 className="font-display text-2xl text-secondary">All Events</h2>

      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Title</TableHead>
              <TableHead className="text-muted-foreground">Type</TableHead>
              <TableHead className="text-muted-foreground">Deadline</TableHead>
              <TableHead className="text-muted-foreground">Coordinators</TableHead>
              <TableHead className="text-right text-muted-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mergedEvents.map((event) => (
                <TableRow key={event.slug} className="border-border">
                  <TableCell>
                    <div>
                      <p className="font-medium text-foreground">{event.title}</p>
                      <p className="text-xs text-muted-foreground">{event.subtitle}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                      event.type === "ON-STAGE"
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary/20 text-secondary"
                    }`}>
                      {event.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{event.deadline}</TableCell>
                  <TableCell className="text-muted-foreground">{event.coordinators.length}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                        onClick={() => openEdit(event)}
                        title="Edit event"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => setDeleteSlug(event.slug)}
                        title="Delete event"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!editEvent} onOpenChange={(open) => !open && setEditEvent(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto border-border bg-card sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="font-display text-secondary">Edit Event</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} className={inputClass} />
              </div>
              <div className="space-y-2">
                <Label>Subtitle</Label>
                <Input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className={inputClass} />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Type</Label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="flex h-10 w-full rounded-md border border-border bg-muted/50 px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <option value="ON-STAGE">ON-STAGE</option>
                <option value="OFF-STAGE">OFF-STAGE</option>
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Guidelines</Label>
                <Button type="button" variant="outline" size="sm" onClick={() => setGuidelines([...guidelines, ""])} className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  <Plus className="mr-1 h-3 w-3" /> Add
                </Button>
              </div>
              {guidelines.map((g, i) => (
                <div key={i} className="flex gap-2">
                  <Textarea
                    value={g}
                    onChange={(e) => { const c = [...guidelines]; c[i] = e.target.value; setGuidelines(c); }}
                    rows={1}
                    className={`${inputClass} min-h-[40px]`}
                  />
                  {guidelines.length > 1 && (
                    <Button type="button" variant="ghost" size="icon" onClick={() => setGuidelines(guidelines.filter((_, idx) => idx !== i))} className="shrink-0 text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <Label className="text-secondary">Prelims</Label>
              <div className="grid gap-3 sm:grid-cols-3">
                <Input value={prelimsDate} onChange={(e) => setPrelimsDate(e.target.value)} placeholder="Date" className={inputClass} />
                <Input value={prelimsTime} onChange={(e) => setPrelimsTime(e.target.value)} placeholder="Time" className={inputClass} />
                <Input value={prelimsVenue} onChange={(e) => setPrelimsVenue(e.target.value)} placeholder="Venue" className={inputClass} />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-secondary">Finals</Label>
              <div className="grid gap-3 sm:grid-cols-3">
                <Input value={finalsDate} onChange={(e) => setFinalsDate(e.target.value)} placeholder="Date" className={inputClass} />
                <Input value={finalsTime} onChange={(e) => setFinalsTime(e.target.value)} placeholder="Time" className={inputClass} />
                <Input value={finalsVenue} onChange={(e) => setFinalsVenue(e.target.value)} placeholder="Venue" className={inputClass} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Coordinators</Label>
                <Button type="button" variant="outline" size="sm" onClick={() => setCoordinators([...coordinators, { name: "", phone: "" }])} className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  <Plus className="mr-1 h-3 w-3" /> Add
                </Button>
              </div>
              {coordinators.map((c, i) => (
                <div key={i} className="flex gap-2">
                  <Input value={c.name} onChange={(e) => { const cp = [...coordinators]; cp[i] = { ...cp[i], name: e.target.value }; setCoordinators(cp); }} placeholder="Name" className={inputClass} />
                  <Input value={c.phone} onChange={(e) => { const cp = [...coordinators]; cp[i] = { ...cp[i], phone: e.target.value }; setCoordinators(cp); }} placeholder="Phone" className={inputClass} />
                  {coordinators.length > 1 && (
                    <Button type="button" variant="ghost" size="icon" onClick={() => setCoordinators(coordinators.filter((_, idx) => idx !== i))} className="shrink-0 text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <Label>Registration Deadline</Label>
              <Input value={deadline} onChange={(e) => setDeadline(e.target.value)} className={inputClass} />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setEditEvent(null)} className="border-border">Cancel</Button>
            <Button onClick={handleSave} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteSlug} onOpenChange={(open) => !open && setDeleteSlug(null)}>
        <AlertDialogContent className="border-border bg-card">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Event</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-border">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ViewEvents;
