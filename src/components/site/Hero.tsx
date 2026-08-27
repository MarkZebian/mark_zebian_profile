import { ArrowRight, MapPin, CircuitBoard } from "lucide-react";
import portraitAsset from "@/assets/mark-zebian-headshot.jpg.asset.json";
const portrait = portraitAsset.url;

const chips = ["ROBOTICS", "AI", "CAD", "EMBEDDED SYSTEMS", "AUTOMATION"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 h-72 w-72 rounded-full bg-signal/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="mono-label text-muted-foreground">
              Seeking Co-op &mdash; Robotics &amp; Automation
            </span>
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
            Mark <span className="text-gradient-gold">Zebian</span>
          </h1>

          <p className="mt-4 font-display text-lg text-steel sm:text-xl">
            Mechatronics Engineering Student{" "}
            <span className="text-gold/70">| Robotics &bull; Automation &bull; Intelligent Systems</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Third-year Mechatronics Engineering student at Ontario Tech University with a passion for
            robotics, automation, AI, embedded systems, and turning engineering concepts into tangible
            solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#skills"
              className="group inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View My Skills
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-signal/60 hover:text-signal"
            >
              Let&rsquo;s Connect
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold" /> Toronto, Ontario
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CircuitBoard className="h-3.5 w-3.5 text-gold" /> CSWA &amp; MATLAB Associate certified
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-gold/25" />
          <div className="absolute inset-6 animate-spin-slow rounded-full border border-border [animation-direction:reverse]" />

          <svg
            viewBox="0 0 400 400"
            className="pointer-events-none absolute inset-0 h-full w-full text-gold/60"
            aria-hidden="true"
          >
            <circle
              cx="200"
              cy="200"
              r="168"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="animate-trace"
            />
            <circle
              cx="200"
              cy="200"
              r="192"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="animate-trace [animation-delay:2s]"
            />
          </svg>

          <div className="relative m-10 aspect-square rounded-full p-[3px] [background:var(--gradient-gold)]">
            <div className="h-full w-full overflow-hidden rounded-full border-4 border-background bg-surface">
              <img
                src={portrait}
                alt="Portrait of Mark Zebian, Mechatronics Engineering student"
                className="h-full w-full object-cover"
                width={460}
                height={460}
              />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0">
            {chips.map((c, i) => {
              const positions = [
                "left-0 top-4",
                "right-0 top-24",
                "-left-2 bottom-24",
                "right-2 bottom-6",
                "left-1/2 -translate-x-1/2 -bottom-2",
              ];
              return (
                <span
                  key={c}
                  className={`absolute ${positions[i]} animate-float-soft rounded border border-border bg-background/85 px-2.5 py-1 mono-label text-muted-foreground backdrop-blur`}
                  style={{ animationDelay: `${i * 0.7}s` }}
                >
                  {c}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
