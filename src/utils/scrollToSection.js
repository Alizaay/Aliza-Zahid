export function scrollToSection(hash) {
  const id = String(hash || "").replace("#", "");
  const node = document.getElementById(id);
  if (node) {
    node.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
