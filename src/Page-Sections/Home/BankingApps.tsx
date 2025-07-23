import Kiganjani from "./BankingApp/Kiganjani";
import Connect from "./BankingApp/Connect";
import Wakala from "./BankingApp/Wakala";
import EduConnect from "./BankingApp/Edu-Connect";
import OfferingSection from "@/components/sections/OfferingSection";

function BankingApps() {
  const tabs = [
    {
      label: "NBC Kiganjani",
      value: "kiganjani",
      content: <Kiganjani />,
    },
    {
      label: "NBC Connect",
      value: "connect",
      content: <Connect />,
    },
    {
      label: "NBC Wakala App",
      value: "wakala",
      content: <Wakala />,
    },
    {
      label: "NBC Edu-connect",
      value: "edu",
      content: <EduConnect />,
    },
  ];

  return (
    <div className=" w-full">
      <OfferingSection
        title="Our Digital Banking Solutions"
        description="Let us know how we can help you today!Let us know how we can help you today!"
        tabs={tabs}
        defaultTab="kiganjani"
        hasContainer={false}
      />
    </div>
  );
}

export default BankingApps;
