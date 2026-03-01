import { useState } from "react";
import { List, PlusCircle, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminLogin from "@/components/admin/AdminLogin";
import ViewEvents from "@/components/admin/ViewEvents";
import CreateEvent from "@/components/admin/CreateEvent";
import type { EventData } from "@/data/events";

type Tab = "view" | "create";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("adminToken"));
  const [activeTab, setActiveTab] = useState<Tab>("view");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [extraEvents, setExtraEvents] = useState<EventData[]>([]);

  const handleUpdateExtra = (slug: string, updated: EventData) => {
    setExtraEvents((prev) => prev.map((e) => (e.slug === slug ? updated : e)));
  };

  const handleDeleteExtra = (slug: string) => {
    setExtraEvents((prev) => prev.filter((e) => e.slug !== slug));
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  const navItems = [
    { id: "view" as Tab, label: "View Events", icon: List },
    { id: "create" as Tab, label: "Create Event", icon: PlusCircle },
  ];

  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      <aside
        className={`${sidebarOpen ? "w-60" : "w-0 overflow-hidden"
          } shrink-0 border-r border-border bg-card transition-all duration-300 md:${sidebarOpen ? "w-60" : "w-14"}`}
      >
        <div className="flex h-14 items-center justify-center border-b border-border px-4">
          <span className="font-display text-lg text-secondary">Admin</span>
        </div>
        <nav className="mt-2 space-y-1 px-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${activeTab === item.id
                ? "bg-secondary/15 text-secondary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center gap-4 border-b border-border px-4">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="flex-1 text-sm font-medium text-muted-foreground">
            {activeTab === "view" ? "View Events" : "Create Event"}
          </h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              localStorage.removeItem("adminToken");
              setIsAuthenticated(false);
            }}
            className="gap-2"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === "view" ? (
            <ViewEvents extraEvents={extraEvents} onUpdateExtra={handleUpdateExtra} onDeleteExtra={handleDeleteExtra} />
          ) : (
            <CreateEvent onEventCreate={(ev) => setExtraEvents((prev) => [...prev, ev])} />
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
