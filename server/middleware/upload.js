import { mkdirSync } from "fs";
import multer from "multer";
import { extname, join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const uploadDir = join(dirname(fileURLToPath(import.meta.url)), "..", "uploads");
mkdirSync(uploadDir, { recursive: true });

const allowed = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
  "image/gif",
]);

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const safeExt = extname(file.originalname || "").toLowerCase() || ".webp";
    cb(null, `${Date.now()}-${Math.round(Math.random() * 1e6)}${safeExt}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (allowed.has(file.mimetype)) {
      cb(null, true);
      return;
    }
    cb(new Error("Only image files are allowed."));
  },
});

export const uploadsDirectory = uploadDir;
