import {
  Bot,
  Cog,
  BrainCircuit,
  Cpu,
  Wifi,
  Wrench,
  Sparkles,
  GraduationCap,
  Award,
  BadgeCheck,
  BookOpen,
  Hammer,
  Mail,
  Linkedin,
  Github,
  Phone,
  MapPin,
  Instagram,
  ArrowUpRight,
  Ruler,
  Code2,
  Zap,
  BarChart3,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { ContactForm } from "./ContactForm";

/* ---------------- About ---------------- */

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading index="01" eyebrow="About" title="Where ideas become hardware" />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="panel rounded-xl p-7">
          <p className="font-display text-xl leading-relaxed text-foreground">
            &ldquo;I&rsquo;ve always been drawn to the part of engineering where an idea stops being
            just an idea and starts becoming something you can actually build.&rdquo;
          </p>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Mechatronics appeals to me because it refuses to stay in one lane. A single problem can
              be approached through mechanical design, electronics, programming, or control systems
              &mdash; and the interesting work usually happens where those disciplines meet and have
              to function together as one system.
            </p>
            <p>
              I&rsquo;m especially interested in how robotics and AI can be used to build technology
              that is not only innovative, but genuinely useful &mdash; systems that solve a real
              problem for the people using them.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="panel rounded-xl p-7">
          <span className="mono-label text-gold">What I enjoy</span>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {[
              "Designing parts in SOLIDWORKS",
              "Programming microcontrollers",
              "Building embedded systems",
              "Working with electronics",
              "Troubleshooting technical problems",
              "Learning new engineering technologies",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-signal" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Engineering focus ---------------- */

const focusAreas = [
  {
    icon: Bot,
    title: "Robotics",
    body: "Robotic systems, automation, sensors, actuators, and intelligent machines.",
  },
  {
    icon: Cog,
    title: "Automation",
    body: "Designing systems that perform tasks efficiently with limited human intervention.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    body: "Applying AI to practical engineering problems and intelligent systems.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    body: "Microcontrollers, electronics, sensors, actuators, and hardware/software integration.",
  },
  {
    icon: Wifi,
    title: "IoT",
    body: "Connected devices and systems that communicate and exchange data.",
  },
  {
    icon: Wrench,
    title: "Mechatronics",
    body: "Mechanical engineering, electronics, programming, and control combined into machines.",
  },
  {
    icon: Sparkles,
    title: "Smart Technology",
    body: "Using engineering and intelligent technology on useful real-world problems.",
  },
];

export function Focus() {
  return (
    <section id="interests" className="relative overflow-hidden border-y border-border bg-surface/30">
      <div className="dot-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Engineering Focus"
          title="The areas I'm building toward"
          description="Interests I'm actively developing through coursework, self-study, and hands-on experimentation."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <article className="lift group h-full rounded-xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={420}>
            <article className="h-full rounded-xl border border-signal/40 bg-signal/5 p-6">
              <span className="mono-label text-signal">Applications</span>
              <p className="mt-4 text-sm text-muted-foreground">
                Areas I find especially interesting:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Safety", "Healthcare", "Smart Technology", "Intelligent Automation"].map((a) => (
                  <span
                    key={a}
                    className="rounded border border-border bg-background/60 px-2.5 py-1 text-xs text-foreground"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Skills ---------------- */

const skillGroups = [
  {
    icon: Wrench,
    title: "Engineering & Mechatronics",
    items: [
      "Mechatronics Engineering",
      "Robotics",
      "Automation",
      "Embedded Systems",
      "Control Systems",
      "Systems Integration",
      "Engineering Design",
      "Instrumentation",
      "Sensors & Actuators",
      "Prototyping",
    ],
  },
  {
    icon: Ruler,
    title: "CAD & Mechanical Design",
    items: ["SOLIDWORKS", "Computer-Aided Design (CAD)", "3D Modeling", "Engineering Design"],
    badge: "Certified SOLIDWORKS Associate (CSWA)",
  },
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "C++", "Java", "MATLAB", "Object-Oriented Programming (OOP)"],
    badge: "Certified MATLAB Associate",
  },
  {
    icon: Zap,
    title: "Electronics",
    items: [
      "Electrical Wiring",
      "Electronics",
      "Circuit Analysis",
      "NI Multisim",
      "Microcontrollers",
      "Arduino",
      "Arduino IDE",
      "Sensors & Actuators",
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Computing",
    items: [
      "Data Analysis",
      "Data Visualization",
      "Microsoft Excel",
      "Git",
      "GitHub",
      "Simulation",
      "Computing",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Productivity",
    items: ["Artificial Intelligence", "AI for Business", "Microsoft Copilot", "AI Productivity"],
  },
  {
    icon: Users,
    title: "Professional Skills",
    items: [
      "Communication",
      "Leadership",
      "Teamwork",
      "Problem Solving",
      "Technical Documentation",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        index="03"
        eyebrow="Skills"
        title="Technical toolkit"
        description="Grouped by discipline. Certifications are marked separately from skills I'm still developing through coursework and practice."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 50} className="h-full">
            <div className="lift h-full rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <g.icon className="h-5 w-5 text-gold" />
                <h3 className="font-display text-base font-semibold">{g.title}</h3>
              </div>
              {g.badge ? (
                <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  {g.badge}
                </div>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-gold/40 hover:text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Education ---------------- */

const timeline = [
  { label: "Current", note: "Third-year student" },
  { label: "Year 3", note: "Core mechatronics coursework" },
  { label: "Co-op", note: "Seeking placement" },
  { label: "Graduation", note: "Expected 2028–2029" },
];

export function Education() {
  return (
    <section id="education" className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading index="04" eyebrow="Education" title="Academic foundation" />

        <Reveal className="mt-10">
          <div className="panel rounded-xl p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Ontario Tech University</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Bachelor of Engineering &mdash; Mechatronics Engineering + Co-op
                  </p>
                </div>
              </div>
              <span className="rounded-md border border-border bg-background/60 px-3 py-1.5 mono-label text-muted-foreground">
                Expected 2028&ndash;2029
              </span>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Currently in my third year of the Mechatronics Engineering program, an interdisciplinary
              degree that combines mechanical design, electronics, programming, control, and
              automation. The graduation range reflects the co-op schedule rather than a fixed date.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Mechanical Design", "Electronics", "Programming", "Control", "Automation"].map(
                (p) => (
                  <span
                    key={p}
                    className="rounded-md border border-border bg-surface-2/60 px-3 py-1.5 text-xs text-foreground"
                  >
                    {p}
                  </span>
                ),
              )}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t, i) => (
            <Reveal key={t.label} delay={i * 80}>
              <div className="relative rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${i === 0 ? "bg-signal" : "bg-gold/50"}`}
                  />
                  <span className="mono-label text-gold">{t.label}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{t.note}</p>
                {i < timeline.length - 1 ? (
                  <span className="absolute right-0 top-1/2 hidden h-px w-4 bg-border lg:block" />
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Certifications ---------------- */

const formal = [
  {
    name: "Certified SOLIDWORKS Associate (CSWA)",
    org: "Dassault Systèmes",
    tech: "SOLIDWORKS · CAD · 3D Modeling",
  },
  {
    name: "Certified MATLAB Associate",
    org: "MathWorks",
    tech: "MATLAB · Computation · Simulation",
  },
];

const training = [
  { name: "Excel Essential Training (Microsoft 365)", tech: "Microsoft Excel" },
  { name: "AI for Business", tech: "Artificial Intelligence" },
  { name: "AI Productivity", tech: "AI Workflows" },
  { name: "Microsoft Copilot", tech: "Copilot" },
  { name: "Learning Microsoft 365 Copilot for Work", tech: "Microsoft 365" },
];

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        index="05"
        eyebrow="Certifications & Training"
        title="Verified credentials"
        description="Formal certifications are listed first; supporting courses and learning modules follow."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {formal.map((c, i) => (
          <Reveal key={c.name} delay={i * 90}>
            <div className="lift relative h-full overflow-hidden rounded-xl border border-gold/35 bg-card p-7">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-lg [background:var(--gradient-gold)] text-primary-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 mono-label text-gold">
                  Certified
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.org}</p>
              <p className="mt-4 mono-label text-muted-foreground">{c.tech}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <span className="mono-label text-muted-foreground">Courses &amp; Learning</span>
      </Reveal>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {training.map((t, i) => (
          <Reveal key={t.name} delay={i * 50}>
            <div className="lift flex h-full items-start gap-3 rounded-lg border border-border bg-surface/50 p-4">
              <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-steel" />
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.tech} · Completed</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */

const upcoming = [
  { title: "Robotics", note: "Sensor-driven motion and control experiments" },
  { title: "Embedded Systems", note: "Microcontroller and firmware builds" },
  { title: "CAD & Prototyping", note: "SOLIDWORKS design to physical part" },
  { title: "Automation & IoT", note: "Connected, self-operating systems" },
];

export function Projects() {
  return (
    <section id="projects" className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading
          index="06"
          eyebrow="Projects"
          title="Building my engineering portfolio"
          description="I'd rather show real work than filler. I'm currently developing hands-on projects across robotics, embedded systems, Arduino, CAD, automation, AI, and IoT — they'll be published here as they're completed."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {upcoming.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="lift group relative h-full overflow-hidden rounded-xl border border-dashed border-border bg-card/50 p-6">
                <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
                <div className="relative">
                  <Hammer className="h-5 w-5 text-gold" />
                  <h3 className="mt-4 font-display text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
                  <span className="mt-5 inline-block rounded border border-border bg-background/70 px-2 py-1 mono-label text-muted-foreground">
                    Coming soon
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Career goals ---------------- */

const goals = [
  "Contribute to a hands-on engineering team",
  "Learn from experienced engineers",
  "Develop practical engineering skills",
  "Work with robotics and automation",
  "Develop embedded systems",
  "Explore intelligent systems and AI",
  "Gain real-world engineering experience",
];

export function Career() {
  return (
    <section id="career" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--gold)_12%,transparent),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="panel overflow-hidden rounded-2xl p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <span className="mono-label text-signal">Career Goals</span>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Looking for my next <span className="text-gradient-gold">engineering challenge</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                I&rsquo;m currently searching for a co-op opportunity where I can apply what I&rsquo;m
                learning to real engineering work &mdash; and learn a great deal more in the process.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3.5 text-sm font-semibold text-destructive-foreground transition-transform hover:-translate-y-0.5"
              >
                I&rsquo;m Open to Co-op Opportunities
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>

            <Reveal delay={120}>
              <ul className="grid gap-3">
                {goals.map((g) => (
                  <li
                    key={g}
                    className="flex items-center gap-3 rounded-lg border border-border bg-background/40 px-4 py-3 text-sm text-muted-foreground"
                  >
                    <BadgeCheck className="h-4 w-4 shrink-0 text-gold" />
                    {g}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact + Footer ---------------- */

const primaryContacts = [
  { icon: Mail, label: "Email", value: "zebianmark@gmail.com", href: "mailto:zebianmark@gmail.com" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/markzebian",
    href: "https://linkedin.com/in/markzebian",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/markzebian",
    href: "https://github.com/markzebian",
  },
];

const secondaryContacts = [
  { icon: Phone, label: "Phone", value: "416-834-3664", href: "tel:+14168343664" },
  { icon: MapPin, label: "Location", value: "Toronto, Ontario", href: null },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@mark.zebian",
    href: "https://www.instagram.com/mark.zebian",
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading
          index="07"
          eyebrow="Contact"
          title="Let's build something"
          description="Interested in robotics, automation, intelligent systems, or engineering? I'd be happy to connect."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {primaryContacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="lift group flex h-full items-start gap-4 rounded-xl border border-border bg-card p-6"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <span className="mono-label text-muted-foreground">{c.label}</span>
                  <p className="mt-1 truncate text-sm font-medium text-foreground">{c.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {secondaryContacts.map((c, i) => {
            const inner = (
              <div className="flex items-center gap-3 rounded-lg border border-border bg-surface/40 px-4 py-3">
                <c.icon className="h-4 w-4 text-steel" />
                <span className="text-sm text-muted-foreground">
                  <span className="text-muted-foreground/70">{c.label}: </span>
                  {c.value}
                </span>
              </div>
            );
            return (
              <Reveal key={c.label} delay={i * 60}>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="block transition-colors hover:text-foreground"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12">
          <Reveal className="mb-6 text-center">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Send me a message
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Or email me directly at{" "}
              <a href="mailto:zebianmark@gmail.com" className="text-gold hover:underline">
                zebianmark@gmail.com
              </a>
            </p>
          </Reveal>
          <ContactForm />
        </div>

      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:px-8 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-base font-semibold">Mark Zebian</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Mechatronics Engineering Student | Robotics &bull; Automation &bull; Intelligent Systems
          </p>
        </div>
        <div className="flex gap-3">
          {[
            { icon: Linkedin, href: "https://linkedin.com/in/markzebian", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/markzebian", label: "GitHub" },
            { icon: Instagram, href: "https://www.instagram.com/mark.zebian", label: "Instagram" },
            { icon: Mail, href: "mailto:zebianmark@gmail.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Mark Zebian
        </p>
      </div>
    </footer>
  );
}
