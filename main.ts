import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE = "Status: lid closed. Your draft is unsent, cursor blinking where your hands were.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE + "\n");
chmodSync(outFile, 0o644);
