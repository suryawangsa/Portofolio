import { Reveal, SectionHeading } from "./Reveal";

const highlights = [
  {
    title: "Creative Mindset",
    desc: "Passionate di industri kreatif digital, branding, dan visual storytelling.",
  },
  {
    title: "Innovation",
    desc: "Selalu terbuka pada ide baru dan berfokus menciptakan solusi kreatif serta inovatif dalam setiap project digital dan branding.",
  },
  {
    title: "Leadership",
    desc: "Berpengalaman memimpin kepanitiaan mahasiswa skala kampus dan project manager di digital creative agency.",
  },
  {
    title: "Multidisciplinary",
    desc: "Menguasai digital marketing, design, video editing, hingga content strategy.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <SectionHeading
        eyebrow="About Me"
        title="About Me"
        description="Creative digital enthusiast di bidang social media management, content creator, copywraiting, dan KOL Management."
      />
      <div className="mx-auto max-w-6xl px-4 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="glass rounded-3xl p-8 md:p-10 shadow-card h-full">
            <div className="text-xs uppercase tracking-widest text-primary-glow">
              Profile
            </div>
            <h3 className="mt-3 text-2xl font-bold">
              Creative Digital Specialist berbasis di Bali
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
              Memiliki passion membantu brand dan bisnis membangun kehadiran digital
               yang lebih kuat melalui strategi kreatif, visual menarik, dan konten yang
                impactful. Berpengalaman dalam membuat campaign promosi, copywriting, serta 
                pengembangan konsep kreatif untuk brand dan komunitas. Juga memiliki ketertarikan
                 pada teknologi dan pengembangan AI, khususnya di bidang computer vision dan deep 
                 learning. Founder DigiBloom, sebuah digital agency yang berfokus membantu bisnis 
                 dan UMKM berkembang di era digital melalui layanan social media management dan 
                 content creation, serta Founder Sabda Visual, sebuah production house yang menyediakan 
                 layanan fotografi dan videografi untuk berbagai acara dan kebutuhan kreatif.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed text-justify">
              Tujuan saya: membantu brand, startup, dan UMKM tumbuh dengan
              identitas visual dan komunikasi digital yang premium.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <div className="glass group h-full rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  ★
                </div>
                <h4 className="mt-4 font-semibold">{h.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {h.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
