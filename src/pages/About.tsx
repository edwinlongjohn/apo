import { Link } from "react-router";
import { ArrowRight, Eye, Gem, HeartHandshake, ShieldCheck, Globe2, Clock3, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CtaStrip } from "@/components/site/CtaStrip";
import { Seo } from "@/components/site/Seo";
import { contact, getPractice, offices, values } from "@/data/site";
import libraryImg from "@/assets/law-library.jpg";

const valueIcons = [Eye, ShieldCheck, HeartHandshake, Gem];
const principles = [
  "Each matter has a lead lawyer.",
  "We explain your options in plain language.",
  "We agree on the scope of work and fees before we begin.",
  "We tell you what is happening and what comes next.",
];
const regions = ["Africa", "Europe", "North America", "Middle East", "Asia"];
const experience = [
  { area: "corporate-commercial", text: "Advising a company on the terms of a shareholders' agreement." },
  { area: "real-estate-property", text: "Acting for a landlord in a dispute over a commercial lease." },
  { area: "private-wealth-family", text: "Advising a family on the administration of an estate." },
  { area: "employment-labour", text: "Advising an employer on a redundancy process." },
  { area: "data-protection-cyber-security", text: "Advising a business on a privacy notice and data handling." },
];

export default function About() {
  return (
    <>
      <Seo
        title="About the firm"
        description="Akpobire Preh & Ocholi Attorneys is a law firm for individuals and businesses in Nigeria and abroad. Learn how we work."
        canonical="https://apo-law.com/about"
      />

      <PageHero
        eyebrow="About the firm"
        title="About the firm"
        intro="Akpobire Preh & Ocholi Attorneys is a law firm for individuals and businesses in Nigeria, and for Nigerians who do business abroad. We act in every area of law."
      />

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who we are" title="One place to go for legal advice." />
            <Reveal>
              <p className="text-muted-foreground">
                Akpobire Preh & Ocholi Attorneys is a law firm for individuals and businesses in Nigeria, and for Nigerians who do business abroad. The firm was set up so that clients have one place to go for legal advice. Whatever the matter, you deal with one firm and one named lawyer.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="mt-10 text-primary">Who we act for</h3>
              <p className="mt-3 text-muted-foreground">
                We act for individuals, families and businesses of every size across Nigeria. We also act for Nigerians abroad, and for companies and individuals who need advice on Nigerian law.
              </p>
            </Reveal>
          </div>
          <Reveal from="right" className="relative">
            <img src={libraryImg} alt="Law books and scales of justice" width={1200} height={1408} loading="lazy" className="aspect-[5/4] w-full object-cover" />
            <div className="absolute -bottom-8 left-8 right-8 bg-primary p-6 text-primary-foreground shadow-elegant md:left-auto md:w-80">
              <p className="font-display text-xl italic">“One firm and one named lawyer, whatever the matter.”</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="How the firm works" title="Four commitments to every client." align="center" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal key={p} delay={i * 100} className="h-full">
              <div className="card-law h-full p-7">
                <span className="font-display text-5xl text-brass/50">0{i + 1}</span>
                <p className="mt-4 text-primary">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="pattern-lines absolute inset-0 opacity-40" />
        <div className="relative">
          <SectionHeading eyebrow="Our values" title="Four values guide how we work." light />
          <div className="grid gap-px bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = valueIcons[i]!;
              return (
                <Reveal key={v.title} delay={i * 120} className="h-full">
                  <div className="group h-full bg-primary p-8 transition-colors duration-500 hover:bg-navy-soft">
                    <Icon className="h-9 w-9 text-brass transition-transform duration-500 group-hover:scale-110" strokeWidth={1.3} />
                    <h3 className="mt-6 text-primary-foreground">{v.title}</h3>
                    <p className="mt-2 text-primary-foreground/70">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <Section id="global-network">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Global network" title="Reach us in your own time zone." text="Our partners are Nigerian lawyers based in cities around the world. If you live abroad, or do business with Nigeria, you can reach us in your own time zone." />
            <Reveal>
              <p className="border-l-2 border-brass bg-secondary p-5 text-sm text-muted-foreground">
                Each partner advises only on the law they are qualified to practise. Where a matter needs advice on Nigerian law, your partner will refer it to our lawyers in Nigeria.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="navy" size="lg"><a href={contact.whatsapp}><MessageCircle /> WhatsApp</a></Button>
              <Button asChild variant="outlineNavy" size="lg"><a href={contact.phoneHref}>{contact.phone}</a></Button>
            </Reveal>
          </div>
          <div className="grid gap-3 self-center">
            {regions.map((r, i) => (
              <Reveal key={r} delay={i * 90} from="right">
                <div className="group flex items-center justify-between border border-border bg-card p-5 transition-all duration-500 hover:translate-x-2 hover:border-brass">
                  <span className="flex items-center gap-4 font-display text-xl text-primary"><Globe2 className="h-5 w-5 text-brass transition-transform duration-700 group-hover:rotate-180" /> {r}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Partners to be announced</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="muted" id="experience">
        <SectionHeading eyebrow="Experience" title="The kinds of matters we handle." text="These are the kinds of matters our lawyers handle. We do not name clients, and we do not describe results." />
        <div className="grid gap-4 md:grid-cols-2">
          {experience.map((e, i) => (
            <Reveal key={e.text} delay={i * 80}>
              <div className="flex items-start gap-5 border-b border-border py-5">
                <Clock3 className="mt-1 h-5 w-5 shrink-0 text-brass" strokeWidth={1.4} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-brass-deep">{getPractice(e.area)?.title}</p>
                  <p className="mt-1 text-primary">{e.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="careers">
        <div className="grid items-center gap-10 md:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <p className="eyebrow mb-4">Join us</p>
            <h2 className="text-primary">Careers</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              We welcome lawyers, graduates and support staff who share our approach. Our offices are in {offices.map((o) => o.city).join(" and ")}.
            </p>
          </Reveal>
          <Reveal from="right">
            <Button asChild variant="brass" size="lg"><Link to="/careers">See careers <ArrowRight /></Link></Button>
          </Reveal>
        </div>
      </Section>

      <CtaStrip />
    </>
  );
}