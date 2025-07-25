
// import { Banknote, Building, HelpCircle, MessageCircle, MessageSquare } from "lucide-react"
import BusinessSolution from "./BankSolution/BusinessSolution"
import CorporateSolution from "./BankSolution/CorporateSolution"
import PersonalSolution from "./BankSolution/PersonalSolution"
import LaRiba from "./BankSolution/LaRiba"
import OfferingSection from "@/components/sections/OfferingSection"
import ForeignExchange from "./BankSolution/ForeignExchange"

function BankingSolutions() {
  const offeringTabs = [
    {
      value: "personal",
      label: "Personal",
      content: <PersonalSolution />,
      // icon: <MessageCircle />
    },
    {
      value: "business",
      label: "Business",
      content: <BusinessSolution />,
      // icon: <MessageSquare />
    },
    {
      value: "corporate",
      label: "Corporate",
      content: <CorporateSolution />,
      // icon: <Building />
    },
    {
      value: "lariba",
      label: "La Riba",
      content: <LaRiba />,
      // icon: <HelpCircle />
    },
     {
      value: "foreignexchange",
      label: "Foreign Exchange",
      content: <ForeignExchange />,
      // icon: <Banknote />
    }
  ];

  return (
    <div>
      <OfferingSection
        title="Our Banking Solutions"
        description="Comprehensive financial services tailored to your needs"
        tabs={offeringTabs}
        defaultTab="personal"
        maxWidth="max-w-4xl"
      />
    </div>
  );
}

export default BankingSolutions
