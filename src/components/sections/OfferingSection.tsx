import type { ReactNode } from "react"
import { useState, useRef, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
  hasContainer?:boolean;
};

function OfferingSection({ 
  title, 
  description, 
  tabs, 
  defaultTab,
  maxWidth = "max-w-4xl",
  hasContainer=true
}: OfferingSectionProps) {
  // Use provided defaultTab or fallback to first tab's value
  const defaultValue = defaultTab || tabs[0]?.value;
  
  // State for scrollable tabs on mobile
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Calculate grid columns based on number of tabs for desktop
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

  // Check scroll position and update chevron visibility
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      setShowLeftChevron(scrollLeft > 5);
      setShowRightChevron(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  // Handle scroll navigation
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -150,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 150,
        behavior: 'smooth'
      });
    }
  };

  // Set up scroll listener for mobile tabs
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener('scroll', checkScroll);
      
      // Check on resize as well
      const handleResize = () => {
        setTimeout(checkScroll, 100);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className={`mx-auto ${hasContainer ? "px-4 sm:px-6 py-12 sm:py-16 container":""}`}>
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-nbc-dark-950 text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight mb-4">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-[#4B5563] mb-5 max-w-3xl mx-auto px-4">
          {description}
        </p>
      </div>

      {/* Modern Tab Navigation with shadcn */}
      <Tabs defaultValue={defaultValue} className="w-full">
        {/* Desktop Tabs - Grid Layout */}
        <TabsList className={`hidden md:grid w-full ${getGridCols(tabs.length)} mb-8 bg-gray-100 p-1 rounded-2xl ${maxWidth} mx-auto h-auto`}>
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex items-center justify-center gap-2 px-4 lg:px-6 py-3 rounded-xl font-medium transition-all duration-300 
                       data-[state=active]:bg-blue-950 data-[state=active]:text-white text-center 
                       data-[state=active]:shadow-lg data-[state=active]:shadow-gray-200/50 
                       data-[state=active]:scale-105 text-sm lg:text-base"
            >
              {tab.icon && <span className="w-4 h-4 lg:w-5 lg:h-5">{tab.icon}</span>}
              <span>{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Mobile/Tablet Tabs - Scrollable Layout */}
        <div className="relative md:hidden mb-8">
          {/* Left Chevron */}
          {showLeftChevron && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
                       bg-white/95 hover:bg-white shadow-lg rounded-full p-2
                       transition-all duration-200 hover:shadow-xl border border-gray-200"
              aria-label="Scroll tabs left"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
          )}

          {/* Right Chevron */}
          {showRightChevron && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 
                       bg-white/95 hover:bg-white shadow-lg rounded-full p-2
                       transition-all duration-200 hover:shadow-xl border border-gray-200"
              aria-label="Scroll tabs right"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          )}

          {/* Scrollable Tabs Container - Proper TabsList structure */}
          <TabsList className="w-full mb-0 bg-gray-100 p-1 rounded-2xl mx-auto h-auto relative overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex gap-1 overflow-x-auto scrollbar-hide scroll-smooth px-8"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium 
                           transition-all duration-300 data-[state=active]:bg-blue-950 data-[state=active]:text-white 
                           text-center data-[state=active]:shadow-lg data-[state=active]:shadow-gray-200/50 
                           data-[state=active]:scale-105 whitespace-nowrap flex-shrink-0 text-sm
                           min-w-max"
                >
                  {tab.icon && <span className="w-4 h-4">{tab.icon}</span>}
                  <span>{tab.label}</span>
                </TabsTrigger>
              ))}
            </div>

            {/* Gradient Overlays for scroll indication */}
            {showLeftChevron && (
              <div className="absolute left-0 top-0 bottom-0 w-8 
                            bg-gradient-to-r from-gray-100 via-gray-100/80 to-transparent 
                            pointer-events-none z-10 rounded-l-2xl" />
            )}
            {showRightChevron && (
              <div className="absolute right-0 top-0 bottom-0 w-8 
                            bg-gradient-to-l from-gray-100 via-gray-100/80 to-transparent 
                            pointer-events-none z-10 rounded-r-2xl" />
            )}
          </TabsList>
        </div>

        {/* Tab Content */}
        <div className="relative">
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-6 sm:mt-8 w-full">
              {tab.content}
            </TabsContent>
          ))}
        </div>
      </Tabs>

      {/* Custom CSS to hide scrollbar */}
      <style >{`
        .scrollbar-hide {
          -webkit-overflow-scrolling: touch;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default OfferingSection;