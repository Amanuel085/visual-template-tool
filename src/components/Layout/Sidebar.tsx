import { cn } from "@/lib/utils";
import { Home, CreditCard, Database, BarChart3, Settings, Users, Server } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigationItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "card-design", label: "Card Design", icon: CreditCard },
  { id: "data-entry", label: "Data Entry", icon: Database },
  { id: "reports", label: "Reports", icon: BarChart3 },
];

const advancedItems = [
  { id: "general", label: "General Settings", icon: Settings },
  { id: "users", label: "User Management", icon: Users },
  { id: "database", label: "Database Connection", icon: Server },
];

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  return (
    <div className="w-64 bg-app-sidebar border-r border-app-sidebar-border h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-app-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">★</span>
          </div>
          <span className="font-semibold text-foreground">CardCraft</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                  isActive
                    ? "bg-primary/10 text-app-nav-item-active"
                    : "text-app-nav-item hover:bg-app-tool-button-hover hover:text-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Advanced Section */}
      <div className="px-3 pb-4">
        <div className="border-t border-app-sidebar-border pt-4">
          <div className="flex items-center gap-2 px-3 py-2 mb-2">
            <Settings className="w-4 h-4 text-app-nav-item" />
            <span className="text-sm font-medium text-app-nav-item">Advanced</span>
          </div>
          <div className="space-y-1">
            {advancedItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm text-app-nav-item hover:bg-app-tool-button-hover hover:text-foreground rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};