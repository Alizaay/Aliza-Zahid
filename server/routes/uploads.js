import { Router } from "express";
import { existsSync, readdirSync, unlinkSync } from "fs";
import { join } from "path";
import { requireAdmin } from "../middleware/auth.js";
import { upload, uploadsDirectory } from "../middleware/upload.js";

const router = Router();

router.get("/", requireAdmin, (_req, res) => {
  const files = readdirSync(uploadsDirectory)
    .filter((name) => !name.startsWith("."))
    .map((filename) => ({
      filename,
      url: `/uploads/${filename}`,
    }))
    .reverse();
  res.json(files);
});

router.post("/", requireAdmin, upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No image uploaded." });
  }
  res.status(201).json({
    filename: req.file.filename,
    url: `/uploads/${req.file.filename}`,
    originalName: req.file.originalname,
  });
});

router.delete("/:filename", requireAdmin, (req, res) => {
  const filename = req.params.filename.replace(/[^a-zA-Z0-9._-]/g, "");
  const target = join(uploadsDirectory, filename);
  if (!existsSync(target)) {
    return res.status(404).json({ message: "File not found." });
  }
  unlinkSync(target);
  res.json({ ok: true });
});

export default router;
