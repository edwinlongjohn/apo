import { Link } from "react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/site";
import { Reveal } from "./Reveal";

/** Contact call-to-action strip used at the end of most pages. */
export function CtaStrip({ title = "Tell us what you need.", text = "We will reply within one working day and tell you who can help." }: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-20">
      <div className="pattern-lines absolute inset-0 opacity-40" />
      <div className="container-law relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
        <Reveal from="left">
          <p className="eyebrow mb-3">Speak to a lawyer</p>
          <h2 className="text-primary-foreground">{title}</h2>
          <p className="mt-3 max-w-xl text-primary-foreground/70">{text}</p>
        </Reveal>
        <Reveal from="right" className="flex flex-wrap gap-3">
          <Button asChild variant="brass" size="lg">
            <Link to="/contact">
              Speak to a lawyer <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="ghostLight" size="lg">
            <a href={contact.phoneHref}>
              <Phone /> {contact.phone}
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}