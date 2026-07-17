import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import {
  ShieldCheck,
  CalendarClock,
  Award,
  Phone,
  Mail,
  MapPin,
  Check,
  Star,
  ArrowRight,
} from "lucide-react";

import { submitEstimate } from "@/lib/estimate.functions";

export const Route = createFileRoute("/")({
  component: Home,
});

const HERO_IMG =
  "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/2ffca6df-bb18-4131-d259-acb8889c8400/publicContain";
const INTERIOR_IMG =
  "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/849b02af-bb4a-41ca-eda5-31943f948300/public";
const EXTERIOR_IMG =
  "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/b0a43bde-ea5d-4df8-21a9-4efa52fb4e00/publicContain";
const DRYWALL_IMG =
  "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/79eb35dd-64e3-47cf-a1f3-11791840a700/public";

const SERVICES = [
  {
    title: "Interior Painting",
    description:
      "Walls, ceilings, trim, and custom finishes with meticulous prep and low-VOC premium paints.",
    image: INTERIOR_IMG,
  },
  {
    title: "Exterior Painting",
    description:
      "Weather-resistant coatings built for the North Texas sun — siding, brick, stucco, trim, and doors.",
    image: EXTERIOR_IMG,
  },
  {
    title: "Drywall & Repair",
    description:
      "Seamless patchwork, texture matching, and new installation from framing to level-5 smooth finish.",
    image: DRYWALL_IMG,
  },
];

const AREAS = [
  "Whitesboro",
  "Sherman",
  "Gainesville",
  "Celina",
  "Collinsville",
  "Gunter",
  "Van Alstyne",
  "Denison",
];

const STEPS = [
  { n: "01", title: "Free Estimate", body: "On-site walkthrough and a clear written quote — no surprises." },
  { n: "02", title: "Prep & Protect", body: "Floors masked, furniture covered, surfaces sanded and primed." },
  { n: "03", title: "Precision Paint", body: "Careful application with premium materials and steady hands." },
  { n: "04", title: "Final Walkthrough", body: "We inspect every corner with you before we call it done." },
];

function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-ink selection:text-paper">
      <Toaster position="top-center" richColors />
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Testimonial />
      <EstimateSection />
      <ServiceAreas />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-ink/5 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-heading text-lg font-bold uppercase tracking-tight text-ink">
            Torres
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.25em] text-ink/40 sm:inline">
            Paint & Drywall
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#services" className="text-sm font-medium text-ink/70 transition-colors hover:text-ink">
            Services
          </a>
          <a href="#process" className="text-sm font-medium text-ink/70 transition-colors hover:text-ink">
            Process
          </a>
          <a href="#areas" className="text-sm font-medium text-ink/70 transition-colors hover:text-ink">
            Service Areas
          </a>
          <a href="#estimate" className="text-sm font-medium text-ink/70 transition-colors hover:text-ink">
            Contact
          </a>
        </div>
        <a
          href="#estimate"
          className="inline-flex h-9 items-center rounded-full bg-ink px-5 text-sm font-medium text-paper transition-transform hover:bg-ink-muted active:scale-95"
        >
          Free Estimate
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-16 pb-24 lg:grid-cols-12 lg:pt-24">
        <div className="lg:col-span-7">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex items-center gap-0.5 text-ink">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-ink" strokeWidth={0} />
              ))}
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
              Family Owned Since 2012
            </span>
          </div>
          <h1 className="font-heading text-5xl font-semibold leading-[1.02] tracking-tight text-ink text-balance md:text-6xl lg:text-7xl">
            Premium painting & drywall for North Texas homes.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-ink-muted/80 text-pretty">
            Interior painting, exterior painting, and flawless drywall repair in Whitesboro,
            Sherman, Gainesville, Celina and beyond. Quality lifetime paints and a satisfaction
            guarantee on every job.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#estimate"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 font-medium text-paper transition-colors hover:bg-ink-muted"
            >
              Get a Free Estimate
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 bg-transparent px-7 font-medium text-ink transition-colors hover:bg-parchment"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="overflow-hidden rounded-2xl bg-parchment ring-1 ring-ink/5">
            <img
              src={HERO_IMG}
              alt="Professional painter working on a home renovation"
              className="h-full w-full object-cover aspect-[4/5]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Fully Insured" },
    { icon: CalendarClock, label: "14+ Years Experience" },
    { icon: Award, label: "Quality Guaranteed" },
    { icon: Star, label: "5-Star Rated" },
  ];
  return (
    <section className="border-y border-ink/5 bg-parchment/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="h-5 w-5 text-ink" strokeWidth={1.5} />
            <span className="text-sm font-medium text-ink">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
              What we do
            </span>
            <h2 className="mt-3 font-heading text-4xl font-semibold text-ink text-balance md:text-5xl">
              Craftsmanship in every stroke.
            </h2>
          </div>
          <p className="max-w-md text-ink-muted/80">
            From single-room refreshes to full-home exteriors, we treat every surface like it's
            our own.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-2xl bg-parchment/50 ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:ring-ink/15"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <h3 className="font-heading text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted/80">{s.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="border-y border-ink/5 bg-parchment/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
            How it works
          </span>
          <h2 className="mt-3 font-heading text-4xl font-semibold text-ink text-balance md:text-5xl">
            A clean, respectful process from start to finish.
          </h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t border-ink/15 pt-6">
              <span className="font-heading text-sm font-medium text-ink/40">{s.n}</span>
              <h4 className="mt-3 font-heading text-lg font-semibold text-ink">{s.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 flex justify-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-ink" strokeWidth={0} />
          ))}
        </div>
        <blockquote className="font-heading text-2xl font-medium leading-snug text-ink text-balance md:text-3xl">
          &ldquo;Torres and his crew did an incredible job on our interior repaint and drywall
          repairs. Clean, on time, and the finish looks perfect a year later.&rdquo;
        </blockquote>
        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-ink/50">
          — Homeowner, Celina TX
        </p>
      </div>
    </section>
  );
}

