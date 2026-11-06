import { Link } from "react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, legalLinks, nav, offices, FIRM } from "@/data/site";
import logoWhite from "@/assets/logo.png";
import { Newsletter } from "./Newsletter";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-primary-foreground">
      <div className="pattern-lines absolute inset-0 opacity-30" />
      <div className="container-law relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr] md:py-20">
        <div>
          <img src={logoWhite} alt={FIRM} className="h-10 w-auto" width={1920} height={313} loading="lazy" />
          <p className="mt-6 max-w-xs text-sm text-primary-foreground/60">
            One firm for every legal need, in Nigeria and wherever Nigerians do business.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: contact.phoneHref, icon: Phone, label: "Call us" },
              { href: contact.whatsapp, icon: MessageCircle, label: "WhatsApp" },
              { href: `mailto:${contact.email}`, icon: Mail, label: "Email us" },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/15 text-primary-foreground/70 transition-all duration-300 hover:-translate-y-1 hover:border-brass hover:bg-brass hover:text-brass-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="eyebrow mb-5">The firm</h3>
          <ul className="space-y-3 text-sm">
            {[...nav, { to: "/careers", label: "Careers" } as const, { to: "/contact", label: "Contact" } as const].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-draw text-primary-foreground/70 hover:text-primary-foreground">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Offices</h3>
          <ul className="space-y-5 text-sm">
            {offices.map((o) => (
              <li key={o.city}>
                <p className="font-display text-lg">{o.city}</p>
                <a href={o.map} target="_blank" rel="noreferrer" className="mt-1 flex items-center gap-1.5 text-primary-foreground/60 hover:text-brass">
                  <MapPin className="h-3.5 w-3.5" /> Get directions
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Our newsletter</h3>
          <p className="mb-4 text-sm text-primary-foreground/60">A short update on the law in Nigeria, twice a month.</p>
          <Newsletter />
        </div>
      </div>

      <div className="relative border-t border-primary-foreground/10">
        <div className="container-law flex flex-col gap-4 py-6 text-xs text-primary-foreground/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {FIRM}. The content of this website is general information, not legal advice.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-brass">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}