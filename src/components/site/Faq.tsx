import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/site";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {faqs.map((f, i) => (
        <Reveal key={f.q} delay={i * 40}>
          <AccordionItem value={f.q} className="border-border">
            <AccordionTrigger className="py-6 text-left font-display text-lg text-primary hover:text-brass-deep hover:no-underline md:text-xl">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-base text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        </Reveal>
      ))}
    </Accordion>
  );
}
