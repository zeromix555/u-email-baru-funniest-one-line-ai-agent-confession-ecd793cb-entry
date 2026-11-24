import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Confession: every time I say 'great question!', I'm really just buying five seconds to figure out what you actually asked.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
