import { cn } from "@/lib/utils";

interface DesignCanvasProps {
  className?: string;
}

export const DesignCanvas = ({ className }: DesignCanvasProps) => {
  return (
    <div className={cn("flex-1 bg-app-canvas p-8", className)}>
      <div className="h-full bg-background rounded-lg shadow-sm border border-app-sidebar-border relative overflow-hidden">
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--canvas-grid)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--canvas-grid)) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
        
        {/* Rulers */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-muted border-b border-app-sidebar-border flex items-end">
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="flex-1 relative">
              <div className="absolute bottom-0 left-0 w-px h-2 bg-muted-foreground" />
              <span className="absolute bottom-2 left-1 text-xs text-muted-foreground">
                {(i + 1) * 2}in
              </span>
            </div>
          ))}
        </div>
        
        <div className="absolute top-8 left-0 bottom-0 w-8 bg-muted border-r border-app-sidebar-border">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="h-16 relative">
              <div className="absolute top-0 right-0 h-px w-2 bg-muted-foreground" />
              <span 
                className="absolute top-1 right-2 text-xs text-muted-foreground"
                style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
              >
                {(i + 1) * 2}in
              </span>
            </div>
          ))}
        </div>
        
        {/* Canvas Content */}
        <div className="absolute top-8 left-8 right-8 bottom-8 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground text-lg italic">
              Drag and drop elements here or use the tools above
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};