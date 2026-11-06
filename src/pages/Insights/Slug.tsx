import { Link, useParams, Navigate } from "react-router";
import { ArrowLeft, Facebook, Linkedin, Link2, MessageCircle, Twitter } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { InsightCard } from "@/components/site/Cards";
import { Newsletter } from "@/components/site/Newsletter";
import { Seo } from "@/components/site/Seo";
import { getPractice, insights } from "@/data/site";

export default function InsightsSlug() {
  const { slug } = useParams<{ slug: string }>();
  const post = insights.find((p) => p.slug === slug);

  // Replaces TanStack's `throw notFound()`
  if (!post) return <Navigate to="/insights" replace />;

  const practice = getPractice(post.practice);
  const related = insights.filter((p) => p.slug !== post.slug).slice(0, 2);
  const share = (net: string) => {
    const url = encodeURIComponent(typeof window !== "undefined" ? window.location.href : "");
    const t = encodeURIComponent(post.title);
    const map: Record<string, string> = {
      li: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      x: `https://twitter.com/intent/tweet?url=${url}&text=${t}`,
      fb: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      wa: `https://wa.me/?text=${t}%20${url}`,
    };
    if (net === "copy") navigator.clipboard?.writeText(window.location.href);
    else window.open(map[net], "_blank", "noopener");
  };

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        canonical={`https://apo-law.com/insights/${post.slug}`}
      />

      <PageHero eyebrow={post.category} title={post.title}>
        <p className="text-sm text-primary-foreground/70">{post.date} · By the lawyers at APO · {post.readingTime}</p>
      </PageHero>
      <article className="container-law grid gap-14 py-16 md:py-24 lg:grid-cols-[1fr_18rem]">
        <div className="max-w-2xl">
          <Link to="/insights" className="link-draw mb-10 inline-flex items-center gap-2 text-sm text-brass-deep"><ArrowLeft className="h-4 w-4" /> All insights</Link>
          {post.body.map((b, i) => (
            <Reveal key={b.heading} delay={i * 60}>
              <h2 className="mt-10 text-primary">{b.heading}</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">{b.text}</p>
            </Reveal>
          ))}
          <p className="mt-12 border-l-2 border-brass bg-secondary p-5 text-sm text-muted-foreground">
            This article is general information. It is not legal advice. For advice on your matter, <Link to="/contact" className="text-brass-deep underline">contact us</Link>.
          </p>
        </div>
        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          {practice && (
            <div>
              <p className="eyebrow mb-3">Practice area</p>
              <a href={`/services#${practice.slug}`} className="font-display text-lg text-primary hover:text-brass-deep">{practice.title}</a>
            </div>
          )}
          <div>
            <p className="eyebrow mb-3">Share</p>
            <div className="flex gap-2">
              {[{ k: "li", I: Linkedin }, { k: "x", I: Twitter }, { k: "fb", I: Facebook }, { k: "wa", I: MessageCircle }, { k: "copy", I: Link2 }].map(({ k, I }) => (
                <button key={k} type="button" onClick={() => share(k)} aria-label={`Share ${k}`} className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary transition-all hover:-translate-y-1 hover:border-brass hover:bg-brass hover:text-brass-foreground">
                  <I className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>
          <div className="bg-primary p-6 text-primary-foreground">
            <p className="font-display text-xl">Our newsletter</p>
            <p className="mb-4 mt-2 text-sm text-primary-foreground/70">A short update on the law in Nigeria, twice a month.</p>
            <Newsletter />
          </div>
        </aside>
      </article>
      <section className="bg-secondary py-16 md:py-20">
        <div className="container-law">
          <h2 className="mb-10 text-primary">Related articles</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((p) => <InsightCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}