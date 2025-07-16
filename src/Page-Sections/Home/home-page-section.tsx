import HeroSection from "@/components/reusable/HeroSection";
import BankingTailoredSection from "./BankingTailoredSection";
import NewsSection from "./NewsSection";
import Marathonbanner from "./Marathonbanner";
import CarriesandVacancies from "./CarriesandVacancies";
import BankingSolutions from "./BankingSolutions";
import CallToAction from "./CallToAction";
import BankingApps from "./BankingApps";

function HomePageSection() {
  const slides = [
    {
      title: "NBC Malengo Saving Account",
      description:
        "Empower your project with our comprehensive wireframe kits designed to meet the needs of any platform",
      buttonText: "Open Account",
      imageUrl: "images/home-hero.jpg",
    },
    {
      title: "Secure Your Wealth",
      description:
        "Our trusted platform offers secure and reliable financial management tools.",
      buttonText: "Learn More",
      imageUrl: "images/hero2.jpg",
    },
    {
      title: "Grow with Confidence",
      description:
        "Invest smarter with our expert guidance and personalized strategies.",
      buttonText: "Explore Now",
      imageUrl:
        "images/hero1.jpg",
    },
  ];

  return (
    <>
      <HeroSection slides={slides} />
      <BankingTailoredSection />
      <BankingSolutions />
      <BankingApps />
      <NewsSection />
      <Marathonbanner />
      <CarriesandVacancies />
      <CallToAction />
    </>
  );
}

export default HomePageSection;
