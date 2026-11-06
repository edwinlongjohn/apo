import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Mail, MapPin, Phone, Search } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Avatar, PersonCard } from "@/components/site/Cards";
import { CtaStrip } from "@/components/site/CtaStrip";
import { Seo } from "@/components/site/Seo";
import { contact, getPractice, people, practiceAreas } from "@/data/site";

const selectCls = "h-12 rounded-sm border border-input bg-card px-3 text-sm text-foreground outline-none transition-colors focus:border-brass";

export default function OurPeople() {
  const [q, setQ] = useState("");
  const [area, setArea] = useState("");
  const [loc, setLoc] = useState("");
  const [role, setRole] = useState("");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  useEffect(() => {
    const h = window.location.hash.slice(1);
    if (people.some((p) => p.slug === h)) setOpenSlug(h);
  }, []);

  const open = (slug: string | null) => {
    setOpenSlug(slug);
    history.replaceState(null, "", slug ? `#${slug}` : window.location.pathname);
  };

  const list = useMemo(
    () =>
      people
        .filter((p) => (!q || p.name.toLowerCase().includes(q.toLowerCase())) && (!area || p.practices.includes(area)) && (!loc || p.location === loc) && (!role || p.role === role))
        .sort((a, b) => (a.role === b.role ? 0 : a.role === "Partner" ? -1 : 1)),
    [q, area, loc, role],
  );
  const person = people.find((p) => p.slug === openSlug);

  return (
    <>
      <Seo
        title="Our people"
        description="Meet the partners and lawyers of Akpobire Preh & Ocholi Attorneys. Find the right lawyer for your matter."
        canonical="https://apo-law.com/our-people"
      />

      <PageHero eyebrow="Our people" title="Our people" intro="Meet the lawyers who will act for you. Each profile shows their role, their areas of work and how to reach them." />
      <Section>
        <Reveal className="mb-12 grid gap-3 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <label className="relative">
            <span className="sr-only">Search by name</span>
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name" className={`${selectCls} w-full pl-10`} />
          </label>
          <select aria-label="Practice area" value={area} onChange={(e) => setArea(e.target.value)} className={selectCls}>
            <option value="">All practice areas</option>
            {practiceAreas.map((p) => <option key={p.slug} value={p.slug}>{p.title}</option>)}
          </select>
          <select aria-label="Location" value={loc} onChange={(e) => setLoc(e.target.value)} className={selectCls}>
            <option value="">All locations</option>
            {[...new Set(people.map((p) => p.location))].map((l) => <option key={l}>{l}</option>)}
          </select>
          <select aria-label="Role" value={role} onChange={(e) => setRole(e.target.value)} className={selectCls}>
            <option value="">All roles</option>
            <option>Partner</option>
            <option>Associate</option>
          </select>
        </Reveal>
        {list.length === 0 ? (
          <p className="py-16 text-center text-muted-foreground">No lawyers match those filters.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 100} className="h-full">
                <PersonCard person={p} onOpen={() => open(p.slug)} />
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      <Section tone="muted" id="join-us">
        <div className="grid items-center gap-8 md:grid-cols-[1.5fr_auto]">
          <Reveal>
            <h2 className="text-primary">Join us</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              We are glad to hear from lawyers and graduates who share our approach. We also welcome enquiries from Nigerian lawyers abroad who would like to work with us.
            </p>
          </Reveal>
          <Reveal from="right">
            <Button asChild variant="navy" size="lg"><Link to="/careers">See careers <ArrowRight /></Link></Button>
          </Reveal>
        </div>
      </Section>

      <CtaStrip />

      <Sheet open={!!person} onOpenChange={(o) => !o && open(null)}>
        <SheetContent className="w-full overflow-y-auto border-l-brass/40 bg-background p-0 sm:max-w-lg">
          {person && (
            <>
              <Avatar name={person.name} className="aspect-[16/10] text-7xl" />
              <div className="p-8">
                <SheetHeader className="p-0 text-left">
                  <p className="eyebrow">{person.role}</p>
                  <SheetTitle className="font-display text-3xl font-normal text-primary">{person.name}</SheetTitle>
                  <SheetDescription className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {person.location}</SheetDescription>
                </SheetHeader>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="navy"><a href={`mailto:${contact.email}`}><Mail /> Contact</a></Button>
                  <Button asChild variant="outlineNavy"><a href={contact.phoneHref}><Phone /> Call</a></Button>
                </div>
                <h3 className="mt-8 text-lg text-primary">Practice areas</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {person.practices.map((s) => (
                    <a key={s} href={`/services#${s}`} className="rounded-full border border-border px-3 py-1.5 text-sm text-primary transition-colors hover:border-brass hover:text-brass-deep">{getPractice(s)?.title}</a>
                  ))}
                </div>
                <h3 className="mt-8 text-lg text-primary">Biography</h3>
                <p className="mt-2 text-muted-foreground">{person.bio}</p>
                <h3 className="mt-8 text-lg text-primary">Admission and education</h3>
                <p className="mt-2 text-muted-foreground">{person.admission}</p>
                <h3 className="mt-8 text-lg text-primary">Languages</h3>
                <p className="mt-2 text-muted-foreground">{person.languages}</p>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}