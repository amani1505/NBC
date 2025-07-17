import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Card } from "../ui/card";

interface AccordionSectionItemData {
  id: string;
  title: string;
  content: string;
}

interface AccordionSectionProps {
  title?: string;
  items?: AccordionSectionItemData[];
  itemTitleColor?:string
}

const defaultItems: AccordionSectionItemData[] = [
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

function AccordionSection ({
  title ,
  items = defaultItems,
  itemTitleColor
}: AccordionSectionProps)  {
  return (
    <div className="w-full  mx-auto">
      <Card className="p-10 shadow-card-custom border-gray-300">
    {
      title &&(
        <h4 className="text-lg font-semibold text-nbc-dark-950 mb-4">
        {title}
      </h4>
      )
    }
        
        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-gray-300">
              <AccordionTrigger className={`font-bold text-[14px] hover:text-finance-blue-light ${itemTitleColor}`} iconType="plus-minus">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563]">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  );
};

export default AccordionSection;