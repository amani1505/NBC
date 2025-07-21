import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"


type Content = {
    name: string;
  };
  
  type Item = {
    id: string;
    title: string;
    contents?: Content[];
  };
  
  type FinancialReportAccordionProps = {
    title?: string;
    items: Item[];
    itemTitleColor?: string;
  };
  
  function FinancialReportAccordion({
    title,
    items,
    itemTitleColor,
  }: FinancialReportAccordionProps) {
  return (
    <div className="w-full  mx-auto">
    <Card className="p-10 shadow-card-custom border-gray-300">
  {
    title &&(
      <h4 className="text-lg font-semibold  mb-4">
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
            
              {item.contents?.map((content, index) => (
                <div className="flex items-center gap-4 space-y-2" key={index}>
                  <img src="/images/pdf.svg" alt="" className="h-7 w-7" />
                  <p>{content.name}</p>
                </div>
              ))}

            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  </div>
  )
}

export default FinancialReportAccordion
