import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  About,
  Focus,
  Skills,
  Education,
  Certifications,
  Projects,
  Career,
  Contact,
  Footer,
} from "@/components/site/Sections";

const title = "Mark Zebian — Mechatronics Engineering Student";
const description =
  "Third-year Mechatronics Engineering student at Ontario Tech University focused on robotics, automation, AI, and embedded systems. Seeking a co-op opportunity.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Focus />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
