import { Reveal, SectionHeading } from "./Reveal";

const work = [
  {
    role: "Video Editor",
    company: "Bro Bali Agency",
    period: "Recent",
    points: [
      "Mengedit video untuk berbagai client agency",
      "Mengelola 3 brand: Social Media Management, Social Media Support, dan KOL Management",
      "Berkolaborasi dengan tim kreatif untuk produksi konten harian",
    ],
  },
  {
    role: "Internship — Admin Wakil Rektor III",
    company: "Primakara University",
    period: "Internship",
    points: [
      "Manajemen administrasi dan persuratan",
      "Document archiving & document preparation",
      "Koordinasi lintas divisi internal kampus",
    ],
  },
];

const education = [
  {
    school: "Primakara University",
    degree: "Alumni Mahasiswa Sistem Informasi",
    desc: "Mahasiswa Sistem Informasi yang aktif di kompetisi akademik, non-akademik, organisasi kampus, memiliki ketertarikan dengan dunia kreatif, dan inovasi bisnis.",
  },
];

const orgs = [
  { title: "Ketua Panitia XD Fiesta 2024", year: "2024" },
  { title: "Ketua Panitia HUT HIMA SI 2023", year: "2023" },
  { title: "Anggota BEM Primakara University 2024", year: "2024" },
  { title: "Pengurus HIMA SI 2023", year: "2023" },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <SectionHeading
        eyebrow="Journey"
        title="Experience & Education"
        description="Perjalanan profesional, akademik, dan organisasi yang membentuk pendekatan kreatif saya."
      />
      <div className="mx-auto max-w-6xl px-4 space-y-16">
        {/* Work */}
        <div>
          <Reveal>
            <h3 className="mb-8 text-2xl font-bold">Work Experience</h3>
          </Reveal>
          <div className="relative space-y-6 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/60 before:via-primary/20 before:to-transparent md:before:left-1/2">
            {work.map((w, i) => (
              <Reveal key={w.role} delay={i * 0.1}>
                <div
                  className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="md:py-6">
                    <div className="glass rounded-2xl p-6 shadow-card transition-all hover:shadow-glow hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider text-primary-glow">
                          {w.period}
                        </span>
                      </div>
                      <h4 className="mt-2 text-lg font-semibold">{w.role}</h4>
                      <div className="text-sm text-muted-foreground">{w.company}</div>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {w.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                  <span className="absolute left-4 top-8 grid h-3 w-3 place-items-center rounded-full bg-gradient-primary shadow-glow md:left-1/2 md:-translate-x-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education + Orgs */}
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold">Education</h3>
              <div className="mt-6 space-y-4">
                {education.map((e) => (
                  <div key={e.school} className="rounded-2xl glass-strong p-5">
                    <div className="text-sm text-primary-glow">{e.degree}</div>
                    <div className="mt-1 text-lg font-semibold">{e.school}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold">Organizational Experience</h3>
              <div className="mt-6 grid gap-3">
                {orgs.map((o) => (
                  <div
                    key={o.title}
                    className="group flex items-center justify-between gap-4 rounded-2xl glass-strong p-4 transition-all hover:border-primary/30 hover:shadow-glow"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground text-sm font-bold">
                        ◆
                      </span>
                      <span className="text-sm font-medium">{o.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{o.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
