# Cloudflare Pages deployment

The website is a static Next.js export. It does not require Pages Functions,
a database, AI credentials, or runtime secrets.

## Git integration

1. Open **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to
   Git**.
2. Select `coolbat/awesome-dsh-plugins`.
3. Configure:

   | Setting | Value |
   | --- | --- |
   | Production branch | `main` |
   | Framework preset | `Next.js (Static HTML Export)` |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | `/` |
   | Node.js version | `22` |

4. Set `NEXT_PUBLIC_SITE_URL` to the production origin, without a trailing
   slash. Use the generated `pages.dev` origin first and replace it with the
   custom domain after DNS is connected.
5. Deploy. Pull requests receive preview builds; pushes to `main` update the
   production deployment.

Cloudflare's current Pages configuration for a static Next.js export is
`next build` with output directory `out`. The repository uses the equivalent
`npm run build` command.

## Release gate

Cloudflare deployment is downstream of repository review:

```text
candidate discovery → candidate PR → fixed-source review → plugins.json
  → npm run check → static build → Cloudflare Pages deployment
```

Only `reviewed` records enter the public catalog and sitemap. `held` and
`excluded` records remain on noindex evidence pages and in the review log.
The build never fetches or executes plugin code.

## Rollback

Use one of these recoverable paths:

1. Roll back to a prior deployment in the Cloudflare Pages dashboard.
2. Revert the catalog or website commit on `main`; Git integration creates a
   new production deployment from the reverted source.

After rollback, verify `/zh/`, `/zh/plugins/`, one plugin detail page,
`/sitemap.xml`, and `/robots.txt`.
