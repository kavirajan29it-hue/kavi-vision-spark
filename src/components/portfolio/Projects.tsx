import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

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
    link: "#",
    github: "#",
    accent: "from-primary/25",
  },
  {
    title: "Campus Events Hub",
    description:
      "An event discovery board for college clubs with filtering, registrations and an admin view backed by SQL.",
    tech: ["React.js", "SQL", "Frontend Development"],
    link: "#",
    github: "#",
    accent: "from-accent/25",
  },
  {
    title: "Motion UI Kit",
    description:
      "A reusable set of animated interface components — buttons, cards, modals and page transitions.",
    tech: ["React.js", "Framer Motion"],
    link: "#",
    github: "#",
    accent: "from-primary/20",
  },
  {
    title: "Frame — Video Studio Landing",
    description:
      "A landing page for a student video collective, built around bold typography and smooth section transitions.",
    tech: ["Web Design", "React.js", "Framer Motion"],
    link: "#",
    github: undefined,
    accent: "from-accent/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work in progress."
        description="Placeholder case studies for now — each card is structured so real projects can slot straight in."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.1}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-7 shadow-card"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${project.accent} to-transparent opacity-60 blur-2xl transition-transform duration-700 group-hover:scale-125`}
              />
              <span className="relative font-display text-xs text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="relative mt-3 font-display text-xl font-semibold sm:text-2xl">
                {project.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="relative mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="relative mt-8 flex flex-wrap gap-3 pt-2">
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
                >
                  View Project <ArrowUpRight size={15} />
                </motion.a>
                {project.github ? (
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                  >
                    <Github size={15} /> GitHub
                  </motion.a>
                ) : null}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
