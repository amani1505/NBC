import { motion } from "framer-motion";
import { ReactSVG } from 'react-svg';

type WhyYouShouldSectionItem = {
  icon: string;
  title: string;
  description: string;
  hasBackground?: boolean;
};

type WhyYouShouldSectionProps = {
  title: string;
  description: string;
  items: WhyYouShouldSectionItem[];
  hasBackground?: boolean;
};

function WhyYouShouldSection({
  title,
  description,
  items,
  hasBackground = true
}: WhyYouShouldSectionProps) {
  const bg = "/images/kiganjani-bg.svg";
  
  return (
    <motion.div className="w-full">
      {/* Header Section */}
      <div
        className="py-12 sm:py-16 lg:py-18 flex flex-col justify-center px-4 sm:px-6 lg:px-8"
        style={
          hasBackground
            ? {
                backgroundImage: `url(${bg})`,
                backgroundColor: "#172960",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }
            : {}
        }
      >
        {/* Title and Description */}
        {(title || description) && (
          <div className="text-center mb-8 sm:mb-12 flex flex-col items-center max-w-6xl mx-auto">
            {title && (
              <h1 
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold leading-tight mb-4 px-4 max-w-full sm:max-w-4xl lg:max-w-3xl ${
                  hasBackground ? "text-white" : "text-nbc-dark-950"
                }`}
              >
                {title}
              </h1>
            )}
            {description && (
              <p 
                className={`text-sm sm:text-base lg:text-lg max-w-full sm:max-w-2xl px-4 leading-relaxed ${
                  hasBackground ? "text-white" : "text-[#4B5563]"
                }`}
              >
                {description}
              </p>
            )}
          </div>
        )}
        
        {/* Items Grid */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-14 px-4 sm:px-6 lg:px-8">
            {items.map((item, index) => (
              <div 
                className="flex flex-col items-center text-center space-y-4 sm:space-y-5" 
                key={index}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <ReactSVG
                    src={item.icon}
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[50px] lg:h-[50px]"
                    beforeInjection={svg => {
                      // Set color on all paths, circles, etc.
                      const color = hasBackground ? '#ffffff' : '#213A89';
                      svg.querySelectorAll('[fill]').forEach(el => el.setAttribute('fill', color));
                      svg.querySelectorAll('[stroke]').forEach(el => el.setAttribute('stroke', color));
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 
                    className={`text-lg sm:text-xl font-bold ${
                      hasBackground ? "text-white" : "text-[#4B5563]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className={`text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xs sm:max-w-sm mx-auto ${
                      hasBackground ? "text-white" : "text-[#4B5563]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default WhyYouShouldSection;