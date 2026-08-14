import { motion } from "framer-motion";
import { socials } from "./Contact";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" className="font-display text-lg font-semibold">
            Kavi<span className="text-primary">.</span>
          </a>
          <p className="mt-2 text-sm text-muted-foreground">
            © 2026 Kavi. All rights reserved.
          </p>
        </div>

        <ul className="flex items-center gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <motion.a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ y: -3, scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className="inline-flex rounded-xl border border-border p-2.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <s.icon size={16} />
              </motion.a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-muted-foreground">Built with React.js &amp; Framer Motion</p>
      </div>
    </footer>
  );
}
