import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";
import { isRealLink, scrollToSection } from "@/lib/scroll";

/** GitHub buttons still open a real URL, or explain the placeholder. */
function openLink(href: string | undefined, label: string) {
  if (isRealLink(href)) {
    window.open(href, "_blank", "noopener,noreferrer");
    return;
  }
  toast(`${label} link coming soon`, {
    description: "Add a real URL in src/components/portfolio/Projects.tsx",
  });
}

/**
 * Replace these placeholder projects with real ones.
 * Set `github` to undefined to hide the GitHub button on a card.
 */
const projects = [
  {
    title: "Aperture — Photography Portfolio",
    description:
      "A cinematic gallery experience with scroll-driven reveals, lightbox viewing and a fully responsive masonry grid.",
    tech: ["React.js", "Framer Motion", "Web Design"],
    github: "#",
    glow: "from-primary/40 via-accent/25 to-transparent",
  },
  {
    title: "Campus Events Hub",
    description:
      "An event discovery board for college clubs with filtering, registrations and an admin view backed by SQL.",
    tech: ["React.js", "SQL", "Frontend Development"],
    github: "#",
    glow: "from-accent/40 via-primary/25 to-transparent",
  },
  {
    title: "Motion UI Kit",
    description:
      "A reusable set of animated interface components — buttons, cards, modals and page transitions.",
    tech: ["React.js", "Framer Motion"],
    github: "#",
    glow: "from-accent/35 via-primary/30 to-transparent",
  },
  {
    title: "Frame — Video Studio Landing",
    description:
      "A landing page for a student video collective, built around bold typography and smooth section transitions.",
    tech: ["Web Design", "React.js", "Framer Motion"],
    github: undefined,
    glow: "from-primary/35 via-accent/30 to-transparent",
  },
];

type Project = (typeof projects)[number];

function TiltCard({ project, index }: { project: Project; index: number }) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [10, -10]), {
    stiffness: 220,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-12, 12]), {
    stiffness: 220,
    damping: 20,
  });
  const glowX = useTransform(px, (v) => `${v * 100}%`);
  const glowY = useTransform(py, (v) => `${v * 100}%`);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div className="h-full [perspective:1200px]">
      <motion.article
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ z: 40, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-7 shadow-card"
      >
        {/* colorful cursor-following glow */}
        <motion.div
          aria-hidden
          style={{ left: glowX, top: glowY }}
          className={`pointer-events-none absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial bg-gradient-to-br ${project.glow} opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div style={{ transform: "translateZ(45px)" }} className="relative flex h-full flex-col">
          <span className="font-display text-xs text-muted-foreground">0{index + 1}</span>
          <h3 className="mt-3 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text font-display text-xl font-semibold text-transparent sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            <motion.button
              type="button"
              onClick={() => scrollToSection("#creative")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg"
            >
              View Project <ArrowUpRight size={15} />
            </motion.button>
            {project.github ? (
              <motion.button
                type="button"
                onClick={() => openLink(project.github, "GitHub")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Github size={15} /> GitHub
              </motion.button>
            ) : null}
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work in progress."
        description="Hover a card for the 3D tilt — tap View Project to jump into my creative work."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.1}>
            <TiltCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
