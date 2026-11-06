import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router";
import { AlertTriangle, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Faq } from "@/components/site/Faq";
import { Newsletter } from "@/components/site/Newsletter";
import { Seo } from "@/components/site/Seo";
import { contact, enquiryTopics, faqs, offices } from "@/data/site";
import { cn } from "@/lib/utils";

const countries = ["Nigeria", "United Kingdom", "United States", "Canada", "Ghana", "South Africa", "United Arab Emirates", "Germany", "Other"];
const sources = ["Search engine", "Recommendation", "Social media", "Event", "Other"];
const field = "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition-all focus:border-brass focus:shadow-brass";

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preset = searchParams.get("topic") ?? undefined;
  const initialTopic = preset === "individual" ? "Individual or family matter" : enquiryTopics.find((t) => t === preset) ?? "";

  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "", topic: initialTopic, message: "", source: "", consent: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof form) => (e: { target: { value: string; checked?: boolean; type?: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const er: Record<string, string> = {};
    if (!form.name.trim()) er["name"] = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er["email"] = "Please enter a valid email address.";
    if (!form.country) er["country"] = "Please choose the country you live in.";
    if (!form.topic) er["topic"] = "Please choose a topic.";
    if (!form.message.trim()) er["message"] = "Please tell us briefly what you need.";
    if (!form.consent) er["consent"] = "Please confirm that you have read the Privacy notice.";
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

  const Err = ({ k }: { k: string }) => (errors[k] ? <p className="mt-1.5 text-xs text-destructive">{errors[k]}</p> : null);

  return (
    <>
      <Seo
        title="Contact us"
        description="Contact Akpobire Preh & Ocholi Attorneys. Find our address, phone and email, or send an enquiry."
        canonical="https://apo-law.com/contact"
      >
        <script type="application/ld+json">{faqJsonLd}</script>
      </Seo>

      <PageHero eyebrow="Contact" title="Contact us" intro="Tell us what you need. We will reply within 48 hours and tell you who can help." />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal from="left">
            {sent ? (
              <div className="animate-rise card-law p-10 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-brass" strokeWidth={1.3} />
                <h2 className="mt-6 text-primary">Enquiry received</h2>
                <p className="mt-4 text-muted-foreground">
                  Thank you. We have received your enquiry and sent a confirmation to {form.email}. We will reply within one working day.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="card-law space-y-5 p-6 md:p-10">
                <h2 className="text-primary">Send an enquiry</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div><label className="mb-1.5 block text-sm font-medium">Full name *</label><input className={field} value={form.name} onChange={set("name")} /><Err k="name" /></div>
                  <div><label className="mb-1.5 block text-sm font-medium">Email *</label><input type="email" className={field} value={form.email} onChange={set("email")} /><Err k="email" /></div>
                  <div><label className="mb-1.5 block text-sm font-medium">Phone, with country code</label><input className={field} value={form.phone} onChange={set("phone")} placeholder="+234" /></div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Country you live in *</label>
                    <select className={field} value={form.country} onChange={set("country")}><option value="">Choose a country</option>{countries.map((c) => <option key={c}>{c}</option>)}</select><Err k="country" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">What is your enquiry about? *</label>
                  <select className={field} value={form.topic} onChange={set("topic")}><option value="">Choose a topic</option>{enquiryTopics.map((t) => <option key={t}>{t}</option>)}</select><Err k="topic" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Your message *</label>
                  <textarea rows={6} maxLength={2000} className={field} value={form.message} onChange={set("message")} />
                  <div className="flex justify-between"><Err k="message" /><span className="ml-auto mt-1 text-xs text-muted-foreground">{form.message.length}/2000</span></div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">How did you hear about us?</label>
                  <select className={field} value={form.source} onChange={set("source")}><option value="">Choose one</option>{sources.map((s) => <option key={s}>{s}</option>)}</select>
                </div>
                <div className="flex gap-3 border-l-2 border-brass bg-secondary p-5 text-sm text-foreground">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-brass-deep" />
                  <p>Sending an enquiry does not create a lawyer and client relationship. Please do not send confidential or time-sensitive information until we have confirmed that we can act for you. We will use your details only to respond to your enquiry. See our <a href="/privacy-notice" className="underline">Privacy notice</a>.</p>
                </div>
                <label className="flex cursor-pointer items-start gap-3 text-sm">
                  <input type="checkbox" checked={form.consent} onChange={set("consent")} className="mt-1 accent-brass" />
                  I have read the Privacy notice and agree that the firm may contact me about my enquiry.
                </label>
                <Err k="consent" />
                <Button type="submit" variant="navy" size="lg" className="w-full sm:w-auto">Send enquiry <Send /></Button>
              </form>
            )}
          </Reveal>

          <div className="space-y-6">
            {offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 120} from="right">
                <div className="card-law p-7">
                  <p className="eyebrow">Office</p>
                  <h3 className="mt-2 text-2xl text-primary">{o.city}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-brass" /> {o.address}</li>
                    <li className="flex gap-3"><Clock className="h-4 w-4 shrink-0 text-brass" /> {o.hours}</li>
                  </ul>
                  <a href={o.map} target="_blank" rel="noreferrer" className="link-draw mt-5 inline-block text-sm font-medium text-brass-deep">Get directions</a>
                </div>
              </Reveal>
            ))}
            <Reveal from="right" delay={240}>
              <div className="bg-primary p-7 text-primary-foreground">
                <h3 className="text-primary-foreground">Reach us directly</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  {[
                    { I: Phone, l: contact.phone, h: contact.phoneHref },
                    { I: MessageCircle, l: "WhatsApp", h: contact.whatsapp },
                    { I: Mail, l: contact.email, h: `mailto:${contact.email}` },
                  ].map(({ I, l, h }) => (
                    <li key={l}>
                      <a href={h} className="group flex items-center gap-3 text-primary-foreground/80 hover:text-brass">
                        <span className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 transition-colors group-hover:border-brass"><I className="h-4 w-4" /></span> {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Questions people ask us" align="center" />
          <Faq />
        </div>
      </Section>

      <Section>
        <div className={cn("mx-auto max-w-xl text-center")}>
          <Reveal>
            <h2 className="text-primary">Our newsletter</h2>
            <p className="mb-6 mt-3 text-muted-foreground">A short update on the law in Nigeria, twice a month.</p>
            <div className="text-left"><Newsletter dark={false} /></div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}