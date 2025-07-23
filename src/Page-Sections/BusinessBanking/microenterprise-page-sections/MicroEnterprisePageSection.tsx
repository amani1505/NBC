import HeroSection from "@/components/reusable/HeroSection";
import OfferingSection from "@/components/sections/OfferingSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import WhyYouShouldSection from "@/components/sections/WhyYouShouldSection";
import CallToActionBanner from "@/components/sections/CallToActionBanner";
import ContactForm from "@/components/sections/ContactForm";
import { useModal } from "@/hooks/useModal";
import AccountContent from "@/components/sections/offering-tab-contents/AccountContent";
import LoanContent from "@/components/sections/offering-tab-contents/LoanContent";
import InsuranceContent from "@/components/sections/offering-tab-contents/InsuranceContent";
import WayToBankContent from "@/components/sections/offering-tab-contents/WayToBankContent";

function MicroEnterprisePageSection() {

  const { openModal } = useModal();


  const slides = [
    {
      title: "Business Banking For Micro Enterprises",
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



    const solutions = [
    {
      id: "1",
      title: "NBC Bank Honors Yanga SC as 2024/25 NBC Premier League Champions",
      description:
        "Yesterday, we proudly handed over the 2024/25 NBC Premier League trophy to Young Africans SC after their",
      image: "/images/offering.jpg",
      category: "CUSTOMER STORIES",
      date: "Continue Reading →",
      href: "/",
      compareLink: "/",
    },
    {
      id: "2",
      title: "NBC and GSM Partner",
      description: "Learn the essential steps to turn your product idea",
      image: "/images/news2.jpg",
      category: "INVESTMENT",
      date: "Continue Reading →",
      featured: false,
      href: "/",
      compareLink: "/",
    },
    {
      id: "3",
      title: "Mbogo Ranches & NBC",
      description: "Learn valuable techniques and strategies to manage",
      image: "/images/news3.jpg",
      category: "",
      date: "Continue Reading →",
      featured: false,
      href: "/",
      compareLink: "/",
    },
    {
      id: "4",
      title: "NBC Bank Presents BMW X1 Car Prize to Winner of ",
      description: "Learn valuable techniques and strategies to manage",
      image: "/images/news4.jpg",
      category: "BEYOND BANKING",
      date: "Continue Reading →",
      featured: false,
      href: "/",
      compareLink: "/",
    },
  ];
  const offeringTabs = [
    {
      value: "account",
      label: "Account",
      content: <AccountContent items={solutions}/>,
      // icon: <MessageCircle />
    },
    {
      value: "loan",
      label: "Loan",
      content: <LoanContent items={solutions} />,
      // icon: <MessageSquare />
    },
    {
      value: "insurance",
      label: "Insurance",
      content: <InsuranceContent items={solutions} />,
      // icon: <Building />
    },
    {
      value: "waytobank",
      label: "Way to Bank",
      content: <WayToBankContent  items={solutions} />,
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

// const recentProducts:Product[] = [
//   {
//     id: "1",
//     title: "Effective product marketing techniques for small businesses",
//     description: "Explore cost-effective marketing strategies to promote your product busi...",
//     image: "/images/recent-product.jpg",
//     buttonText: "Learn more"
//   },
//   {
//     id: "2",
//     title: "Digital transformation strategies for modern enterprises",
//     description: "Discover how to leverage technology to streamline your business operations...",
//     image: "/images/recent-product.jpg",
//     buttonText: "Explore now"
//   },
//   {
//     id: "3",
//     title: "Customer retention best practices",
//     description: "Learn proven techniques to keep your customers engaged and loyal...",
//     image: "/images/recent-product.jpg",
//     buttonText: "Get started"
//   },
//   {
//     id: "4",
//     title: "Social media marketing mastery",
//     description: "Master the art of social media marketing to grow your online presence...",
//     image: "/images/recent-product.jpg",
//     buttonText: "Learn more"
//   },
//   {
//     id: "5",
//     title: "Email marketing automation",
//     description: "Automate your email campaigns for better engagement and conversions...",
//     image: "/images/recent-product.jpg",
//     buttonText: "Discover"
//   }
// ];

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
        title="Our Micro Enterprise Banking Offerings"
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

      {/* <RecentProductSection products={recentProducts}  title="Related Products"/> */}
    </>
  );
}

export default MicroEnterprisePageSection;
