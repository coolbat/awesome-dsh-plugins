import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { applyReviewWave } from "./lib/review-ledger.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = new Map();
for (let index = 2; index < process.argv.length; index += 2) {
  args.set(process.argv[index], process.argv[index + 1]);
}

const decisionsPath = args.get("--decisions");
const catalogPath = args.get("--catalog");
const priorRef = args.get("--prior-ref") ?? "origin/main";
const start = Number(args.get("--start"));
const end = Number(args.get("--end"));
const reviewedAt = args.get("--reviewed-at");
if (
  !decisionsPath ||
  !catalogPath ||
  !Number.isInteger(start) ||
  !Number.isInteger(end) ||
  start < 1 ||
  end < start ||
  !/^\d{4}-\d{2}-\d{2}$/.test(reviewedAt ?? "")
) {
  throw new Error(
    "--decisions, --catalog, --start, --end, and ISO --reviewed-at are required",
  );
}

const [ledger, catalog, decisionData, catalogData] = await Promise.all([
  fs.readFile(path.join(root, "data", "review-ledger.json"), "utf8"),
  fs.readFile(path.join(root, "data", "plugins.json"), "utf8"),
  fs.readFile(path.resolve(root, decisionsPath), "utf8"),
  fs.readFile(path.resolve(root, catalogPath), "utf8"),
]).then((values) => values.map((value) => JSON.parse(value)));
const priorLedger = JSON.parse(
  execFileSync("git", ["show", `${priorRef}:data/review-ledger.json`], {
    cwd: root,
    encoding: "utf8",
  }),
);

const result = applyReviewWave({
  ledger,
  catalog,
  priorLedger,
  decisions: decisionData.decisions,
  catalogRecords: catalogData.catalogRecords,
  start,
  end,
  reviewedAt,
});

await Promise.all([
  fs.writeFile(
    path.join(root, "data", "review-ledger.json"),
    `${JSON.stringify(result.ledger, null, 2)}\n`,
  ),
  fs.writeFile(
    path.join(root, "data", "plugins.json"),
    `${JSON.stringify(result.catalog, null, 2)}\n`,
  ),
]);

console.log(
  `Applied review records ${start}-${end}: ${decisionData.decisions.length} explicit, ${end - start + 1 - decisionData.decisions.length} exact historical.`,
);
