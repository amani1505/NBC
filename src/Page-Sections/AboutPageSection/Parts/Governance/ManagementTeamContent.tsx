import type { Content } from "./ContentCard";
import ContentCard from "./ContentCard";

function ManagementTeamContent() {
  const contents: Content[] = [
    {
      id: "1",
      title: "Erick Hubert",
      description: "UX/UI Designer",
      image: "/images/recent-product.jpg",
    },
    {
      id: "2",
      title: "Erick Hubert",
      description: "UX/UI Designer",
      image: "/images/recent-product.jpg",
    },
    {
      id: "3",
      title: "Erick Hubert",
      description: "UX/UI Designer",
      image: "/images/recent-product.jpg",
    },
  ];

  return (
    <>
      <div className="grid md:grid-cols-3 gap-10">
        {contents?.map((content, index) => (
          <div key={index}>
            <ContentCard content={content} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ManagementTeamContent
