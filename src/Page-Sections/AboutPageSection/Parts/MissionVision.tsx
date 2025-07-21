import WhyYouShouldSection from "@/components/sections/WhyYouShouldSection";

function MissionVision() {
  const missionVision = [
    {
      icon: "/images/dynamic-website.svg",
      title: "Vision",
      description:
        "It is well recognized that component of interaction design is an essential part of user UX",
    },
    {
      icon: "/images/static-website.svg",
      title: "Mission",
      description:
        "To enable a pleasurable and desirable end user experience, the following",
    },
    // {
    //   icon: "/images/interactive-content.svg",
    //   title: "Interactive content",
    //   description:
    //     "Usability is attached with all tools used by humans and is extended to both digital ",
    // },
    {
      icon: "/images/interaction-design.svg",
      title: "Values",
      description:
        "The goal of interaction design is to create a product that produces an efficient ",
    },
  ];

  return (
    <div>
        <WhyYouShouldSection title="" description="" items={missionVision} hasBackground={false}/>
    </div>
  )
}

export default MissionVision
