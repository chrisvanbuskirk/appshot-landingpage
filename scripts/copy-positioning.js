// Copies positioning-guide/style-guide.html into public so Next can serve it.
// Run during dev and build.

import { mkdirSync, copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

const src = join(process.cwd(), "positioning-guide", "style-guide.html");
const dst = join(process.cwd(), "public", "positioning-guide", "style-guide.html");

try {
  if (!existsSync(src)) {
    console.warn("[copy-positioning] source not found:", src);
    process.exit(0);
  }
  mkdirSync(dirname(dst), { recursive: true });
  copyFileSync(src, dst);
  console.log("[copy-positioning] copied to:", dst);
} catch (err) {
  console.error("[copy-positioning] failed:", err);
  process.exit(1);
}

