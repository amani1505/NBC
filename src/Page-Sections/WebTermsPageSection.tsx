import HeroSection from "@/components/reusable/HeroSection";
import AccordionSection from "@/components/sections/accordionSection";

function WebTermsPageSection() {
  const slides = [
    {
      title: `Website Terms of use`,
      description:
        "Empower your project with our comprehensive wireframe kits designed to meet the needs of any platform",
      buttonText: "",
      imageUrl: "/images/individual-hero.jpg",
    },
  ];

  const webTerms = [
    {
      id: "key-benefits",
      title: "Key Benefits",
      content:
        "Sign up on our website, explore features, customize your profile, and start using our product. We're here to help!",
    },
    {
      id: "eligibility",
      title: "Eligibility Criteria",
      content:
        "Must be 18 years or older, have a stable income, valid identification, and meet our credit requirements.",
    },
    {
      id: "documents",
      title: "Required Documents",
      content:
        "Valid ID, proof of income, bank statements, property documents, and any additional documents as required.",
    },
    {
      id: "terms",
      title: "Terms and Conditions",
      content:
        "Please read our complete terms and conditions for detailed information about loan terms, interest rates, and repayment schedules.",
    },
  ];

  return (
    <>
      <HeroSection slides={slides} hasForex={false} height="60vh" />

  <div className="max-w-7xl mx-auto px-4 py-8">
        <AccordionSection
        title="General Web Terms"
        items={webTerms}
        titleColor="text-nbc-dark-950"
      />
  </div>
    </>
  );
}

export default WebTermsPageSection;
