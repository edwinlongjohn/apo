import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav } from "@/data/site";
import { cn } from "@/lib/utils";
import logoWhite from "@/assets/apo-logo-white-horizontal.png";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex flex-col transition-colors duration-500",
        open
          ? "h-dvh bg-navy-deep py-3"
          : scrolled
            ? "bg-navy-deep/95 py-3 shadow-elegant backdrop-blur-md"
            : "bg-transparent py-6",
      )}
    >
      <div className="container-law grid shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:justify-between">
        <Link to="/" aria-label="Akpobire Preh & Ocholi Attorneys, home" className="min-w-0 shrink" onClick={() => setOpen(false)}>
          <img
            src={logoWhite}
            alt="APO | Akpobire Preh & Ocholi Attorneys"
            className={cn("max-w-full object-contain object-left transition-all duration-500", scrolled || open ? "h-8 w-auto md:h-9" : "h-9 w-auto md:h-11")}
            width={1920}
            height={313}
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "link-draw text-sm font-medium tracking-wide text-primary-foreground/80 transition-colors hover:text-primary-foreground",
                  isActive && "text-brass",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild variant="brass" size="lg" className="h-11">
            <Link to="/contact">
              Contact us <ArrowRight />
            </Link>
          </Button>
        </nav>

        <Button
          type="button"
          variant="ghostLight"
          size="icon"
          className="h-11 w-11 shrink-0 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {open && <div
        id="mobile-navigation"
        className="mt-3 min-h-0 flex-1 overflow-y-auto overscroll-contain bg-navy-deep pb-[max(1.5rem,env(safe-area-inset-bottom))] lg:hidden"
      >
        <nav className="container-law flex flex-col gap-2 pt-4" aria-label="Mobile">
          {[...nav, { to: "/contact", label: "Contact us" } as const].map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "border-b border-primary-foreground/10 py-5 font-display text-3xl text-primary-foreground transition-all duration-500",
                  isActive && "text-brass",
                  open ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0",
                )
              }
              style={{ transitionDelay: open ? `${100 + i * 70}ms` : "0ms" }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>}
    </header>
  );
}