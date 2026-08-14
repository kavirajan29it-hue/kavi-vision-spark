import { motion } from "framer-motion";
import {
  Camera,
  Code2,
  Database,
  Film,
  LayoutPanelTop,
  Mic,
  MousePointerClick,
  Sparkles,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const skills = [
  { name: "React.js", icon: Code2, note: "Components, hooks, state" },
  { name: "Framer Motion", icon: Sparkles, note: "Motion & micro-interactions" },
  { name: "SQL", icon: Database, note: "Queries & data modelling" },
  { name: "Web Design", icon: LayoutPanelTop, note: "Layout, type, colour" },
  { name: "Frontend Development", icon: MousePointerClick, note: "Responsive interfaces" },
  { name: "Photography", icon: Camera, note: "Composition & light" },
  { name: "Videography", icon: Film, note: "Shooting & editing" },
  { name: "Public Speaking", icon: Mic, note: "Presenting with clarity" },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading
        eyebrow="Skills"
        title="The toolkit behind the work."
        description="A mix of engineering craft and visual storytelling — the two sides I keep building on."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <Reveal key={skill.name} delay={(i % 4) * 0.07}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-card"
            >
              <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 hero-glow" />
              <skill.icon size={22} className="relative text-primary" />
              <h3 className="relative mt-6 font-display text-base font-semibold">{skill.name}</h3>
              <p className="relative mt-1.5 text-sm text-muted-foreground">{skill.note}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
