import { motion } from "framer-motion";

const cards = [
  {
    title: "Open Account",
    img: "images/Account.svg",
  },
  {
    title: "Apply for Loan",
    img: "images/Loan.svg",
  },
  {
    title: "Calculators",
    img: "images/calculator.svg",
  },
  {
    title: "Locate Us",
    img: "images/locate.svg",
  },
  {
    title: "Talk To Us",
    img: "images/talk.svg",
  },

  {
    title: "Way To Bank",
    img: "images/way.svg",
  },
  // Add more cards as needed
];

function BankingTailoredSection() {
  return (
    <motion.div className="container mx-auto py-24 text-center">
      <h1 className="text-nbc-dark-950 text-[48px] font-[700]">
        Banking Tailored To Your Needs
      </h1>
      <p className="text-[18px] text-[#4B5563] mb-5">
        Let us know how we can help you today!
      </p>
      <div>
        <div className="flex gap-6 justify-center mt-4 ">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group rounded-md px-5 py-6 shadow-md flex flex-col justify-center items-center gap-5 cursor-pointer
                text-[#262556] bg-gradient-to-b from-[rgba(188,196,220,0.8)] to-transparent
                transition-all duration-300
                hover:scale-105 hover:!bg-[#262556] hover:bg-none hover:text-white w-1/2"
            >
              <div className="flex justify-center">
                <img
                  src={`/${card.img}`}
                  alt={card.title}
                  width={60}
                  className="transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
              </div>
              <div className="mt-4 font-[600]">{card.title}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default BankingTailoredSection;