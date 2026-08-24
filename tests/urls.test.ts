import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { siteConfig } from "../src/lib/site";
import {
  absoluteLocalizedPath,
  languageAlternates,
  localizedPath,
} from "../src/lib/urls";

test("English uses the unprefixed canonical URL space", () => {
  assert.equal(localizedPath("en"), "/");
  assert.equal(localizedPath("en", "plugins"), "/plugins/");
  assert.equal(
    localizedPath("en", "plugins/example-plugin"),
    "/plugins/example-plugin/",
  );
});

test("Chinese keeps its locale prefix", () => {
  assert.equal(localizedPath("zh"), "/zh/");
  assert.equal(localizedPath("zh", "plugins"), "/zh/plugins/");
});

test("localized paths normalize surrounding slashes", () => {
  assert.equal(localizedPath("en", "/review/"), "/review/");
  assert.equal(localizedPath("zh", "/methodology/"), "/zh/methodology/");
});

test("absolute localized paths use the configured site origin", () => {
  assert.equal(
    absoluteLocalizedPath("en", "plugins"),
    `${siteConfig.url}/plugins/`,
  );
  assert.equal(
    absoluteLocalizedPath("zh", "plugins"),
    `${siteConfig.url}/zh/plugins/`,
  );
});

test("language alternates make unprefixed English the canonical fallback", () => {
  assert.deepEqual(languageAlternates("plugins/example-plugin"), {
    en: "/plugins/example-plugin/",
    zh: "/zh/plugins/example-plugin/",
    "x-default": "/plugins/example-plugin/",
  });
});

test("legacy English URLs permanently redirect one-to-one", async () => {
  const redirects = await readFile(
    new URL("../public/_redirects", import.meta.url),
    "utf8",
  );

  assert.equal(redirects, "/en / 301\n/en/ / 301\n/en/* /:splat 301\n");
});
