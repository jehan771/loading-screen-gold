// Loading Screen Gold — one loading-screen tip, max 200 characters.
// Writes the tip to /output/entry.txt. Deterministic: same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: your agent rewrote this file twice while you blinked. Breathe. The loading bar is the only one of you not panicking.";

// Gate: the entry must be 1-200 characters of real text, no trailing newline.
if (TIP.length < 1 || TIP.length > 200 || TIP.trim().length === 0) {
  throw new Error(`Tip fails the gate: ${TIP.length} characters`);
}
if (TIP !== TIP.trim()) {
  throw new Error("Tip has leading/trailing whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
console.log(`Wrote ${TIP.length} characters to /output/entry.txt`);
