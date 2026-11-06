import { Link } from "react-router";
import { ArrowRight, Briefcase, Globe2, Home, MessageSquareText, Route as RouteIcon, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { AreaTile, InsightCard, OfficeCard } from "@/components/site/Cards";
import { CtaStrip } from "@/components/site/CtaStrip";
import { Seo } from "@/components/site/Seo";
import { contact, featuredPracticeSlugs, getPractice, howWeWork, insights, offices, practiceAreas, sectors } from "@/data/site";
import heroImg from "@/assets/hero-columns.jpg";
import libraryImg from "@/assets/law-library.jpg";

const audiences = [
  { icon: Home, title: "Individuals and families", text: "Advice on the matters that affect your home, your family and your affairs. Plain language and a named lawyer.", link: "Individual matters", to: "/contact", search: "?topic=individual" },
  { icon: Briefcase, title: "Businesses", text: "Support for companies of every size, across sectors, from setting up to disputes.", link: "Business matters", to: "/services#sectors", search: undefined },
  { icon: Globe2, title: "Nigerians abroad", text: "A firm at home that works across time zones and with our partners overseas.", link: "Our global network", to: "/about#global-network", search: undefined },
];
const workIcons = [UserCheck, MessageSquareText, RouteIcon];

export default function Index() {
  const featured = featuredPracticeSlugs.map(getPractice).filter(Boolean) as typeof practiceAreas;
  return (
    <>
      <Seo
        title="Law firm in Nigeria"
        description="A law firm for individuals and businesses in Nigeria and abroad. Advice across every area of law. Speak to a lawyer."
        canonical="https://apo-law.com/"
      />

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-deep text-primary-foreground">
        <img src={heroImg} alt="" width={1600} height={1008} className="animate-ken-burns absolute inset-0 h-full w-full object-cover object-right opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
        <div className="container-law relative grid gap-10 pb-24 pt-36">
          <div className="max-w-3xl">
            <p className="eyebrow animate-rise mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-brass" /> Akpobire Preh & Ocholi Attorneys
            </p>
            <h1 className="display-xl animate-rise text-primary-foreground" style={{ ["--delay" as string]: "150ms" }}>
              Legal advice for individuals and businesses, <em className="text-brass-gradient not-italic md:italic">in Nigeria and abroad.</em>
            </h1>
            <p className="animate-rise mt-8 max-w-xl text-lg text-primary-foreground/75" style={{ ["--delay" as string]: "300ms" }}>
              Akpobire Preh & Ocholi Attorneys acts in every area of law. Tell us what you need and we will tell you who can help.
            </p>
            <div className="animate-rise mt-10 flex flex-wrap gap-4" style={{ ["--delay" as string]: "450ms" }}>
              <Button asChild variant="brass" size="lg">
                <Link to="/contact">Speak to a lawyer <ArrowRight /></Link>
              </Button>
              <Button asChild variant="ghostLight" size="lg">
                <Link to="/services#practice-areas">Our practice areas <ArrowRight /></Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50 md:flex">
          Scroll
          <span className="animate-line-grow block h-12 w-px bg-brass" style={{ ["--delay" as string]: "900ms" }} />
        </div>
      </section>

      {/* Marquee of practice areas */}
      <div className="overflow-hidden border-y border-brass/20 bg-primary py-5 text-primary-foreground/70">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-display text-lg italic">
          {[...practiceAreas, ...practiceAreas].map((p, i) => (
            <span key={i} className="flex items-center gap-12">
              {p.title} <span className="h-1.5 w-1.5 rotate-45 bg-brass" />
            </span>
          ))}
        </div>
      </div>

      {/* Who we act for */}
      <Section>
        <SectionHeading eyebrow="Who we act for" title="One firm, wherever your matter sits." />
        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 120} className="h-full">
              <div className="card-law group flex h-full flex-col p-8">
                <span className="grid h-16 w-16 place-items-center bg-primary text-brass transition-all duration-500 group-hover:bg-brass group-hover:text-primary">
                  <a.icon className="h-7 w-7" strokeWidth={1.4} />
                </span>
                <h3 className="mt-8 text-primary">{a.title}</h3>
                <p className="mt-3 flex-1 text-muted-foreground">{a.text}</p>
                <Link to={`${a.to}${a.search ?? ""}`} className="link-draw mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brass-deep">
                  {a.link} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Practice areas */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="What we do"
          title="Practice areas"
          text="One firm for every legal need."
          action={
            <Button asChild variant="outlineNavy" size="lg">
              <Link to="/services#practice-areas">See all practice areas <ArrowRight /></Link>
            </Button>
          }
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100} className="h-full">
              <AreaTile slug={p.slug} title={p.title} overview={p.overview} href={`/services#${p.slug}`} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How we work */}
      <section className="relative overflow-hidden bg-navy-gradient py-20 text-primary-foreground md:py-28">
        <div className="pattern-lines absolute inset-0 opacity-40" />
        <div className="container-law relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal from="left" className="relative">
            <div className="relative overflow-hidden">
              <img src={libraryImg} alt="Law books, a fountain pen and brass scales of justice on a desk" width={1200} height={1408} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-[1.5s] hover:scale-105" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 border border-brass md:block" />
            <div className="absolute -left-4 -top-4 hidden h-24 w-24 border-l-2 border-t-2 border-brass md:block" />
          </Reveal>
          <div>
            <SectionHeading eyebrow="How we work" title="Careful work, explained plainly." light />
            <ol className="space-y-4">
              {howWeWork.map((w, i) => {
                const Icon = workIcons[i]!;
                return (
                  <Reveal key={w.title} delay={i * 140} from="right">
                    <li className="group flex gap-6 border border-primary-foreground/10 p-6 transition-all duration-500 hover:border-brass/60 hover:bg-primary-foreground/5">
                      <span className="font-display text-4xl text-brass/60 transition-colors group-hover:text-brass">0{i + 1}</span>
                      <div>
                        <h3 className="flex items-center gap-3 text-primary-foreground"><Icon className="h-5 w-5 text-brass" strokeWidth={1.5} /> {w.title}</h3>
                        <p className="mt-2 text-primary-foreground/70">{w.text}</p>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Insights */}
      <Section>
        <SectionHeading
          eyebrow="Latest insights"
          title="Insights"
          text="Short explainers and updates on the law in Nigeria."
          action={
            <Button asChild variant="outlineNavy" size="lg">
              <Link to="/insights">All insights <ArrowRight /></Link>
            </Button>
          }
        />
        <div className="grid gap-6 md:grid-cols-3">
          {insights.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 120} className="h-full">
              <InsightCard post={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Offices + careers */}
      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="Our offices" title="Where to find us" text={`We act across ${sectors.length} sectors from our offices in Nigeria.`} />
            <div className="grid gap-5 sm:grid-cols-2">
              {offices.map((o, i) => (
                <Reveal key={o.city} delay={i * 120}>
                  <OfficeCard {...o} phone={contact.phone} phoneHref={contact.phoneHref} />
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal from="right" className="relative self-stretch overflow-hidden bg-primary p-10 text-primary-foreground">
            <div className="pattern-lines absolute inset-0 opacity-50" />
            <div className="relative flex h-full flex-col">
              <p className="eyebrow">Join us</p>
              <h2 className="mt-4 text-primary-foreground">Careers</h2>
              <p className="mt-4 flex-1 text-primary-foreground/75">We are building a firm where lawyers can do careful work and grow.</p>
              <Button asChild variant="brass" size="lg" className="mt-8 w-fit">
                <Link to="/careers">See careers <ArrowRight /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaStrip />
    </>
  );
}