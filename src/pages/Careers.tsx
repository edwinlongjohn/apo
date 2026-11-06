import { useState, type FormEvent } from "react";
import { BookOpen, CheckCircle2, Globe2, GraduationCap, Scale, Upload, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Seo } from "@/components/site/Seo";

const lookFor = ["Care for clients and for the detail of their matters.", "Clear thinking and clear writing.", "Sound judgement and honesty.", "Willingness to learn from colleagues, and to teach."];
const audiences = [
  { I: Scale, t: "Lawyers", d: "Associates and experienced lawyers in any practice area." },
  { I: GraduationCap, t: "Graduates and trainees", d: "Recent law graduates and those completing their professional training." },
  { I: Users, t: "Support teams", d: "Finance, office management, marketing and technology." },
  { I: Globe2, t: "Nigerian lawyers abroad", d: "Lawyers who would like to work with us or form a partnership." },
];
const field = "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition-all focus:border-brass";

export default function Careers() {
  const [sent, setSent] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [err, setErr] = useState("");
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (!fd.get("name") || !/^\S+@\S+\.\S+$/.test(String(fd.get("email"))) || !fd.get("city") || !fd.get("area") || !fd.get("note")) return setErr("Please complete all required fields.");
    if (!file) return setErr("Please attach your CV.");
    if (file.size > 5 * 1024 * 1024) return setErr("Your CV must be 5 MB or smaller.");
    if (!fd.get("consent")) return setErr("Please confirm that you have read the Privacy notice.");
    setErr("");
    setSent(true);
  };
  return (
    <>
      <Seo
        title="Careers"
        description="Careers at Akpobire Preh & Ocholi Attorneys. Find out what we look for and how to apply, or write to us about partnership."
        canonical="https://apo-law.com/careers"
      />

      <PageHero eyebrow="Careers" title="Careers" intro="We are building a firm where lawyers can do careful work and grow. If you share our approach, we would like to hear from you." />
      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="What we look for" title="Qualities we value." />
            <ul className="space-y-4">
              {lookFor.map((l, i) => (
                <Reveal key={l} delay={i * 90} from="left"><li className="flex gap-4 text-lg text-primary"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brass" /> {l}</li></Reveal>
              ))}
            </ul>
          </div>
          <Reveal from="right" className="bg-navy-gradient relative overflow-hidden p-10 text-primary-foreground">
            <div className="pattern-lines absolute inset-0 opacity-50" />
            <div className="relative">
              <BookOpen className="h-10 w-10 text-brass" strokeWidth={1.3} />
              <h2 className="mt-6 text-primary-foreground">Working here</h2>
              <p className="mt-4 text-primary-foreground/75">Every lawyer works closely with a partner and takes on more responsibility as experience grows. We expect careful preparation, plain communication and respect for clients and colleagues. We welcome applications from everyone, whatever their background.</p>
            </div>
          </Reveal>
        </div>
      </Section>
      <Section tone="muted">
        <SectionHeading eyebrow="Who we hear from" title="There is room for you here." align="center" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ I, t, d }, i) => (
            <Reveal key={t} delay={i * 100} className="h-full">
              <div className="card-law group h-full p-7">
                <I className="h-8 w-8 text-brass transition-transform duration-500 group-hover:scale-110" strokeWidth={1.3} />
                <h3 className="mt-5 text-primary">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading eyebrow="Open roles" title="Open roles" />
            <Reveal><p className="border border-dashed border-border p-6 text-muted-foreground">We have no open roles at the moment. You are welcome to write to us.</p></Reveal>
            <Reveal delay={100}><h3 className="mt-10 text-primary">How to apply</h3><p className="mt-3 text-muted-foreground">Send your CV and a short note about yourself using the form. We read every application and reply to each one.</p></Reveal>
          </div>
          <Reveal from="right">
            {sent ? (
              <div className="card-law p-10 text-center"><CheckCircle2 className="mx-auto h-12 w-12 text-brass" /><h2 className="mt-5 text-primary">Application received</h2><p className="mt-3 text-muted-foreground">Thank you. We read every application and will reply to you.</p></div>
            ) : (
              <form onSubmit={submit} noValidate className="card-law space-y-5 p-6 md:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  <input name="name" placeholder="Full name *" className={field} />
                  <input name="email" type="email" placeholder="Email *" className={field} />
                  <input name="phone" placeholder="Phone" className={field} />
                  <input name="city" placeholder="City and country *" className={field} />
                </div>
                <select name="area" className={field} defaultValue=""><option value="">Area you are interested in *</option><option>Lawyer</option><option>Graduate or trainee</option><option>Support team</option><option>Partnership</option></select>
                <label className="flex cursor-pointer items-center gap-3 border border-dashed border-input p-5 text-sm text-muted-foreground transition-colors hover:border-brass">
                  <Upload className="h-5 w-5 text-brass" /> {file ? file.name : "Upload your CV (PDF or Word, up to 5 MB) *"}
                  <input type="file" accept=".pdf,.doc,.docx" className="sr-only" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
                </label>
                <textarea name="note" rows={5} maxLength={1500} placeholder="Short note *" className={field} />
                <label className="flex items-start gap-3 text-sm"><input name="consent" type="checkbox" className="mt-1 accent-brass" /> I have read the Privacy notice and agree that the firm may use my details to assess my application.</label>
                {err && <p className="text-sm text-destructive">{err}</p>}
                <Button type="submit" variant="navy" size="lg">Send application</Button>
              </form>
            )}
          </Reveal>
        </div>
      </Section>
    </>
  );
}