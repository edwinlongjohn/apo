import { Link } from "react-router";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import type { Insight, Person } from "@/data/site";
import { getPractice, initials } from "@/data/site";
import { AreaIcon } from "./icons";
import { cn } from "@/lib/utils";

const firstSentence = (s: string) => s.split(/(?<=\.)\s/)[0];

export function AreaTile({ slug, title, overview, onClick, href }: { slug: string; title: string; overview: string; onClick?: () => void; href?: string }) {
  const inner = (
    <>
      <div className="mb-6 flex items-start justify-between">
        <span className="grid h-14 w-14 place-items-center rounded-full border border-brass/40 text-brass transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-primary group-hover:text-brass-light">
          <AreaIcon slug={slug} className="h-6 w-6" />
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brass" />
      </div>
      <h3 className="text-xl text-primary md:text-[1.35rem]">{title}</h3>
      <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{firstSentence(overview)}</p>
    </>
  );
  const cls = "card-law group block h-full w-full p-7 text-left";
  if (href) return <a href={href} className={cls}>{inner}</a>;
  return <button type="button" onClick={onClick} className={cls}>{inner}</button>;
}

export function InsightCard({ post }: { post: Insight }) {
  const practice = getPractice(post.practice);
  return (
    <Link to={`/insights/${post.slug}`} className="card-law group flex h-full flex-col overflow-hidden">
      <div className="relative h-44 overflow-hidden bg-navy-gradient">
        <div className="pattern-lines absolute inset-0 opacity-60 transition-transform duration-[1.2s] group-hover:scale-110" />
        <AreaIcon slug={post.practice} className="absolute bottom-5 right-5 h-16 w-16 text-brass/50 transition-all duration-700 group-hover:rotate-6 group-hover:scale-125 group-hover:text-brass" />
        <span className="absolute left-5 top-5 rounded-full bg-brass px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brass-foreground">{post.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          {post.date} <span className="h-1 w-1 rounded-full bg-brass" /> <Clock className="h-3 w-3" /> {post.readingTime}
        </p>
        <h3 className="mt-3 text-xl text-primary transition-colors group-hover:text-brass-deep">{post.title}</h3>
        <p className="mt-3 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
        {practice && <p className="mt-5 text-xs font-medium uppercase tracking-wider text-brass">{practice.title}</p>}
      </div>
    </Link>
  );
}

export function Avatar({ name, className }: { name: string; className?: string }) {
  return (
    <div className={cn("relative grid place-items-center overflow-hidden bg-navy-gradient font-display text-brass-light", className)}>
      <div className="pattern-lines absolute inset-0 opacity-50" />
      <span className="relative">{initials(name)}</span>
    </div>
  );
}

export function PersonCard({ person, onOpen }: { person: Person; onOpen: () => void }) {
  return (
    <button type="button" onClick={onOpen} className="card-law group flex h-full w-full flex-col overflow-hidden text-left">
      <div className="relative overflow-hidden">
        <Avatar name={person.name} className="aspect-[4/3] text-6xl transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute bottom-0 left-0 h-1 w-0 bg-brass transition-all duration-700 group-hover:w-full" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{person.role}</p>
        <h3 className="mt-2 text-xl text-primary">{person.name}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5" /> {person.location}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {person.practices.slice(0, 2).map((p) => (
            <span key={p} className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">{getPractice(p)?.title}</span>
          ))}
        </div>
      </div>
    </button>
  );
}

export function OfficeCard({ city, address, hours, map, phone, phoneHref }: { city: string; address: string; hours: string; map: string; phone: string; phoneHref: string }) {
  return (
    <div className="card-law group p-7">
      <MapPin className="h-6 w-6 text-brass transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.4} />
      <h3 className="mt-4 text-2xl text-primary">{city}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{address}</p>
      <p className="mt-1 text-sm text-muted-foreground">{hours}</p>
      <a href={phoneHref} className="mt-3 flex items-center gap-2 text-sm text-primary hover:text-brass"><Phone className="h-3.5 w-3.5" /> {phone}</a>
      <a href={map} target="_blank" rel="noreferrer" className="link-draw mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brass-deep">
        Get directions <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}