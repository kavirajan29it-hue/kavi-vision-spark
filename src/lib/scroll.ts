/**
 * Smooth-scrolls to a section id (e.g. "#projects") without letting the
 * browser append the hash in a way that fights the router.
 */
export function scrollToSection(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) {
    console.warn(`[portfolio] No section found with id "${id}"`);
    return false;
  }
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `#${id}`);
  return true;
}

/** Click handler for in-page anchor links. */
export function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  hash: string,
) {
  if (!hash.startsWith("#")) return;
  e.preventDefault();
  scrollToSection(hash);
}

/** True when a link is a real destination (not a "#" placeholder). */
export function isRealLink(href?: string) {
  return Boolean(href && href !== "#" && href.trim() !== "");
}
