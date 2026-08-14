import { motion } from "framer-motion";
import { Camera, Film, Mic } from "lucide-react";
import { Reveal } from "./Reveal";

const crafts = [
  {
    icon: Camera,
    title: "Photography",
    text: "Capturing moments, light and texture — street frames, campus life and portraits that tell a story without a caption.",
    tags: ["Composition", "Editing", "Visual storytelling"],
  },
  {
    icon: Film,
    title: "Videography",
    text: "Shooting and editing short films and event recaps, shaping pace and rhythm so every cut earns its place.",
    tags: ["Shooting", "Editing", "Colour"],
  },
  {
    icon: Mic,
    title: "Public Speaking",
    text: "Presenting ideas with confidence and clarity, reading the room and keeping an audience genuinely engaged.",
    tags: ["Presenting", "Confidence", "Engagement"],
  },
];

export function Creative() {
  return (
    <section id="creative" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 hero-glow opacity-70" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-border" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-border" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-16 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
            Creative side
          </span>
          <h2 className="mt-5 font-display text-3xl leading-tight sm:text-5xl md:text-6xl">
            Beyond the <span className="italic text-gradient">code</span>, there's a camera and a
            microphone.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {crafts.map((craft, i) => (
            <Reveal key={craft.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, rotate: i === 1 ? 0 : i === 0 ? -0.6 : 0.6 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className="flex h-full flex-col justify-between rounded-3xl glass p-8"
              >
                <div>
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex rounded-2xl border border-border bg-surface-elevated p-3 text-accent"
                  >
                    <craft.icon size={22} />
                  </motion.div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{craft.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{craft.text}</p>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {craft.tags.map((tag) => (
                    <li key={tag} className="text-xs text-muted-foreground">
                      <span className="mr-2 text-accent">/</span>
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
