import AccordionSection from "@/components/sections/accordionSection";

function PrivacyQuestions() {
  const questions = [
   {
    id: "key-benefits",
    title: "Key Benefits",
    content: "Sign up on our website, explore features, customize your profile, and start using our product. We're here to help!"
  },
  {
    id: "eligibility",
    title: "Eligibility Criteria", 
    content: "Must be 18 years or older, have a stable income, valid identification, and meet our credit requirements."
  },
  {
    id: "documents",
    title: "Required Documents",
    content: "Valid ID, proof of income, bank statements, property documents, and any additional documents as required."
  },
  {
    id: "terms",
    title: "Terms and Conditions",
    content: "Please read our complete terms and conditions for detailed information about loan terms, interest rates, and repayment schedules."
  }
  ];

  return (
    <AccordionSection
      title="Privacy Questions"
      items={questions}
      titleColor="text-nbc-dark-950"
    />
  );
}

export default PrivacyQuestions
