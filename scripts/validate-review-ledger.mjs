import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { validateReviewLedger } from "./lib/review-ledger.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const [snapshot, ledger, catalogData] = await Promise.all([
  fs.readFile(path.join(root, "data", "review-snapshot.json"), "utf8"),
  fs.readFile(path.join(root, "data", "review-ledger.json"), "utf8"),
  fs.readFile(path.join(root, "data", "plugins.json"), "utf8"),
]).then((contents) => contents.map((content) => JSON.parse(content)));

const requireComplete = process.argv.includes("--require-complete");
const errors = validateReviewLedger({
  snapshot,
  ledger,
  catalog: catalogData.plugins,
  requireComplete,
});

if (errors.length > 0) {
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  const pending = ledger.records.filter(
    (record) => record.disposition === "pending",
  ).length;
  console.log(
    `Review ledger valid: ${ledger.records.length} records (${pending} pending).`,
  );
}
