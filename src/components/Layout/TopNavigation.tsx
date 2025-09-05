import { cn } from "@/lib/utils";

interface TopNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const topTabs = [
  { id: "file", label: "File" },
  { id: "home", label: "Home" },
  { id: "card-setup", label: "Card Setup" },
  { id: "view", label: "View" },
];

export const TopNavigation = ({ activeTab, onTabChange }: TopNavigationProps) => {
  return (
    <div className="bg-app-toolbar border-b border-border">
      <div className="flex">
        {topTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "px-6 py-3 text-sm font-medium border-b-2 transition-colors",
              activeTab === tab.id
                ? "border-primary text-primary bg-primary/5"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};