import HeroSection from "@/components/reusable/HeroSection";
import ContactForm from "@/components/sections/ContactForm";
import { useModal } from "@/hooks/useModal";
import { deslugify } from "@/lib/utils";
import { useParams } from "react-router-dom";
import LoanAccordion from "./sections/loanAccordion";
import CallToActionBanner from "@/components/sections/CallToActionBanner";
import FAQ from "../../Accounts/SingleAccountPageSection/sections/Faq";
import RecentProductSection, { type Product } from "@/components/sections/RecentProductSection";
import { LoanStatistics } from "./sections/LoanStatistics";
import LoanCalculator from "./sections/LoanCalculator";


function SingleLoanPageSection() {
  const { loanName } = useParams();
  const { openModal } = useModal();

  const readableTitle: string = loanName
    ? deslugify(loanName)
    : "Personal Banking Insurance";
  const slides = [
    {
      title: `${readableTitle}`,
      description:
        "Empower your project with our comprehensive wireframe kits designed to meet the needs of any platform",
      buttonText: "",
      imageUrl: "/images/loan-hero.png",
    },
  ];

  const faqData = {
    title: "Frequently Asked Question On Home Loan",
    subtitle: "Let us know how we can help you today!",
    items: [
      {
        question: "How do I get started with your product?",
        answer:
          "Sign up via our website, create a personal account, customize your profile, and then add your product. We're here to help!",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, bank transfers, mobile payments, and digital wallets including PayPal and Apple Pay.",
      },
      {
        question: "Is there a free trial available?",
        answer:
          "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started.",
      },
      {
        question: "Is technical support available?",
        answer:
          "Absolutely! Our technical support team is available 24/7 via chat, email, and phone to assist with any issues or questions.",
      },
      {
        question: "Can I cancel my subscription?",
        answer:
          "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.",
      },
      {
        question: "Is my data secure with your product?",
        answer:
          "Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with international data protection standards.",
      },
    ],
  };

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
    {
      id: "4",
      title: "Social media marketing mastery",
      description:
        "Master the art of social media marketing to grow your online presence...",
      image: "/images/recent-product.jpg",
      buttonText: "Learn more",
    },
    {
      id: "5",
      title: "Email marketing automation",
      description:
        "Automate your email campaigns for better engagement and conversions...",
      image: "/images/recent-product.jpg",
      buttonText: "Discover",
    },
  ];

  const handleButtonClick = () => {
    openModal(<ContactForm />);
  };




  return (
    <>
    <HeroSection slides={slides} />
    
    <div className="container mx-auto py-16 ">
      <LoanStatistics />
      <LoanAccordion />
      <LoanCalculator />
    </div>

    <FAQ {...faqData} />
    <CallToActionBanner
      title="Let us hear what you need,Request a call and well call you back!"
      description=""
      buttonText="Request Call Back"
      onButtonClick={handleButtonClick}
    />
    <RecentProductSection
      products={recentProducts}
      title="Related Products"
    />
  </>
  )
}

export default SingleLoanPageSection
