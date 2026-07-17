import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { ArrowUpRight, Plus, Phone } from "lucide-react";

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

const PROJECTS = [
  {
    n: "01",
    title: "Full interior repaint",
    location: "Celina, TX",
    year: "2025",
    tag: "Interior",
    scope: "3,400 sqft · 12 rooms · Level-5 finish",
    image: INTERIOR_IMG,
  },
  {
    n: "02",
    title: "Exterior refresh & trim",
    location: "Sherman, TX",
    year: "2024",
    tag: "Exterior",
    scope: "Siding · Fascia · Front door restore",
    image: EXTERIOR_IMG,
  },
  {
    n: "03",
    title: "Drywall repair & retexture",
    location: "Whitesboro, TX",
    year: "2024",
    tag: "Drywall",
    scope: "Water damage rebuild · Knockdown match",
    image: DRYWALL_IMG,
  },
];

const CAPABILITIES = [
  { k: "01", t: "Interior painting", d: "Walls, ceilings, trim, cabinetry, custom finishes." },
  { k: "02", t: "Exterior painting", d: "Siding, brick, stucco, doors — built for Texas sun." },
  { k: "03", t: "Drywall & repair", d: "Patchwork, texture matching, new installs, level-5." },
  { k: "04", t: "Prep & protection", d: "Meticulous masking, sanding, priming — every time." },
];

const AREAS = [
  "Whitesboro", "Sherman", "Gainesville", "Celina",
  "Collinsville", "Gunter", "Van Alstyne", "Denison",
];