function EstimateSection() {
  return (
    <section
      id="estimate"
      className="relative overflow-hidden bg-ink py-24 text-paper"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-paper/50">
            Free Estimate
          </span>
          <h2 className="mt-3 font-heading text-4xl font-semibold text-balance md:text-5xl">
            Tell us about your project.
          </h2>
          <p className="mt-6 max-w-md text-paper/70">
            Fill out the form and we'll get back to you within one business day with a clear,
            no-pressure quote. Prefer to talk? Give us a call.
          </p>
          <ul className="mt-10 space-y-4">
            {[
              "Response within 24 hours",
              "Free on-site walkthrough",
              "Transparent written quote",
              "No obligation, no pressure",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm text-paper/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-paper" strokeWidth={2} />
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <EstimateForm />
        </div>
      </div>
    </section>
  );
}

function EstimateForm() {
  const submit = useServerFn(submitEstimate);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      service: String(fd.get("service") ?? "").trim(),
      city: String(fd.get("city") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    if (!data.name || !data.email || !data.phone || !data.service) {
      toast.error("Please fill out name, email, phone, and service.");
      return;
    }

    setPending(true);
    try {
      await submit({ data });
      toast.success("Thanks! We'll be in touch within one business day.");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please call us directly.");
    } finally {
      setPending(false);
    }
  }

  const inputClass =
    "h-12 w-full rounded-lg border border-paper/15 bg-paper/5 px-4 text-paper placeholder:text-paper/40 outline-none transition-colors focus:border-paper/40 focus:bg-paper/10";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-paper/5 p-6 ring-1 ring-paper/10 md:p-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-paper/60">
            Name*
          </span>
          <input name="name" type="text" required maxLength={120} className={inputClass} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-paper/60">
            Phone*
          </span>
          <input name="phone" type="tel" required maxLength={40} className={inputClass} placeholder="(555) 555-5555" />
        </label>
        <label className="block md:col-span-2">
          <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-paper/60">
            Email*
          </span>
          <input name="email" type="email" required maxLength={254} className={inputClass} placeholder="you@example.com" />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-paper/60">
            Service*
          </span>
          <select name="service" required defaultValue="" className={`${inputClass} appearance-none`}>
            <option value="" disabled>
              Choose a service
            </option>
            <option value="Interior Painting">Interior Painting</option>
            <option value="Exterior Painting">Exterior Painting</option>
            <option value="Drywall & Repair">Drywall & Repair</option>
            <option value="Multiple / Not sure">Multiple / Not sure</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-paper/60">
            City
          </span>
          <input name="city" type="text" maxLength={120} className={inputClass} placeholder="Whitesboro, Sherman…" />
        </label>
        <label className="block md:col-span-2">
          <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-paper/60">
            Project details
          </span>
          <textarea
            name="message"
            rows={4}
            maxLength={2000}
            className={`${inputClass} h-auto py-3 leading-relaxed`}
            placeholder="Rooms, square footage, timeline, questions…"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-paper px-8 font-medium text-ink transition-colors hover:bg-parchment disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Send my request"}
        {!pending && <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}

function ServiceAreas() {
  return (
    <section id="areas" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
            Where we work
          </span>
          <h2 className="mt-3 font-heading text-4xl font-semibold text-ink text-balance md:text-5xl">
            Proudly serving North Texas.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {AREAS.map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-parchment/50 px-5 py-2.5 text-sm font-medium text-ink"
            >
              <MapPin className="h-3.5 w-3.5 text-ink/50" strokeWidth={1.5} />
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-parchment/40 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-3">
        <div>
          <span className="font-heading text-lg font-bold uppercase tracking-tight text-ink">
            Torres Paint & Drywall
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted/70">
            Family-owned painting and drywall contractor serving North Texas since 2012.
          </p>
        </div>
        <div>
          <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink">
            Services
          </h5>
          <ul className="space-y-2 text-sm text-ink-muted/80">
            <li>Interior Painting</li>
            <li>Exterior Painting</li>
            <li>Drywall & Repair</li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink">
            Contact
          </h5>
          <ul className="space-y-2 text-sm text-ink-muted/80">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              Whitesboro, TX
            </li>
            <li>
              <a href="#estimate" className="underline underline-offset-4 hover:text-ink">
                Request a free estimate
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-ink/10 px-6 pt-8">
        <p className="text-xs uppercase tracking-[0.2em] text-ink/40">
          © {new Date().getFullYear()} Torres Paint & Drywall. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
