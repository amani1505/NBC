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
    <>
      <motion.div className="   ">
        {/* Header Section */}
        <div
          className="h- py-18 flex flex-col justify-center"
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
          <div className="text-center text-white mb-12 flex  flex-col items-center">
            <h1 className={`text-[52px] font-[700] w-1/2  ${hasBackground ? "text-white" : "text-nbc-dark-950"}`}>
              {title}
            </h1>
            <p className={`text-[18px] mb-5 ${hasBackground ? "text-white" : "text-[#4B5563]"}`}>
              {description}
            </p>
          </div>
          <div className="flex justify-center px-64 gap-14">
            {items.map((item, index) => (
              <div className="flex flex-col items-center gap-5" key={index}>
                <span>
                  <ReactSVG
                    src={item.icon}
                    className="w-[50px] h-[50px]"
                    beforeInjection={svg => {
                      // Set color on all paths, circles, etc.
                      const color = hasBackground ? '#ffffff' : '#213A89';
                      svg.querySelectorAll('[fill]').forEach(el => el.setAttribute('fill', color));
                      svg.querySelectorAll('[stroke]').forEach(el => el.setAttribute('stroke', color));
                    }}
                  />
                </span>
                <div className="text-center">
                  <h1 className={`text-[20px] font-[800] ${hasBackground ? "text-white" : "text-[#4B5563]"}`}>
                    {item.title}
                  </h1>
                  <p className={`mt-4 text-lg text-[17px] ${hasBackground ? "text-white" : "text-[#4B5563]"}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default WhyYouShouldSection;