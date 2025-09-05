import { cn } from "@/lib/utils";
import { 
  Type, 
  Database, 
  Layers, 
  Image, 
  PenTool, 
  Fingerprint, 
  Palette,
  MousePointer,
  Copy,
  Plus
} from "lucide-react";

interface ToolbarProps {
  activeTool: string;
  onToolChange: (tool: string) => void;
}

const toolCategories = [
  {
    label: "Insert Elements",
    tools: [
      { id: "text-label", label: "Text Label", icon: Type },
      { id: "data-field", label: "Data Field", icon: Database },
      { id: "compound-field", label: "Compound Field", icon: Layers },
      { id: "photo", label: "Photo", icon: Image },
      { id: "signature", label: "Signature", icon: PenTool },
      { id: "fingerprint", label: "Fingerprint", icon: Fingerprint },
      { id: "background", label: "Background", icon: Palette },
    ]
  }
];

const utilityTools = [
  { id: "clipboard", label: "Clipboard", icon: MousePointer },
  { id: "duplicate", label: "Duplicate", icon: Copy },
  { id: "add", label: "Add", icon: Plus },
];

export const Toolbar = ({ activeTool, onToolChange }: ToolbarProps) => {
  return (
    <div className="bg-app-toolbar border-b border-border p-4">
      <div className="flex items-center gap-6">
        {/* Utility Tools */}
        <div className="flex items-center gap-1">
          {utilityTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                onClick={() => onToolChange(tool.id)}
                className={cn(
                  "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors min-w-[60px]",
                  activeTool === tool.id
                    ? "bg-app-tool-button-active text-white"
                    : "bg-app-tool-button hover:bg-app-tool-button-hover text-muted-foreground hover:text-foreground"
                )}
                title={tool.label}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{tool.label}</span>
              </button>
            );
          })}
        </div>

        {/* Separator */}
        <div className="w-px h-12 bg-border" />

        {/* Insert Elements */}
        <div className="flex items-center gap-1">
          {toolCategories[0].tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                onClick={() => onToolChange(tool.id)}
                className={cn(
                  "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors min-w-[70px]",
                  activeTool === tool.id
                    ? "bg-app-tool-button-active text-white"
                    : "bg-app-tool-button hover:bg-app-tool-button-hover text-muted-foreground hover:text-foreground"
                )}
                title={tool.label}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium text-center leading-tight">
                  {tool.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};