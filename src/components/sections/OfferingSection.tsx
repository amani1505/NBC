import type { ReactNode } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


// Define the tab structure
type TabItem = {
  value: string;
  label: string;
  content: ReactNode;
  icon?: ReactNode; // Optional icon
};

type OfferingSectionProps = {
  title: string;
  description: string;
  tabs: TabItem[];
  defaultTab?: string; // Optional default tab, falls back to first tab
  maxWidth?: string; // Optional max width for tabs container
};

function OfferingSection({ 
  title, 
  description, 
  tabs, 
  defaultTab,
  maxWidth = "max-w-4xl"
}: OfferingSectionProps) {
  // Use provided defaultTab or fallback to first tab's value
  const defaultValue = defaultTab || tabs[0]?.value;
  
  // Calculate grid columns based on number of tabs
  const getGridCols = (tabCount: number) => {
    switch (tabCount) {
      case 1: return "grid-cols-1";
      case 2: return "grid-cols-2";
      case 3: return "grid-cols-3";
      case 4: return "grid-cols-4";
      case 5: return "grid-cols-5";
      case 6: return "grid-cols-6";
      default: return "grid-cols-4";
    }
  };

  return (
    <div className="mx-auto px-6 py-16 container">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-nbc-dark-950 text-[48px] font-[700]">
          {title}
        </h1>
        <p className="text-[18px] text-[#4B5563] mb-5">
          {description}
        </p>
      </div>

      {/* Modern Tab Navigation with shadcn */}
      <Tabs defaultValue={defaultValue} className="w-full">
        <TabsList className={`grid w-full ${getGridCols(tabs.length)} mb-8 bg-gray-100 p-1 rounded-2xl ${maxWidth} mx-auto h-auto`}>
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-blue-950 data-[state=active]:text-white text-center data-[state=active]:shadow-lg data-[state=active]:shadow-gray-200/50 data-[state=active]:scale-105"
            >
              {tab.icon && <span className="w-5 h-5">{tab.icon}</span>}
              <span className="hidden sm:inline">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tab Content */}
        <div className="relative">
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {tab.content}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}

export default OfferingSection;