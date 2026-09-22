export function externalLinkProps(href) {
  if (!href) return {};
  const external = href.startsWith("http");
  return external ? { target: "_blank", rel: "noreferrer" } : {};
}

export function mediaUrl(path) {
  if (!path) return "";
  return path;
}
