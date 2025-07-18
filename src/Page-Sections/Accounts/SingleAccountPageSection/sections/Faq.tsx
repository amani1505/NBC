import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface FAQItem {
    question: string;
    answer: string;
  }
  
  interface FAQProps {
    title: string;
    subtitle: string;
    items: FAQItem[];
  }
  
  export default function FAQ({ title, subtitle, items }: FAQProps) {
    return (
      <section className="py-16 px-4 bg-nbc-dark-700" >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-white/80 text-base">
              {subtitle}
            </p>
          </div>
  
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {items.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-0 bg-transparent"
                >
                  <AccordionTrigger className="text-left font-medium text-white hover:text-white/90 px-6 py-4 border-b border-white/20 hover:no-underline" iconType="plus-minus">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pt-4 px-6 pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  }