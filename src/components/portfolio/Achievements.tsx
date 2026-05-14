import { Reveal, SectionHeading } from "./Reveal";

const items = [
  {
    title: "Top 165 Penerima Hibah P2MW 2024",
    desc: "Program Pembinaan Mahasiswa Wirausaha — Kemendikbud",
    icon: "🏆",
  },
  {
    title: "Top 10 Best Startup",
    desc: "Bali Startup Expo 2025",
    icon: "🚀",
  },
  {
    title: "Top 10 Best Business Idea",
    desc: "Bali Startup Camp 2024",
    icon: "💡",
  },
  {
    title: "Juara 2 & Favorite 5",
    desc: "Lomba Konten Kreatif Bali Era Baru 2023",
    icon: "🎬",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <SectionHeading
        eyebrow="Recognition"
        title="Certifications & Achievements"
        description="Beberapa pencapaian yang membentuk perjalanan kreatif dan kewirausahaan saya."
      />
      <div className="mx-auto max-w-6xl px-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.08}>
            <div className="group relative h-full overflow-hidden rounded-3xl glass p-6 shadow-card transition-all hover:-translate-y-2 hover:shadow-glow">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-10" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-2xl shadow-glow">
                  {it.icon}
                </div>
                <h4 className="mt-5 text-base font-semibold leading-snug">
                  {it.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
