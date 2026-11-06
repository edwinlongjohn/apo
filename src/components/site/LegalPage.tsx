import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

export type LegalBlock = { heading: string; text: string | string[] };

/** Shared layout for the footer legal pages. */
export function LegalPage({ title, intro, blocks }: { title: string; intro?: string; blocks: LegalBlock[] }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={intro} />
      <section className="container-law max-w-3xl py-16 md:py-24">
        {blocks.map((b, i) => (
          <Reveal key={b.heading} delay={Math.min(i, 4) * 50} className="border-b border-border py-8 first:pt-0">
            <h2 className="text-2xl text-primary md:text-[1.75rem]">{b.heading}</h2>
            {Array.isArray(b.text) ? (
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {b.text.map((t) => <li key={t} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-brass" />{t}</li>)}
              </ul>
            ) : (
              <p className="mt-4 text-muted-foreground">{b.text}</p>
            )}
          </Reveal>
        ))}
        <p className="mt-10 text-xs text-muted-foreground">Draft for review by a lawyer at the firm before publication.</p>
      </section>
    </>
  );
}
