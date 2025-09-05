import { useState } from "react";
import { Sidebar } from "@/components/Layout/Sidebar";
import { TopNavigation } from "@/components/Layout/TopNavigation";
import { Toolbar } from "@/components/Layout/Toolbar";
import { DesignCanvas } from "@/components/Canvas/DesignCanvas";
import { RightSidebar } from "@/components/Layout/RightSidebar";

const Index = () => {
  const [activeSidebarTab, setActiveSidebarTab] = useState("home");
  const [activeTopTab, setActiveTopTab] = useState("home");
  const [activeTool, setActiveTool] = useState("select");

  return (
    <div className="h-screen flex bg-background">
      {/* Left Sidebar */}
      <Sidebar 
        activeTab={activeSidebarTab} 
        onTabChange={setActiveSidebarTab} 
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <TopNavigation 
          activeTab={activeTopTab} 
          onTabChange={setActiveTopTab} 
        />
        
        {/* Toolbar */}
        <Toolbar 
          activeTool={activeTool} 
          onToolChange={setActiveTool} 
        />
        
        {/* Canvas Area */}
        <div className="flex-1 flex">
          <DesignCanvas />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;
