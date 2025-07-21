import type { Product } from "@/components/sections/RecentProductSection";
import HeadingPart from "../Parts/HeadingPart";
import MissionVision from "../Parts/MissionVision";
import OverviewBanner from "../Parts/OverviewBanner";
import ImageCard from "@/components/sections/ImageCard";
import NewsSection from "@/Page-Sections/Home/NewsSection";
import CarriesandVacancies from "@/Page-Sections/Home/CarriesandVacancies";

function OverviewPageSection() {
  const recentProducts: Product[] = [
    {
      id: "1",
      title: "Effective product marketing techniques for small businesses",
      description:
        "Explore cost-effective marketing strategies to promote your product busi...",
      image: "/images/recent-product.jpg",
      buttonText: "Learn more",
    },
    {
      id: "2",
      title: "Digital transformation strategies for modern enterprises",
      description:
        "Discover how to leverage technology to streamline your business operations...",
      image: "/images/recent-product.jpg",
      buttonText: "Explore now",
    },
    {
      id: "3",
      title: "Customer retention best practices",
      description:
        "Learn proven techniques to keep your customers engaged and loyal...",
      image: "/images/recent-product.jpg",
      buttonText: "Get started",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-44">
        <HeadingPart
          title="Our History"
          subtitle={`A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. A manager could create a visual guide for the team to complete the build-out.\n

A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. A manager could create a visual guide for the team to complete the build-out.A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. A manager could create a visual guide for the team to complete the build-out.\n

A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. A manager could create a visual guide for the team to complete the build-out.A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. A manager could create a visual guide for the team to complete the build-out.`}
        />
      </div>
      <div className="px-44">
        <MissionVision />
      </div>

      <div className="my-10">
        <OverviewBanner
          title="Exceptional materials. The most durable glass ever in a smartphone. A beautiful new gold finish, achieved with an atomic-level. "
          description="  A visual guide could be a wireframe, creative composition, or
            information architecture. A device that enables collaboration will
            lessen the chance of work having to be completely redone. A manager
            could create a visual guide for the team to complete the build-out."
          onButtonClick={() => {}}
        />
      </div>

      <div className="my-20 bg-nbc-dark-700">
        <div className="container mx-auto py-10 ">
          <div className="grid grid-cols-3 gap-10">
            {recentProducts?.map((product, index) => (
              <div key={index}>
                <ImageCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-10">
        <OverviewBanner
          title="Corporate Governance "
          description="A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work."
          onButtonClick={() => {}}
          hasQuote={false}
          buttonText="Learn More"
        />
      </div>
      <NewsSection />
      <CarriesandVacancies />
    </>
  );
}

export default OverviewPageSection;
