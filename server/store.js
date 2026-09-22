import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = dirname(fileURLToPath(import.meta.url));
const dataDir = join(root, "data");
const dataPath = join(dataDir, "content.json");
const seedPath = join(dataDir, "seed.json");

function ensureStore() {
  mkdirSync(dataDir, { recursive: true });
  if (!existsSync(dataPath)) {
    copyFileSync(seedPath, dataPath);
  }
}

export function readContent() {
  ensureStore();
  const seed = JSON.parse(readFileSync(seedPath, "utf8"));
  const current = JSON.parse(readFileSync(dataPath, "utf8"));
  const merged = { ...seed, ...current };
  for (const key of Object.keys(seed)) {
    if (current[key] == null) merged[key] = seed[key];
  }
  merged.profile = {
    ...seed.profile,
    ...(current.profile || {}),
    education: current.profile?.education?.length
      ? current.profile.education
      : seed.profile.education,
    experience: current.profile?.experience?.[0]?.location
      ? current.profile.experience
      : seed.profile.experience,
  };
  return merged;
}

export function writeContent(content) {
  ensureStore();
  writeFileSync(dataPath, JSON.stringify(content, null, 2));
  return content;
}

export function updateSlice(key, value) {
  const content = readContent();
  content[key] = value;
  return writeContent(content);
}

export function resetFromSeed() {
  copyFileSync(seedPath, dataPath);
  return readContent();
}
