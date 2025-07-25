import HeroSection from "@/components/reusable/HeroSection"
import CallToAction from "./Home/CallToAction";

function ContactUsPageSection() {
    const slides = [
    {
      title: `About NBC Bank`,
      description:
        "Empower your project with our comprehensive wireframe kits designed to meet the needs of any platform",
      buttonText: "",
      imageUrl: "/images/individual-hero.jpg",
    },
  ];
  return (
    <>
       <HeroSection slides={slides} hasForex={false} height="60vh" />
       <CallToAction />
    </>
  )
}

export default ContactUsPageSection
