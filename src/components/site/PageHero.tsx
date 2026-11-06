import type { ReactNode } from "react";
import { Scale } from "lucide-react";

/** Navy hero used at the top of inner pages. */
export function PageHero({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro?: string | undefined; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient pb-20 pt-36 text-primary-foreground md:pb-28 md:pt-44">
      <div className="pattern-lines absolute inset-0 opacity-60" />
      <Scale
        aria-hidden
        strokeWidth={0.6}
        className="animate-float-slow absolute -right-10 top-16 hidden h-80 w-80 text-brass/15 md:block"
      />
      <div className="container-law relative">
        {eyebrow && (
          <p className="eyebrow animate-rise mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-brass" />
            {eyebrow}
          </p>
        )}
        <h1 className="animate-rise max-w-3xl text-primary-foreground" style={{ ["--delay" as string]: "120ms" }}>
          {title}
        </h1>
        {intro && (
          <p className="animate-rise mt-6 max-w-2xl text-lg text-primary-foreground/75" style={{ ["--delay" as string]: "240ms" }}>
            {intro}
          </p>
        )}
        {children && <div className="animate-rise mt-8" style={{ ["--delay" as string]: "360ms" }}>{children}</div>}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brass to-transparent" />
    </section>
  );
}
