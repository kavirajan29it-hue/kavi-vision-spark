import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

/** Replace these placeholder handles/links with real ones. */
export const socials = [
  { label: "Email", value: "kavi@example.com", href: "mailto:kavi@example.com", icon: Mail },
  { label: "LinkedIn", value: "/in/kavi", href: "https://linkedin.com", icon: Linkedin },
  { label: "GitHub", value: "@kavi", href: "https://github.com", icon: Github },
  { label: "Instagram", value: "@kavi", href: "https://instagram.com", icon: Instagram },
];

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-8 shadow-card sm:p-14">
          <div aria-hidden className="pointer-events-none absolute inset-0 hero-glow opacity-80" />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                Contact
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Let's Create Something Great Together.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                Got a project, a collaboration or just an idea worth building? My inbox is always
                open.
              </p>
              <motion.a
                href="mailto:kavi@example.com"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant"
              >
                <Mail size={16} /> Send me an email
              </motion.a>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {socials.map((s, i) => (
                <li key={s.label}>
                  <motion.a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    whileHover={{ y: -5 }}
                    className="flex h-full flex-col gap-2 rounded-2xl glass p-5"
                  >
                    <s.icon size={18} className="text-accent" />
                    <span className="font-display text-sm font-semibold">{s.label}</span>
                    <span className="text-xs text-muted-foreground">{s.value}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
