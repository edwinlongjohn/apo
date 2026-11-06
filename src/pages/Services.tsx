import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle2, ClipboardList, Mail, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { AreaTile } from "@/components/site/Cards";
import { AreaIcon } from "@/components/site/icons";
import { CtaStrip } from "@/components/site/CtaStrip";
import { Seo } from "@/components/site/Seo";
import { practiceAreas, practiceSlugByTitle, sectors, contact } from "@/data/site";
import { cn } from "@/lib/utils";

type Item = { slug: string; title: string; overview: string; kind: "practice" | "sector" };

export default function Services() {
  const [tab, setTab] = useState<"practice-areas" | "sectors">("practice-areas");
  const [open, setOpen] = useState<string | null>(null);

  // Open the item named in the URL hash, e.g. /services#aviation
  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.slice(1);
      if (!h) return;
      if (h === "sectors" || h === "practice-areas") return setTab(h);
      if (sectors.some((s) => s.slug === h)) setTab("sectors");
      else if (practiceAreas.some((p) => p.slug === h)) setTab("practice-areas");
      else return;
      setOpen(h);
      setTimeout(() => document.getElementById(h)?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const toggle = (slug: string) => {
    const next = open === slug ? null : slug;
    setOpen(next);
    history.replaceState(null, "", next ? `#${next}` : window.location.pathname);
    if (next) setTimeout(() => document.getElementById(next)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  const pItems: Item[] = practiceAreas.map((p) => ({ ...p, kind: "practice" }));
  const sItems: Item[] = sectors.map((s) => ({ ...s, kind: "sector" }));

  return (
    <>
      <Seo
        title="Services"
        description="Legal advice in every area of law, from business and property to family and disputes, across every major sector in Nigeria."
        canonical="https://apo-law.com/services"
      />

      <PageHero
        eyebrow="Services"
        title="Services"
        intro="We act in every area of law and for every major sector. Choose your area, or your sector, to see how we can help."
      />
      <section className="py-16 md:py-24">
        <div className="container-law">
          <Tabs value={tab} onValueChange={(v) => { setTab(v as typeof tab); setOpen(null); }}>
            <TabsList className="mb-12 h-auto w-full justify-start gap-0 rounded-none border-b border-border bg-transparent p-0">
              {[
                { v: "practice-areas", l: `Practice areas`, n: practiceAreas.length },
                { v: "sectors", l: "Sectors", n: sectors.length },
              ].map((t) => (
                <TabsTrigger
                  key={t.v}
                  value={t.v}
                  id={t.v}
                  className="relative rounded-none border-0 bg-transparent px-2 pb-4 pt-2 font-display text-xl text-muted-foreground shadow-none after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:origin-left after:scale-x-0 after:bg-brass after:transition-transform data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:after:scale-x-100 sm:px-6 md:text-2xl"
                >
                  {t.l} <span className="ml-2 font-sans text-xs text-brass">{t.n}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="practice-areas">
              <Grid items={pItems} open={open} toggle={toggle} />
            </TabsContent>
            <TabsContent value="sectors">
              <Grid items={sItems} open={open} toggle={toggle} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <CtaStrip />
    </>
  );
}

function Grid({ items, open, toggle }: { items: Item[]; open: string | null; toggle: (s: string) => void }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <div key={it.slug} id={it.slug} className={cn(open === it.slug && "sm:col-span-2 lg:col-span-3")}>
          {open === it.slug ? (
            <Detail item={it} onClose={() => toggle(it.slug)} />
          ) : (
            <Reveal delay={(i % 3) * 80} className="h-full">
              <AreaTile slug={it.slug} title={it.title} overview={it.overview} onClick={() => toggle(it.slug)} />
            </Reveal>
          )}
        </div>
      ))}
    </div>
  );
}

function Detail({ item, onClose }: { item: Item; onClose: () => void }) {
  const practice = item.kind === "practice" ? practiceAreas.find((p) => p.slug === item.slug)! : null;
  const sector = item.kind === "sector" ? sectors.find((s) => s.slug === item.slug)! : null;
  const relatedSectors = practice ? sectors.filter((s) => s.practices.includes(practice.title)).slice(0, 6) : [];
  const relatedPractices = sector ? sector.practices.map((t) => ({ t, slug: practiceSlugByTitle(t) })).filter((x) => x.slug) : [];

  return (
    <article className="animate-rise relative overflow-hidden border border-brass/40 bg-card shadow-elegant">
      <div className="relative bg-navy-gradient p-8 text-primary-foreground md:p-12">
        <div className="pattern-lines absolute inset-0 opacity-50" />
        <AreaIcon slug={item.slug} className="absolute -right-6 -top-6 h-48 w-48 text-brass/15" />
        <button type="button" onClick={onClose} aria-label="Close" className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 transition-all hover:rotate-90 hover:border-brass hover:text-brass">
          <X className="h-4 w-4" />
        </button>
        <div className="relative max-w-3xl">
          <p className="eyebrow mb-3">{item.kind === "practice" ? "Practice area" : "Sector"}</p>
          <h2 className="text-primary-foreground">{item.title}</h2>
          <p className="mt-4 text-primary-foreground/80">{item.overview}</p>
        </div>
      </div>
      <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h3 className="mb-5 text-primary">{practice ? "What we do" : "What clients ask us about"}</h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {practice
              ? practice.whatWeDo.map((w) => (
                  <li key={w.name} className="group border-l-2 border-brass/30 pl-4 transition-colors hover:border-brass">
                    <p className="font-semibold text-primary">{w.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
                  </li>
                ))
              : sector!.asks.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brass" /> <span className="first-letter:uppercase">{a}</span>
                  </li>
                ))}
          </ul>
          {practice && (
            <div className="mt-10">
              <h3 className="mb-3 text-primary">Who we act for</h3>
              <p className="text-muted-foreground">We act for individuals, families and businesses in Nigeria and abroad.</p>
              <p className="mt-2 text-muted-foreground">{practice.whoFor}</p>
            </div>
          )}
          {(relatedSectors.length > 0 || relatedPractices.length > 0) && (
            <div className="mt-10">
              <h3 className="mb-4 text-primary">{practice ? "Related sectors" : "Related practice areas"}</h3>
              <div className="flex flex-wrap gap-2">
                {(practice ? relatedSectors.map((s) => ({ t: s.title, slug: s.slug })) : relatedPractices).map((r) => (
                  <a key={r.slug} href={`#${r.slug}`} className="rounded-full border border-border px-4 py-2 text-sm text-primary transition-all hover:-translate-y-0.5 hover:border-brass hover:bg-brass hover:text-brass-foreground">
                    {r.t}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        <aside className="space-y-6">
          {practice && practice.helpful.length > 0 && (
            <div className="bg-secondary p-6">
              <h4 className="mb-4 flex items-center gap-2 font-display text-lg text-primary"><ClipboardList className="h-5 w-5 text-brass" /> Helpful to bring</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {practice.helpful.map((h) => (
                  <li key={h} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rotate-45 bg-brass" /> <span className="first-letter:uppercase">{h}</span></li>
                ))}
              </ul>
            </div>
          )}
          <div className="border border-border p-6">
            <p className="eyebrow">Contact lawyer</p>
            <p className="mt-3 font-display text-lg text-primary">Lead lawyer to be confirmed</p>
            <a href={`mailto:${contact.email}`} className="mt-2 flex items-center gap-2 text-sm text-muted-foreground hover:text-brass"><Mail className="h-4 w-4" /> {contact.email}</a>
            <Button asChild variant="navy" size="lg" className="mt-5 w-full">
              <Link to={`/contact?topic=${encodeURIComponent(item.title)}`}>Make an enquiry <ArrowRight /></Link>
            </Button>
          </div>
        </aside>
      </div>
    </article>
  );
}