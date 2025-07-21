import { useParams } from "react-router-dom";
import HeroSection from "@/components/reusable/HeroSection"
import { deslugify } from "@/lib/utils";
import WayToBankAccordion from "./sections/wayToBankAccordion";
import { VideoOverview } from "./sections/VideoOverview";


function WaytoBankPageSection() {
  const { wayToBankName } = useParams();


  const readableTitle: string = wayToBankName
    ? deslugify(wayToBankName)
    : "Personal Banking Insurance";
  const slides = [
    {
      title: `${readableTitle}`,
      description:
        "Empower your project with our comprehensive wireframe kits designed to meet the needs of any platform",
      buttonText: "",
      imageUrl: "/images/individual-hero.jpg",
    },
  ];

  const handleVideoPlay = () => {
    // toast({
    //   title: "Video Playing",
    //   description: "Loading overview video content...",
    // });
    console.log("Play")
  };


  return (
    <>
       <HeroSection slides={slides} hasForex={false} />
       <div className="container mx-auto py-16 ">
       <VideoOverview onPlayVideo={handleVideoPlay} videoUrl="https://www.youtube.com/watch?v=q2rUTg-0Fk4"/>
        <WayToBankAccordion />
       </div>
     
    </>
  )
}

export default WaytoBankPageSection
