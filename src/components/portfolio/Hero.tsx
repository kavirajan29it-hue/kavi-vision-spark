import { handleAnchorClick } from "@/lib/scroll";
import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

function FloatingOrb({
  className,
  duration,
  delay = 0,
}: {
  className: string;
  duration: number;
  delay?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      animate={{ y: [0, -28, 0], x: [0, 18, 0], scale: [1, 1.08, 1] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden hero-glow px-5 pt-32 pb-20 sm:px-8"
    >
      <FloatingOrb
        className="left-[-6rem] top-24 h-72 w-72 bg-primary/20"
        duration={11}
      />
      <FloatingOrb
        className="right-[-4rem] bottom-10 h-80 w-80 bg-accent/15"
        duration={14}
        delay={1.2}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <Sparkles size={14} className="text-primary" />
          Available for freelance & collaborations
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-7 text-[clamp(2.75rem,9vw,6.5rem)] font-semibold leading-[0.95]"
        >
          Hi, I'm <span className="text-gradient">Kavi.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 font-display text-xl text-foreground/90 sm:text-2xl md:text-3xl"
        >
          Web Designer &amp; Frontend Developer
        </motion.p>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          I create modern digital experiences where technology meets creativity.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <motion.a
            href="#projects"
            onClick={(e) => handleAnchorClick(e, "#projects")}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant"
          >
            View My Work
            <ArrowDownRight size={16} />
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3"
        >
          {[
            { k: "2nd Year", v: "Information Technology" },
            { k: "LICET", v: "Chennai, India" },
            { k: "8+", v: "Skills & crafts" },
          ].map((stat) => (
            <div key={stat.k}>
              <dt className="font-display text-2xl font-semibold text-foreground">{stat.k}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{stat.v}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
