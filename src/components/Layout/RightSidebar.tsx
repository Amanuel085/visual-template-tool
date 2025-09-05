import { cn } from "@/lib/utils";
import { 
  Database, 
  Square, 
  Circle, 
  Triangle,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  AlignHorizontalDistributeStart,
  AlignVerticalDistributeStart,
  RotateCcw,
  FlipHorizontal,
  MousePointer
} from "lucide-react";

const dataElements = [
  { id: "data", label: "Data Elements", icon: Database }
];

const shapes = [
  { id: "rectangle", icon: Square },
  { id: "circle", icon: Circle },
  { id: "triangle", icon: Triangle }
];

const arrangementTools = [
  { id: "align-left", icon: AlignLeft },
  { id: "align-center", icon: AlignCenter },
  { id: "align-right", icon: AlignRight },
  { id: "align-justify", icon: AlignJustify },
  { id: "distribute-h", icon: AlignHorizontalDistributeStart },
  { id: "distribute-v", icon: AlignVerticalDistributeStart },
  { id: "rotate", icon: RotateCcw },
  { id: "flip", icon: FlipHorizontal },
];

export const RightSidebar = () => {
  return (
    <div className="w-64 bg-app-sidebar border-l border-app-sidebar-border h-screen flex flex-col">
      {/* Data Elements */}
      <div className="p-4 border-b border-app-sidebar-border">
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 border-2 border-dashed border-muted-foreground rounded-lg flex items-center justify-center">
            <Database className="w-6 h-6 text-muted-foreground" />
          </div>
          <span className="text-sm font-medium text-center text-muted-foreground">
            Data<br />Elements
          </span>
        </div>
      </div>

      {/* Shapes */}
      <div className="p-4 border-b border-app-sidebar-border">
        <h3 className="text-sm font-medium text-foreground mb-3">Shapes</h3>
        <div className="flex flex-col gap-2">
          {shapes.map((shape) => {
            const Icon = shape.icon;
            return (
              <button
                key={shape.id}
                className="flex items-center justify-center w-12 h-12 border-2 border-dashed border-muted-foreground rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <Icon className="w-6 h-6 text-muted-foreground" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Arrangement */}
      <div className="p-4 border-b border-app-sidebar-border">
        <h3 className="text-sm font-medium text-foreground mb-3">Arrangement</h3>
        <div className="grid grid-cols-3 gap-2">
          {arrangementTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                className="flex items-center justify-center w-10 h-10 bg-app-tool-button hover:bg-app-tool-button-hover rounded-lg transition-colors"
                title={tool.id}
              >
                <Icon className="w-4 h-4 text-muted-foreground" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Editing & Alignment */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-foreground mb-3">Editing & Alignment</h3>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm bg-app-tool-button hover:bg-app-tool-button-hover rounded-lg transition-colors">
            <AlignHorizontalDistributeStart className="w-4 h-4" />
            Distribute Horizontally
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm bg-app-tool-button hover:bg-app-tool-button-hover rounded-lg transition-colors">
            <AlignVerticalDistributeStart className="w-4 h-4" />
            Distribute Vertically
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm bg-app-tool-button hover:bg-app-tool-button-hover rounded-lg transition-colors">
            <RotateCcw className="w-4 h-4" />
            Rotate
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm bg-app-tool-button hover:bg-app-tool-button-hover rounded-lg transition-colors">
            <FlipHorizontal className="w-4 h-4" />
            Flip
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm bg-app-tool-button hover:bg-app-tool-button-hover rounded-lg transition-colors">
            <MousePointer className="w-4 h-4" />
            Select All
          </button>
        </div>
      </div>
    </div>
  );
};