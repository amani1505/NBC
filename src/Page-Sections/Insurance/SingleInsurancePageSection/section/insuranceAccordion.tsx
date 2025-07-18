import AccordionSection from "@/components/sections/accordionSection";
import Button from "@/components/ui/button";

const defaultItems = [
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

function InsuranceAccordion() {
  return (
    <div>
      <div className="text-center py-10">
        <h1 className="section-title text-center">
          Instantly Get Your Motor Insurance
        </h1>
        <p className="section-subtitle">
          Let us know how we can help you today!
        </p>
      </div>
      <AccordionSection
        items={defaultItems}
        itemTitleColor="text-nbc-dark-950"
      />
      <div className=" py-8 flex justify-center gap-5">
        <Button variant="outline">Fill Claim Form</Button>
        <Button>Apply For Motor Insurance</Button>
      </div>
    </div>
  );
}

export default InsuranceAccordion;
