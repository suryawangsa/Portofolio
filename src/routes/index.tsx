import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Projects } from "@/components/portfolio/Projects";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Ida Bagus Surya Wangsa — Creative Digital Specialist Portfolio",
      },
      {
        name: "description",
        content:
          "Portfolio Ida Bagus Surya Wangsa — Digital Marketing Specialist, Branding, Social Media Management, Video Editing, dan Creative Digital Specialist berbasis di Bali.",
      },
      {
        property: "og:title",
        content: "Ida Bagus Surya Wangsa — Creative Digital Specialist",
      },
      {
        property: "og:description",
        content:
          "Creative digital specialist dengan pengalaman branding, social media, video editing, dan content strategy.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
      />
      <Navbar />
      <main>
        <h1 className="sr-only">
          Ida Bagus Surya Wangsa — Creative Digital Specialist
        </h1>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
