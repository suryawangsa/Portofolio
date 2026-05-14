import { Reveal, SectionHeading } from "./Reveal";

const soft = [
  "Leadership",
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Public Speaking",
  "Creativity",
  "Time Management",
];

const hard = [
  "Digital Marketing",
  "Social Media Management",
  "Graphic Design",
  "Video Editing",
  "Copywriting",
  "Content Strategy",
  "Photography",
  "Videography",
  "KOL Management",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <SectionHeading
        eyebrow="Skills"
        title="Skills & Expertise"
        description="Kombinasi soft skill dan hard skill yang mendukung delivery kreatif end-to-end."
      />
      <div className="mx-auto max-w-6xl px-4 grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="glass rounded-3xl p-8 h-full">
            <h3 className="text-xl font-bold">Soft Skills</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Karakter dan kemampuan interpersonal yang dibawa di setiap kolaborasi.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {soft.map((s) => (
                <span
                  key={s}
                  className="rounded-full glass-strong border border-white/10 px-4 py-2 text-sm transition-all hover:border-primary/40 hover:text-primary-glow hover:shadow-glow cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="glass rounded-3xl p-8">
            <h3 className="text-xl font-bold">Hard Skills</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tools dan disiplin teknis yang saya kuasai sehari-hari.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {hard.map((h) => (
                <span
                  key={h}
                  className="rounded-full glass-strong border border-white/10 px-4 py-2 text-sm transition-all hover:border-primary/40 hover:text-primary-glow hover:shadow-glow cursor-default"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
