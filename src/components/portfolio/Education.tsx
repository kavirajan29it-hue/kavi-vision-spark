import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const timeline = [
  {
    period: "2024 — Present",
    title: "B.Tech, Information Technology",
    org: "Loyola-ICAM College of Engineering and Technology (LICET)",
    place: "Nungambakkam, Chennai, Tamil Nadu",
    detail:
      "Currently in my 2nd year, focusing on frontend engineering, databases and interface design alongside campus creative work.",
    current: true,
  },
  {
    period: "Ongoing",
    title: "Self-taught Web Design & Frontend",
    org: "Personal practice",
    place: "React.js · Framer Motion · UI design",
    detail:
      "Building interfaces, motion experiments and small products to sharpen craft outside the syllabus.",
    current: false,
  },
];

export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading eyebrow="Education" title="Where I'm learning." />

      <div className="relative border-l border-border pl-8 sm:pl-12">
        {timeline.map((entry, i) => (
          <Reveal key={entry.title} delay={i * 0.1}>
            <div className="relative pb-12 last:pb-0">
              <span className="absolute -left-[2.65rem] top-1.5 flex h-4 w-4 items-center justify-center sm:-left-[3.65rem]">
                <span className="absolute h-4 w-4 rounded-full bg-primary/25" />
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="rounded-3xl border border-border bg-surface p-7 shadow-card"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {entry.period}
                  </span>
                  {entry.current ? (
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
                      Current
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-4 flex items-start gap-3 font-display text-xl font-semibold">
                  <GraduationCap size={20} className="mt-0.5 shrink-0 text-primary" />
                  {entry.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-foreground/90">{entry.org}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin size={14} /> {entry.place}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{entry.detail}</p>
              </motion.div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
