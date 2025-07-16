import SolutionsSection from "@/components/sections/SolutionsSection";

const cards = [
  {
    title: "Open Account",
    img: "/images/Account.svg",
  },
  {
    title: "Apply for Loan",
    img: "/images/Loan.svg",
  },
  {
    title: "Calculators",
    img: "/images/calculator.svg",
  },
  {
    title: "Locate Us",
    img: "/images/locate.svg",
  },
  {
    title: "Talk To Us",
    img: "/images/talk.svg",
  },

  {
    title: "Way To Bank",
    img: "/images/way.svg",
  },
  // Add more cards as needed
];

function BankingTailoredSection() {
  return (
    <SolutionsSection
      title=" Banking Tailored To Your Needs"
      description=" Let us know how we can help you today!"
      cards={cards}
    />
  );
}

export default BankingTailoredSection;
