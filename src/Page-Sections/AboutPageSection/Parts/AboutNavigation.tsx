import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function AboutNavigation() {
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    {
      title: "Overview",
      link: "",
    },
    {
      title: "Governance",
      link: "governance",
    },
    {
      title: "Investor Relations",
      link: "investor-relations",
    },
    {
      title: "Sustainability",
      link: "sustainability",
    },
    {
      title: "News & Media Center",
      link: "news",
    },
    {
      title: "Tenders",
      link: "tenders"
    },
    {
      title: "Careers",
      link: "careers"
    }
  ];

  // Check scroll position and update chevron visibility
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      setShowLeftChevron(scrollLeft > 0);
      setShowRightChevron(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Handle scroll navigation
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  // Set up scroll listener
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
    <div className="border-b-[2px] border-[#DD0A14] py-3 sm:py-4 lg:py-5 mb-6 sm:mb-8">
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden lg:flex justify-center text-[#7E939A] gap-6 xl:gap-10">
          {navLinks?.map((link) => (
            <NavLink
              to={link.link}
              end={link.link === ""}
              className={({ isActive }) =>
                `capitalize py-1 px-2 transition-all ease-in duration-300 whitespace-nowrap
                hover:text-nbc-dark-950 hover:border-b-[2px] hover:border-nbc-dark-950
                text-sm xl:text-base
                ${isActive ? "text-nbc-dark-950 border-b-[2px] border-nbc-dark-950" : "text-[#7E939A]"}`
              }
              key={link.title}
            >
              {link.title}
            </NavLink>
          ))}
        </div>

        {/* Mobile/Tablet Navigation - Scrollable with chevrons */}
        <div className="relative lg:hidden">
          {/* Left Chevron */}
          {showLeftChevron && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                       bg-white/90 hover:bg-white shadow-lg rounded-full p-1.5 sm:p-2
                       transition-all duration-200 hover:shadow-xl"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
          )}

          {/* Right Chevron */}
          {showRightChevron && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                       bg-white/90 hover:bg-white shadow-lg rounded-full p-1.5 sm:p-2
                       transition-all duration-200 hover:shadow-xl"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
          )}

          {/* Scrollable Navigation Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 md:gap-8 text-[#7E939A] 
                     overflow-x-auto scrollbar-hide scroll-smooth
                     px-8 sm:px-10 py-1"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {navLinks?.map((link) => (
              <NavLink
                to={link.link}
                end={link.link === ""}
                className={({ isActive }) =>
                  `capitalize py-1 px-1 transition-all ease-in duration-300 
                  hover:text-nbc-dark-950 hover:border-b-[2px] hover:border-nbc-dark-950
                  whitespace-nowrap flex-shrink-0 text-sm sm:text-base
                  ${isActive ? "text-nbc-dark-950 border-b-[2px] border-nbc-dark-950" : "text-[#7E939A]"}`
                }
                key={link.title}
              >
                {link.title}
              </NavLink>
            ))}
          </div>

          {/* Gradient Overlays for scroll indication */}
          {showLeftChevron && (
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-10 
                          bg-gradient-to-r from-white via-white/80 to-transparent 
                          pointer-events-none z-[5]" />
          )}
          {showRightChevron && (
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-10 
                          bg-gradient-to-l from-white via-white/80 to-transparent 
                          pointer-events-none z-[5]" />
          )}
        </div>
      </div>

      {/* Custom CSS to hide scrollbar */}
      <style>{`
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

export default AboutNavigation;