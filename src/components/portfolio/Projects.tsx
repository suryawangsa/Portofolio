import { Reveal, SectionHeading } from "./Reveal";
import digibloom from "@/assets/project-digibloom.png";
import sabda from "@/assets/project-sabda.png";
import topeng from "@/assets/project-topeng.png";

const projects = [
  {
    name: "DigiBloom",
    type: "Digital Creative Agency",
    desc: "Digital creative agency berbasis di Bali, yang menyediakan layanan sosial media management, advertising, web development, creative production, dan e-commerce live streaming service",
    tags: ["Branding", "Strategy", "Social Media"],
    img: digibloom,
  },
  {
    name: "Sabda Visual",
    type: "Production House",
    desc: "Production house berbasis di Bali, yang menyediakan layanan fotography, dan videography untuk mengabadikan momen penting mu.",
    tags: ["Videography", "Editing", "Production"],
    img: sabda,
  },
  {
    name: "Klasifikasi Topeng Pajegan Bali",
    type: "Image Classification Project",
    desc: "Proyek riset image classification untuk mengenali jenis topeng tradisional Pajegan Bali menggunakan machine learning.",
    tags: ["Machine Learning", "Research", "Cultural"],
    img: topeng,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected Projects"
        description="Beberapa karya pilihan yang merepresentasikan pendekatan kreatif dan teknis saya."
      />
      <div className="mx-auto max-w-6xl px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <article className="group relative h-full overflow-hidden rounded-3xl glass shadow-card transition-all hover:-translate-y-2 hover:shadow-glow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="relative -mt-10 p-6">
                <div className="text-xs uppercase tracking-wider text-primary-glow">
                  {p.type}
                </div>
                <h4 className="mt-2 text-xl font-bold">{p.name}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
