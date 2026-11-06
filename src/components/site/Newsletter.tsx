import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Newsletter({ dark = true }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Please enter a valid email address.");
    if (!consent) return setError("Please tick the box to agree to receive the newsletter.");
    setError("");
    setDone(true);
  };

  if (done)
    return (
      <p className={cn("flex items-start gap-3", dark ? "text-primary-foreground/85" : "text-foreground")}>
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
        Thank you. Please check your email and confirm your subscription.
      </p>
    );

  return (
    <form onSubmit={submit} noValidate className="space-y-3">
      <div className={cn("flex overflow-hidden rounded-sm border transition-colors focus-within:border-brass", dark ? "border-primary-foreground/20" : "border-input bg-card")}>
        <label htmlFor="nl-email" className="sr-only">Email address</label>
        <input
          id="nl-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className={cn("min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none", dark ? "text-primary-foreground placeholder:text-primary-foreground/40" : "placeholder:text-muted-foreground")}
        />
        <Button type="submit" variant="brass" className="h-auto rounded-none px-5">
          Subscribe <ArrowRight />
        </Button>
      </div>
      <label className={cn("flex cursor-pointer items-start gap-2 text-xs", dark ? "text-primary-foreground/60" : "text-muted-foreground")}>
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 accent-brass" />
        I agree to receive the newsletter. I can unsubscribe at any time.
      </label>
      {error && <p className="text-xs text-destructive" role="alert">{error}</p>}
    </form>
  );
}
