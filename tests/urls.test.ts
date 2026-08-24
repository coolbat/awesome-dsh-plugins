import assert from "node:assert/strict";
import test from "node:test";

import { siteConfig } from "../src/lib/site";
import { absoluteLocalizedPath, localizedPath } from "../src/lib/urls";

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
