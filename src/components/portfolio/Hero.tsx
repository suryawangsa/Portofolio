import { motion } from "framer-motion";
import profile from "@/assets/profile.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-hero pt-32 pb-16"
    >
      {/* floating decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div
          className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-primary-glow/15 blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-glow" />
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            <span className="block text-foreground">Ida Bagus</span>
            <span className="block text-gradient">Surya Wangsa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Digital Marketing Specialist · Branding · Social Media Management ·
            Graphic Design · Video Editing · Copywriting.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-3 text-sm md:text-base text-muted-foreground/80 max-w-xl"
          >
            Creative digital specialist berpengalaman membangun brand, strategi
            konten, dan visual storytelling untuk industri kreatif digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              View Projects
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { k: "20+", v: "Brands Managed" },
              { k: "25+", v: "Project" },
              { k: "30+", v: "campaigns" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient">
                  {s.k}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 relative mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-40 blur-3xl animate-glow" />
            <div className="relative rounded-[2rem] glass-strong p-2 shadow-elegant">
              <img
                src={profile}
                alt="Ida Bagus Surya Wangsa"
                width={1024}
                height={1280}
                className="h-[420px] w-[340px] md:h-[480px] md:w-[380px] rounded-[1.6rem] object-cover"
              />
            </div>
            {/* floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-6 top-10 glass-strong rounded-2xl px-4 py-3 shadow-card"
            >
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Specialty
              </div>
              <div className="text-sm font-medium">Branding & Content</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-4 bottom-10 glass-strong rounded-2xl px-4 py-3 shadow-card"
            >
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Based in
              </div>
              <div className="text-sm font-medium">Bali, Indonesia</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
