import HeroSection from "@/components/reusable/HeroSection";
import OfferingSection from "@/components/sections/OfferingSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import AccountContent from "./TabsContent/AccountContent";
import LoanContent from "./TabsContent/LoanContent";
import InsuranceContent from "./TabsContent/InsuranceContent";
import WayToBankContent from "./TabsContent/WayToBankContent";
import WhyYouShouldSection from "@/components/sections/WhyYouShouldSection";
import CallToActionBanner from "@/components/sections/CallToActionBanner";
import ContactForm from "@/components/sections/ContactForm";
import { useModal } from "@/hooks/useModal";

function IndividualPageSection() {

  const { openModal } = useModal();


  const slides = [
    {
      title: "Personal Banking For Individuals",
      description:
        "Empower your project with our comprehensive wireframe kits designed to meet the needs of any platform",
      buttonText: "",
      imageUrl: "/images/individual-hero.jpg",
    },
    {
      title: "Secure Your Wealth",
      description:
        "Our trusted platform offers secure and reliable financial management tools.",
      buttonText: "",
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

  const cards = [
    {
      title: "Open Account",
      img: "/images/Account.svg",
    },
    {
      title: "Request Loan",
      img: "/images/Loan.svg",
    },
    {
      title: "Insurance",
      img: "/images/insurance.svg",
    },
    {
      title: "Compare Account",
      img: "/images/compare.svg",
    },
    {
      title: "Talk To Us",
      img: "/images/talk.svg",
    },

    // Add more cards as needed
  ];
  const offeringTabs = [
    {
      value: "account",
      label: "Account",
      content: <AccountContent />,
      // icon: <MessageCircle />
    },
    {
      value: "loan",
      label: "Loan",
      content: <LoanContent />,
      // icon: <MessageSquare />
    },
    {
      value: "insurance",
      label: "Insurance",
      content: <InsuranceContent />,
      // icon: <Building />
    },
    {
      value: "waytobank",
      label: "Way to Bank",
      content: <WayToBankContent />,
      // icon: <HelpCircle />
    },
  ];

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

// RESENT PRODUCTS
const handleButtonClick = () => {
  openModal(<ContactForm />);
};



  return (
    <>
      <HeroSection slides={slides} />
      <SolutionsSection
        title="How Can We Help You Today"
        description="Let us know how we can help you today!"
        cards={cards}
      />
      <OfferingSection
        title="Our Personal Banking Offerings"
        description="Let us know how we can help you today!Let us know how we can help you today!"
        tabs={offeringTabs}
        defaultTab="account"
        maxWidth="max-w-4xl"
      />
      <WhyYouShouldSection
        title="Why You Should Bank With Us"
        description="Let us know how we can help you today!"
        items={whyYouShouldItems}
      />
      <CallToActionBanner
        title="Let us hear what you need,Request a call and well call you back!"
        description=""
        buttonText="Request Call Back"
        onButtonClick={handleButtonClick}
      />

      </>
  );
}

export default IndividualPageSection;
