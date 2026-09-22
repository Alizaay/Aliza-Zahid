import { Router } from "express";
import { requireAdmin } from "../middleware/auth.js";
import { readContent, resetFromSeed, updateSlice, writeContent } from "../store.js";

const router = Router();
const slices = [
  "profile",
  "services",
  "technologies",
  "projects",
  "contact",
  "socialLinks",
  "navigation",
  "companies",
  "process",
  "testimonials",
  "faqs",
  "experience",
  "education",
];

router.get("/", (_req, res) => {
  res.json(readContent());
});

router.get("/projects/:slug", (req, res) => {
  const project = readContent().projects.find((item) => item.slug === req.params.slug);
  if (!project) {
    return res.status(404).json({ message: "Project not found." });
  }
  res.json(project);
});

router.put("/:slice", requireAdmin, (req, res) => {
  const { slice } = req.params;
  if (!slices.includes(slice)) {
    return res.status(400).json({ message: "Unknown content slice." });
  }
  res.json(updateSlice(slice, req.body.value ?? req.body));
});

router.post("/projects", requireAdmin, (req, res) => {
  const content = readContent();
  const project = normalizeProject(req.body);
  content.projects.unshift(project);
  writeContent(content);
  res.status(201).json(project);
});

router.put("/projects/:id", requireAdmin, (req, res) => {
  const content = readContent();
  const index = content.projects.findIndex((item) => item.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "Project not found." });
  }
  content.projects[index] = normalizeProject({ ...content.projects[index], ...req.body, id: req.params.id });
  writeContent(content);
  res.json(content.projects[index]);
});

router.delete("/projects/:id", requireAdmin, (req, res) => {
  const content = readContent();
  content.projects = content.projects.filter((item) => item.id !== req.params.id);
  writeContent(content);
  res.json({ ok: true });
});

router.post("/reset", requireAdmin, (_req, res) => {
  res.json(resetFromSeed());
});

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function normalizeProject(input) {
  const title = String(input.title || "Untitled project").trim();
  const slug = slugify(input.slug || title);
  return {
    id: input.id || slug || `project-${Date.now()}`,
    slug,
    title,
    category: input.category || "Product",
    status: input.status === "in-development" ? "in-development" : "completed",
    featured: Boolean(input.featured),
    year: Number(input.year) || new Date().getFullYear(),
    summary: input.summary || "",
    description: input.description || "",
    features: Array.isArray(input.features) ? input.features.filter(Boolean) : [],
    technologies: Array.isArray(input.technologies) ? input.technologies.filter(Boolean) : [],
    thumbnail: input.thumbnail || "",
    hero: input.hero || "",
    screenshots: Array.isArray(input.screenshots) ? input.screenshots.filter(Boolean) : [],
    liveUrl: input.liveUrl || "",
    githubUrl: input.githubUrl || "",
  };
}

export default router;
