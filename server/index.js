import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { requireAdmin } from "./middleware/auth.js";
import { uploadsDirectory } from "./middleware/upload.js";
import authRouter from "./routes/auth.js";
import contentRouter from "./routes/content.js";
import uploadsRouter from "./routes/uploads.js";

dotenv.config();

const app = express();
const root = dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use("/uploads", express.static(uploadsDirectory));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "alizadev-api" });
});

app.use("/api/auth", authRouter);
app.get("/api/auth/me", requireAdmin, (req, res) => {
  res.json({ admin: req.admin });
});
app.use("/api/content", contentRouter);
app.use("/api/uploads", uploadsRouter);

app.use((error, _req, res, _next) => {
  res.status(400).json({ message: error.message || "Request failed." });
});

const distDir = join(root, "..", "dist");
if (existsSync(distDir)) {
  app.use(express.static(distDir));
  app.use((req, res, next) => {
    if (req.method !== "GET" || req.path.startsWith("/api") || req.path.startsWith("/uploads")) {
      return next();
    }
    res.sendFile(join(distDir, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`AlizaDev API running on http://localhost:${port}`);
});