function Home() {
  return (
    <div className="min-h-screen bg-ink text-paper font-body antialiased selection:bg-paper selection:text-ink">
      <Toaster position="top-center" richColors theme="dark" />
      <Nav />
      <Hero />
      <Marquee />
      <Index />
      <Featured />
      <Capabilities />
      <Numbers />
      <Estimate />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-ink font-heading text-[13px] font-bold">T</span>
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.22em] text-paper/60 sm:inline">
            Torres — Paint & Drywall
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {["Work", "Services", "Studio", "Contact"].map((l, i) => (
            <a key={l} href={["#work","#services","#numbers","#estimate"][i]}
               className="group flex items-center gap-1.5 text-[13px] text-paper/70 transition-colors hover:text-paper">
              <span className="text-[10px] text-paper/30">0{i+1}</span>
              {l}
            </a>
          ))}
        </nav>
        <a href="#estimate"
           className="group inline-flex h-9 items-center gap-2 rounded-full border border-paper/20 pl-4 pr-1 text-[12px] font-medium text-paper transition-colors hover:border-paper/60">
          Start a project
          <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-ink transition-transform group-hover:rotate-45">
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-10">
      {/* grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-paper/40">
          <span>[ Est. 2012 · North Texas ]</span>
          <span className="hidden md:inline">Portfolio · Vol. XIV</span>
        </div>

        <h1 className="mt-6 font-heading text-[clamp(2.5rem,8vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.04em]">
          <span className="block">A painting</span>
          <span className="block">
            <span className="italic font-light text-paper/60">studio</span> for
            homes worth keeping.
          </span>
        </h1>

        <div className="mt-8 grid grid-cols-1 items-end gap-6 border-t border-paper/10 pt-6 md:grid-cols-12">
          <p className="md:col-span-5 text-[15px] leading-relaxed text-paper/70">
            We treat drywall, trim, and topcoats as craft. Every job runs like a small
            construction studio — quiet crews, tight timelines, finishes that hold up
            a decade later.
          </p>
          <div className="md:col-span-4 text-[11px] uppercase tracking-[0.25em] text-paper/40">
            <div>Services</div>
            <div className="mt-2 text-paper/90 font-medium tracking-normal text-sm normal-case">
              Interior · Exterior · Drywall · Prep
            </div>
          </div>
          <div className="md:col-span-3 flex md:justify-end">
            <a href="#work"
               className="group inline-flex items-center gap-3 text-[13px] font-medium">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-ink transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
              </span>
              See recent work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const words = ["Interior Painting", "Drywall Repair", "Exterior Coatings", "Cabinet Refinish", "Level-5 Finish", "New Construction"];
  const row = [...words, ...words, ...words];
  return (
    <section className="border-y border-paper/10 py-6 overflow-hidden">
      <div className="marquee flex gap-12 whitespace-nowrap font-heading text-2xl md:text-3xl">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-12 text-paper/80">
            {w}
            <span className="text-accent">✳</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- INDEX (project list) ---------------- */
function Index() {
  return (
    <section id="work" className="border-b border-paper/10 py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-paper/40">Index · 2024 — 2025</div>
            <h2 className="mt-4 font-heading text-5xl font-semibold tracking-tight md:text-6xl">
              Selected work.
            </h2>
          </div>
          <div className="hidden text-right text-[11px] uppercase tracking-[0.25em] text-paper/40 md:block">
            {PROJECTS.length} projects
          </div>
        </div>

        <ul className="divide-y divide-paper/10 border-y border-paper/10">
          {PROJECTS.map((p) => (
            <li key={p.n}>
              <a href="#estimate" className="group grid grid-cols-12 items-center gap-4 py-6 transition-colors hover:bg-paper/5 px-2 -mx-2">
                <span className="col-span-1 font-heading text-sm text-paper/40">{p.n}</span>
                <div className="col-span-6 md:col-span-5">
                  <div className="font-heading text-xl md:text-2xl font-medium tracking-tight">{p.title}</div>
                  <div className="mt-1 text-xs text-paper/50">{p.scope}</div>
                </div>
                <div className="hidden md:block col-span-2 text-[11px] uppercase tracking-[0.2em] text-paper/50">{p.tag}</div>
                <div className="col-span-3 md:col-span-2 text-[11px] uppercase tracking-[0.2em] text-paper/50">{p.location}</div>
                <div className="col-span-2 md:col-span-1 flex justify-end">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-paper/20 transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- FEATURED (asymmetric gallery) ---------------- */
function Featured() {
  return (
    <section className="border-b border-paper/10 py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <figure className="col-span-12 md:col-span-8 relative overflow-hidden rounded-md">
            <img src={INTERIOR_IMG} alt="Interior repaint" className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
            <figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-paper">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-paper/70">Featured · Interior</div>
                <div className="font-heading text-2xl md:text-3xl font-medium">Bright modern farmhouse repaint</div>
              </div>
              <span className="hidden md:inline text-xs text-paper/70">Celina, TX / 2025</span>
            </figcaption>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </figure>
          <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-4 md:gap-6">
            <figure className="relative overflow-hidden rounded-md">
              <img src={EXTERIOR_IMG} alt="" className="aspect-[4/3] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <figcaption className="absolute bottom-3 left-4 right-4 text-xs uppercase tracking-[0.2em] text-paper/90">
                Exterior · Sherman
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-md">
              <img src={DRYWALL_IMG} alt="" className="aspect-[4/3] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <figcaption className="absolute bottom-3 left-4 right-4 text-xs uppercase tracking-[0.2em] text-paper/90">
                Drywall · Whitesboro
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CAPABILITIES ---------------- */
function Capabilities() {
  return (
    <section id="services" className="border-b border-paper/10 py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4 md:sticky md:top-28 self-start">
            <div className="text-[11px] uppercase tracking-[0.25em] text-paper/40">§ Capabilities</div>
            <h2 className="mt-4 font-heading text-4xl md:text-5xl font-semibold tracking-tight">
              What we do,<br/>done properly.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul>
              {CAPABILITIES.map((c) => (
                <li key={c.k} className="group grid grid-cols-12 gap-4 border-t border-paper/10 py-8 first:border-t-0">
                  <span className="col-span-2 font-heading text-sm text-paper/40">{c.k}</span>
                  <div className="col-span-8">
                    <div className="font-heading text-2xl md:text-3xl font-medium tracking-tight">{c.t}</div>
                    <p className="mt-3 max-w-md text-sm text-paper/60">{c.d}</p>
                  </div>
                  <span className="col-span-2 justify-self-end">
                    <Plus className="h-5 w-5 text-paper/40 transition-transform group-hover:rotate-90 group-hover:text-accent" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- NUMBERS ---------------- */
function Numbers() {
  const stats = [
    { n: "14", u: "yrs", l: "in business" },
    { n: "500+", u: "", l: "projects delivered" },
    { n: "8", u: "cities", l: "across North Texas" },
    { n: "100%", u: "", l: "satisfaction guarantee" },
  ];
  return (
    <section id="numbers" className="border-b border-paper/10 py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-12 text-[11px] uppercase tracking-[0.25em] text-paper/40">The studio · in numbers</div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="border-t border-paper/15 pt-6">
              <div className="font-heading text-6xl md:text-7xl font-semibold tracking-tight leading-none">
                {s.n}
                {s.u && <span className="ml-1 text-xl text-paper/50">{s.u}</span>}
              </div>
              <div className="mt-4 text-sm text-paper/60">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ESTIMATE ---------------- */
function Estimate() {
  return (
    <section id="estimate" className="border-b border-paper/10 py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.25em] text-paper/40">§ Start a project</div>
            <h2 className="mt-4 font-heading text-5xl md:text-6xl font-semibold tracking-tight leading-[0.9]">
              Tell us<br/>
              <span className="italic font-light text-paper/60">what you're</span><br/>
              painting.
            </h2>
            <p className="mt-8 max-w-md text-sm text-paper/60 leading-relaxed">
              A free walkthrough, a plain-language quote, and a response within
              one business day. No pressure — just craft.
            </p>
            <div className="mt-10 space-y-3 text-sm">
              <a href="tel:" className="flex items-center gap-3 text-paper/80 hover:text-paper">
                <Phone className="h-4 w-4 text-accent" />
                Call the studio
              </a>
              <div className="text-paper/50 text-xs uppercase tracking-[0.2em]">Whitesboro · North TX</div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <EstimateForm />
          </div>
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

  const field =
    "peer h-12 w-full border-0 border-b border-paper/20 bg-transparent px-0 text-paper placeholder-transparent focus:border-accent focus:outline-none focus:ring-0";
  const lbl =
    "pointer-events-none absolute left-0 top-3 text-sm text-paper/50 transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.22em] peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.22em] peer-[:not(:placeholder-shown)]:text-paper/60";

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="relative">
        <input name="name" type="text" required maxLength={120} placeholder=" " className={field} />
        <label className={lbl}>Name*</label>
      </div>
      <div className="relative">
        <input name="phone" type="tel" required maxLength={40} placeholder=" " className={field} />
        <label className={lbl}>Phone*</label>
      </div>
      <div className="relative md:col-span-2">
        <input name="email" type="email" required maxLength={254} placeholder=" " className={field} />
        <label className={lbl}>Email*</label>
      </div>
      <div className="relative">
        <select name="service" required defaultValue="" className={`${field} appearance-none`}>
          <option value="" disabled className="bg-ink">Choose service</option>
          <option className="bg-ink" value="Interior Painting">Interior Painting</option>
          <option className="bg-ink" value="Exterior Painting">Exterior Painting</option>
          <option className="bg-ink" value="Drywall & Repair">Drywall & Repair</option>
          <option className="bg-ink" value="Multiple / Not sure">Multiple / Not sure</option>
        </select>
        <label className="pointer-events-none absolute -top-2 left-0 text-[10px] uppercase tracking-[0.22em] text-paper/60">Service*</label>
      </div>
      <div className="relative">
        <input name="city" type="text" maxLength={120} placeholder=" " className={field} />
        <label className={lbl}>City</label>
      </div>
      <div className="relative md:col-span-2">
        <textarea name="message" rows={3} maxLength={2000} placeholder=" "
          className={`${field} h-auto resize-none py-3 leading-relaxed`} />
        <label className={lbl}>Project details</label>
      </div>
      <div className="md:col-span-2 flex items-center justify-between border-t border-paper/10 pt-6">
        <span className="text-[11px] uppercase tracking-[0.22em] text-paper/40">
          We reply within 24h
        </span>
        <button type="submit" disabled={pending}
          className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent pl-6 pr-1 font-medium text-ink transition-transform hover:scale-[1.02] disabled:opacity-60">
          {pending ? "Sending…" : "Send request"}
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-accent transition-transform group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </button>
      </div>
    </form>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative overflow-hidden pt-24 pb-10">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-12 gap-8 border-b border-paper/10 pb-16">
          <div className="col-span-12 md:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.25em] text-paper/40">Serving</div>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-heading text-xl md:text-2xl">
              {AREAS.map((a, i) => (
                <span key={a} className="flex items-center gap-6">
                  {a}
                  {i < AREAS.length - 1 && <span className="text-accent">·</span>}
                </span>
              ))}
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-paper/40">Studio</div>
            <ul className="mt-4 space-y-2 text-sm text-paper/80">
              <li>Whitesboro, TX</li>
              <li>Mon–Sat · 7a–7p</li>
              <li>Fully insured</li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-paper/40">Menu</div>
            <ul className="mt-4 space-y-2 text-sm text-paper/80">
              <li><a href="#work" className="hover:text-accent">Work</a></li>
              <li><a href="#services" className="hover:text-accent">Services</a></li>
              <li><a href="#estimate" className="hover:text-accent">Estimate</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-8">
            <div className="font-heading text-[18vw] md:text-[10rem] leading-[0.85] tracking-[-0.05em] text-paper/90">
              Torres.
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 text-[11px] uppercase tracking-[0.25em] text-paper/40 md:text-right">
            © {new Date().getFullYear()} · Paint & Drywall Studio<br/>Made in North Texas
          </div>
        </div>
      </div>
    </footer>
  );
}
