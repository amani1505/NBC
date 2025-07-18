import WhyYouShouldSection from "@/components/sections/WhyYouShouldSection";

type WhyChooseProps = { title: string };

function WhyChoose({ title }: WhyChooseProps) {
    const whyYouShouldItems = [
        {
          icon: "/images/dynamic-website.svg",
          title: "Dynamic website",
          description:
            "It is well recognized that component of interaction design is an essential part of user UX",
        },
        {
          icon: "/images/static-website.svg",
          title: "Static website",
          description:
            "To enable a pleasurable and desirable end user experience, the following",
        },
        {
          icon: "/images/interactive-content.svg",
          title: "Interactive content",
          description:
            "Usability is attached with all tools used by humans and is extended to both digital ",
        },
        {
          icon: "/images/interaction-design.svg",
          title: "Interaction design",
          description:
            "The goal of interaction design is to create a product that produces an efficient ",
        },
      ];

  return (
    <div>
          <WhyYouShouldSection title={`Why Choose ${title}`} description={"Let us know how we can help you today!"} items={whyYouShouldItems} hasBackground={false}/>
    </div>
  )
}

export default WhyChoose
