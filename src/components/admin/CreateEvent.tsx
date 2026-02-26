import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2 } from "lucide-react";
import type { EventData } from "@/data/events";

interface CreateEventProps {
  onEventCreate: (event: EventData) => void;
}

const CreateEvent = ({ onEventCreate }: CreateEventProps) => {
  const { toast } = useToast();
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
  const [coordinators, setCoordinators] = useState([{ name: "", phone: "" }]);
  const [deadline, setDeadline] = useState("");

  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const addGuideline = () => setGuidelines([...guidelines, ""]);
  const removeGuideline = (i: number) => setGuidelines(guidelines.filter((_, idx) => idx !== i));
  const updateGuideline = (i: number, val: string) => {
    const copy = [...guidelines];
    copy[i] = val;
    setGuidelines(copy);
  };

  const addCoordinator = () => setCoordinators([...coordinators, { name: "", phone: "" }]);
  const removeCoordinator = (i: number) => setCoordinators(coordinators.filter((_, idx) => idx !== i));
  const updateCoordinator = (i: number, field: "name" | "phone", val: string) => {
    const copy = [...coordinators];
    copy[i] = { ...copy[i], [field]: val };
    setCoordinators(copy);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast({ title: "Error", description: "Title is required", variant: "destructive" });
      return;
    }

    const newEvent: EventData = {
      slug,
      title,
      subtitle,
      img: "/placeholder.svg",
      type,
      guidelines: guidelines.filter(Boolean),
      prelims: { date: prelimsDate, time: prelimsTime, venue: prelimsVenue },
      finals: { date: finalsDate, time: finalsTime, venue: finalsVenue },
      coordinators: coordinators.filter((c) => c.name.trim()),
      deadline,
    };

    onEventCreate(newEvent);
    toast({ title: "Event Created", description: `"${title}" has been added successfully.` });

    setTitle(""); setSubtitle(""); setType("ON-STAGE");
    setGuidelines([""]); setPrelimsDate(""); setPrelimsTime(""); setPrelimsVenue("");
    setFinalsDate(""); setFinalsTime(""); setFinalsVenue("");
    setCoordinators([{ name: "", phone: "" }]); setDeadline("");
  };

  const inputClass = "border-border bg-muted/50 focus-visible:ring-secondary";

  return (
    <div className="space-y-6">
      <h2 className="font-display text-2xl text-secondary">Create Event</h2>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6 rounded-lg border border-border bg-card p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Event title" className={inputClass} />
          </div>
          <div className="space-y-2">
            <Label>Subtitle</Label>
            <Input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} placeholder="Short description" className={inputClass} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Slug</Label>
            <Input value={slug} readOnly className={`${inputClass} opacity-60`} />
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
        </div>

        <div className="space-y-2">
          <Label>Banner Image</Label>
          <Input type="file" accept="image/*" className={inputClass} />
          <p className="text-xs text-muted-foreground">UI only — file upload not functional yet</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label>Guidelines</Label>
            <Button type="button" variant="outline" size="sm" onClick={addGuideline} className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Plus className="mr-1 h-3 w-3" /> Add
            </Button>
          </div>
          {guidelines.map((g, i) => (
            <div key={i} className="flex gap-2">
              <Textarea
                value={g}
                onChange={(e) => updateGuideline(i, e.target.value)}
                placeholder={`Guideline ${i + 1}`}
                rows={1}
                className={`${inputClass} min-h-[40px]`}
              />
              {guidelines.length > 1 && (
                <Button type="button" variant="ghost" size="icon" onClick={() => removeGuideline(i)} className="shrink-0 text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Label className="text-secondary">Prelims</Label>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Date</Label>
              <Input value={prelimsDate} onChange={(e) => setPrelimsDate(e.target.value)} placeholder="1st April, 2025" className={inputClass} />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Time</Label>
              <Input value={prelimsTime} onChange={(e) => setPrelimsTime(e.target.value)} placeholder="10:00AM" className={inputClass} />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Venue</Label>
              <Input value={prelimsVenue} onChange={(e) => setPrelimsVenue(e.target.value)} placeholder="Jadavpur Campus" className={inputClass} />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-secondary">Finals</Label>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Date</Label>
              <Input value={finalsDate} onChange={(e) => setFinalsDate(e.target.value)} placeholder="4th April, 2025" className={inputClass} />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Time</Label>
              <Input value={finalsTime} onChange={(e) => setFinalsTime(e.target.value)} placeholder="2:00PM" className={inputClass} />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Venue</Label>
              <Input value={finalsVenue} onChange={(e) => setFinalsVenue(e.target.value)} placeholder="Jadavpur Campus" className={inputClass} />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label>Coordinators</Label>
            <Button type="button" variant="outline" size="sm" onClick={addCoordinator} className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Plus className="mr-1 h-3 w-3" /> Add
            </Button>
          </div>
          {coordinators.map((c, i) => (
            <div key={i} className="flex gap-2">
              <Input value={c.name} onChange={(e) => updateCoordinator(i, "name", e.target.value)} placeholder="Name" className={inputClass} />
              <Input value={c.phone} onChange={(e) => updateCoordinator(i, "phone", e.target.value)} placeholder="+91 9876543210" className={inputClass} />
              {coordinators.length > 1 && (
                <Button type="button" variant="ghost" size="icon" onClick={() => removeCoordinator(i)} className="shrink-0 text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <Label>Registration Deadline</Label>
          <Input value={deadline} onChange={(e) => setDeadline(e.target.value)} placeholder="25th March, 2025" className={inputClass} />
        </div>

        <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
          Create Event
        </Button>
      </form>
    </div>
  );
};

export default CreateEvent;
