import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { InsightCard } from "@/components/site/Cards";
import { CtaStrip } from "@/components/site/CtaStrip";
import { Seo } from "@/components/site/Seo";
import { insights } from "@/data/site";
import { cn } from "@/lib/utils";

const categories = ["All", "Legal explainers", "Regulatory updates", "Firm news"] as const;

export default function InsightsIndex() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const list = insights.filter((i) => cat === "All" || i.category === cat);
  return (
    <>
      <Seo
        title="Insights"
        description="Short explainers and updates on the law in Nigeria, from the lawyers at Akpobire Preh & Ocholi Attorneys."
        canonical="https://apo-law.com/insights"
      />

      <PageHero eyebrow="Insights" title="Insights" intro="Short explainers and updates on the law in Nigeria. They are written to inform, not to advise on your own matter." />
      <Section>
        <Reveal className="mb-12 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm transition-all duration-300",
                cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-brass hover:text-brass-deep",
              )}
            >
              {c}
            </button>
          ))}
        </Reveal>
        {list.length === 0 ? (
          <p className="py-16 text-center text-muted-foreground">No articles in this category yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 120} className="h-full">
                <InsightCard post={p} />
              </Reveal>
            ))}
          </div>
        )}
      </Section>
      <CtaStrip />
    </>
  );
}