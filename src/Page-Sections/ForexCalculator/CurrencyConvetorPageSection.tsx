import HeroSection from "@/components/reusable/HeroSection";
import { ForexBoard } from "./ForexBoard";
import { CurrencyCalculator } from "./CurrencyCalculator";

function CurrencyConvetorPageSection() {
      const slides = [
    {
      title: `Forex Board & Currency Calculator`,
      description:
        "Empower your project with our comprehensive wireframe kits designed to meet the needs of any platform",
      buttonText: "",
      imageUrl: "/images/convertor-hero.jpg",
    },
  ];
  return (
    <>
      <HeroSection slides={slides} hasForex={false} height="60vh" />
 <div className=" p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <ForexBoard />
          <CurrencyCalculator />
        </div>
      </div>
    </div>

    </>
  )
}

export default CurrencyConvetorPageSection
