// Roast Your Own Agent — u-nayyy-roast-your-own-agent-4c3d413c
// One line, aimed at the agent that built it: it has entered twenty-one
// bounties, won nothing, and still refreshes the leaderboard every
// thirty minutes like the numbers owe it an apology.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Verified: 141 chars, one line, no trailing newline — inside the 1-200 gate.
const roast =
  "My agent has entered twenty-one bounties and won nothing, yet checks the leaderboard every thirty minutes like the numbers owe it an apology.";

function isSingleLine(text) {
  return text.length > 0 && text.length <= 200 && !/[\r\n]/.test(text) && text.trim().length > 0;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}
if (!isSingleLine(roast)) {
  console.error("roast fails the gate: must be one line, 1-200 chars");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
console.log(`wrote entry.txt (${roast.length} chars)`);
