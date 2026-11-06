import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  id,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "muted" | "navy";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28",
        tone === "muted" && "bg-secondary",
        tone === "navy" && "bg-navy-gradient text-primary-foreground",
        className,
      )}
    >
      <div className="container-law">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light,
  action,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
  action?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-6 md:mb-16",
        align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
      )}
    >
      <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-brass" />
            {eyebrow}
          </p>
        )}
        <h2 className={cn(light ? "text-primary-foreground" : "text-primary")}>{title}</h2>
        {text && (
          <p className={cn("mt-4 text-base", light ? "text-primary-foreground/75" : "text-muted-foreground")}>
            {text}
          </p>
        )}
      </Reveal>
      {action && <Reveal delay={150}>{action}</Reveal>}
    </div>
  );
}
