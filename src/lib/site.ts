export const siteConfig = {
  name: "DSH Plugin Index",
  description:
    "An evidence-led, bilingual directory of DeepSeek Harness plugins.",
  repository: "https://github.com/coolbat/awesome-dsh-plugins",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://awesome-dsh-plugins.pages.dev",
};
