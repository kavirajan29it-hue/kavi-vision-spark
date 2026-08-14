import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";

const highlights = [
  { title: "Design-led", text: "Interfaces built around clarity, rhythm and detail." },
  { title: "Frontend focused", text: "React components that stay clean and reusable." },
  { title: "Creative eye", text: "Photography and video shape how I frame layouts." },
  { title: "Communicator", text: "Public speaking keeps ideas sharp and simple." },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading eyebrow="About me" title="A student obsessed with how things look and feel." />

      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hi, I'm Kavi, a 2nd-year Information Technology student at Loyola-ICAM College of
            Engineering and Technology in Chennai. I'm passionate about web design and frontend
            development, and I enjoy creating clean, engaging, and user-friendly digital
            experiences. Beyond technology, I explore photography, videography, and public speaking,
            allowing me to combine technical thinking with creativity and communication.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Chennai, India", "LICET", "Open to internships"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="h-full rounded-2xl glass p-5"
              >
                <h3 className="font-display text-base font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
