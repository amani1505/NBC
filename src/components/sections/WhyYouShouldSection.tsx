import { motion } from "framer-motion";

type WhyYouShouldSectionItem = {
  icon: string;
  title: string;
  description: string;
};

type WhyYouShouldSectionProps = {
  title: string;
  description: string;
  items: WhyYouShouldSectionItem[];
};

function WhyYouShouldSection({
  title,
  description,
  items,
}: WhyYouShouldSectionProps) {
  const bg = "/images/kiganjani-bg.svg";
  return (
    <>
      <motion.div className="   ">
        {/* Header Section */}

        <div
          className="h-[65vh] bg-[#172960] py-18 flex flex-col justify-center"
          style={{
            backgroundImage: `url(${bg})`,

            backgroundSize: "cover", // Optional: Ensures image covers the div
            backgroundPosition: "center", // Optional: Centers the image
            backgroundRepeat: "no-repeat", // Optional: Prevents image repetition
          }}
        >
          <div className="text-center text-white mb-12">
            <h1 className=" text-[52px] font-[700]">{title}</h1>
            <p className="text-[18px]  mb-5">{description}</p>
          </div>
          <div className="flex justify-center px-64 gap-14">
            {items.map((item, index) => (
              <div className="flex flex-col items-center gap-5" key={index}>
                <img src={item.icon} alt="" width={50} />
                <div className="text-center">
                  <h1 className="text-white text-[20px] font-[800]">
                    {item.title}
                  </h1>
                  <p className="mt-4 text-white text-lg text-[17px]">
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
