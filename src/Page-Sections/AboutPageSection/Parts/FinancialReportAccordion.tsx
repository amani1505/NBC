import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Content = {
  name: string;
  status?: "closed" | "open";
  deadlineDate?:string
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
  titleColor?:string
};

function FinancialReportAccordion({
  title,
  items,
  itemTitleColor,
  titleColor= "text-black"
}: FinancialReportAccordionProps) {
  return (
    <div className="w-full  mx-auto">
      <Card className="p-10 shadow-card-custom border-gray-300">
        {title && <h4 className={`text-lg font-semibold  mb-4 ${titleColor}`}>{title}</h4>}

        <Accordion type="single" collapsible className="w-full" defaultValue={items[0]?.id}>
          {items.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-gray-300"
            >
              <AccordionTrigger
                className={`font-bold text-[14px] hover:text-finance-blue-light ${itemTitleColor}`}
                iconType="plus-minus"
              >
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563]">
                {item.contents?.map((content, index) => (
                  <div className="flex items-center gap-4 mb-2 justify-between" key={index}>
                   <div className="flex items-center gap-4 mb-2">
                   <img src="/images/pdf.svg" alt="" className="h-7 w-7" />
                    <p>{content.name}</p>
                    {content.status && (
                      <Badge
                        variant={
                          content.status === "closed"
                            ? "error_outline"
                            : "sucess_outline"
                        }
                        className="uppercase"
                      >
                        {content.status}
                      </Badge>
                    )}
                   </div>
                   <div>
                    <Button variant="primary" disabled={content.status === "closed"}>Apply Now</Button>
                   </div>

                   {/* {
                    content.deadlineDate &&(
                      <div>
                      Deadline: {content.deadlineDate}
                     </div>

                    )
                   } */}
                
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  );
}

export default FinancialReportAccordion;
