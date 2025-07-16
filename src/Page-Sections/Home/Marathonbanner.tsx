import HeroSection from "@/components/reusable/HeroSection";

const slides = [
    {
      title: "NBC Dodoma Marathon",
      description:
        "Empower your project with our comprehensive wireframe kits designed to meet the needs of any platform",
      buttonText: "Open Account",
      imageUrl: "/images/marathon-hero.png",
      dateText:"27.07.2025"
    },
    {
      title: "Secure Your Wealth",
      description:
        "Our trusted platform offers secure and reliable financial management tools.",
      buttonText: "Learn More",
      imageUrl: "/images/hero2.jpg",
    },
    {
      title: "Grow with Confidence",
      description:
        "Invest smarter with our expert guidance and personalized strategies.",
      buttonText: "Explore Now",
      imageUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
  ];


function Marathonbanner() {
  return (
   <>
    <HeroSection slides={slides}  hasForex={false} height="70vh"/>
   </>
  )
}

export default Marathonbanner
