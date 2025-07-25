import HeroSection from "@/components/reusable/HeroSection";
import OfferingSection from "@/components/sections/OfferingSection";
import HowWeProtectYou from "./Sections/HowWeProtectYou";
import HowToProtectYourself from "./Sections/HowToProtectYourself";

function SecurityCenterPageSection() {
  const slides = [
    {
      title: `Security Centre`,
      description:
        "Empower your project with our comprehensive wireframe kits designed to meet the needs of any platform",
      buttonText: "",
      imageUrl: "/images/security-hero.png",
    },
  ];

 const tabs = [
    {
      label: "How We Protect You",
      value: "protect",
      content: <HowWeProtectYou />,
    },
    {
      label: "How To Protect Yourself",
      value: "yourself",
      content: <HowToProtectYourself />,
    },
   
  ];

  return (
    <>
      <HeroSection slides={slides} hasForex={false} height="60vh" />
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="py-10">
        

          <OfferingSection
            title="Help us ensure your online banking security"
            description="   We have a number of systems and security protocols in place to keep
            you safe when you bank online, protecting you from identity theft or
            other threats. Read about our measures and what you should do to
            keep your money safe."
            tabs={tabs}
            defaultTab="protect"
            hasContainer={false}
          />
        </div>
      </div>
    </>
  );
}

export default SecurityCenterPageSection;
