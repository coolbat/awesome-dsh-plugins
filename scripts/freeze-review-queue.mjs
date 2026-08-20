import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { buildFrozenReview } from "./lib/review-ledger.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = new Map();
for (let index = 2; index < process.argv.length; index += 2) {
  args.set(process.argv[index], process.argv[index + 1]);
}

const sourceCommit = args.get("--source-commit");
if (!/^[0-9a-f]{40}$/.test(sourceCommit ?? "")) {
  throw new Error("--source-commit must be a full 40-character Git SHA");
}

const capturedAt = args.get("--captured-at") ?? new Date().toISOString();
const queue = JSON.parse(
  await fs.readFile(path.join(root, "data", "candidates.json"), "utf8"),
);
const { snapshot, ledger } = buildFrozenReview({
  queue,
  sourceCommit,
  capturedAt,
});

await Promise.all([
  fs.writeFile(
    path.join(root, "data", "review-snapshot.json"),
    `${JSON.stringify(snapshot, null, 2)}\n`,
  ),
  fs.writeFile(
    path.join(root, "data", "review-ledger.json"),
    `${JSON.stringify(ledger, null, 2)}\n`,
  ),
]);

console.log(
  `Frozen ${snapshot.source.readyCount} ready candidates from ${sourceCommit}.`,
);
