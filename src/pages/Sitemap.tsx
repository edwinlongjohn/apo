import { Link } from "react-router";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { legalLinks, nav } from "@/data/site";

export default function Sitemap() {
  return (
    <>
      <Seo
        title="Site map"
        description="Every page on the Akpobire Preh & Ocholi Attorneys website."
        canonical="https://apo-law.com/sitemap"
      />

      <PageHero eyebrow="Legal" title="Site map" />
      <section className="container-law grid gap-10 py-16 sm:grid-cols-2">
        {[{ h: "Pages", l: [{ to: "/", label: "Home" }, ...nav, { to: "/careers", label: "Careers" }, { to: "/contact", label: "Contact" }] }, { h: "Legal", l: legalLinks }].map((g) => (
          <div key={g.h}>
            <h2 className="mb-4 text-primary">{g.h}</h2>
            <ul className="space-y-3">{g.l.map((x) => <li key={x.to}><Link to={x.to} className="link-draw text-muted-foreground hover:text-primary">{x.label}</Link></li>)}</ul>
          </div>
        ))}
      </section>
    </>
  );
}