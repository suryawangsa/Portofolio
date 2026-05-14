import { Reveal, SectionHeading } from "./Reveal";

const channels = [
  {
    label: "Instagram",
    value: "@idagussurya",
    href: "https://www.instagram.com/idagussurya/",
    icon: "📸",
  },
  {
    label: "LinkedIn",
    value: "Ida Bagus Surya Wangsa",
    href: "https://www.linkedin.com/in/ida-bagus-surya-wangsa-914024342/",
    icon: "💼",
  },
  {
    label: "Email",
    value: "suryawangsa5684@gmail.com",
    href: "https://mailto:suryawangsa5684@gmail.com",
    icon: "✉️",
  },
  {
    label: "WhatsApp",
    value: "+62 819-3880-8779",
    href: "https://wa.me/6281938808779",
    icon: "💬",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something Creative Together"
        description="Tertarik berkolaborasi atau punya project menarik? Saya selalu terbuka untuk diskusi."
      />
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] glass-strong p-8 md:p-12 shadow-elegant">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  Mari wujudkan ide brand kreatifmu jadi nyata.
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Available untuk freelance, kolaborasi project, dan kesempatan
                  full-time di industri kreatif digital.
                </p>
                <a
                  href="mailto:hello@suryawangsa.com"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
                >
                  Start a Conversation →
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {channels.map((c, i) => (
                  <Reveal key={c.label} delay={i * 0.06}>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all hover:-translate-y-1 hover:shadow-glow"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-lg shadow-glow">
                        {c.icon}
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">
                          {c.label}
                        </div>
                        <div className="truncate text-sm font-medium">{c.value}</div>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-primary text-xs text-primary-foreground font-bold">
            IB
          </span>
          <span>Crafted with care · Surya Wangsa</span>
        </div>
        <div>© 2026 Ida Bagus Surya Wangsa. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
