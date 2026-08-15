# Contributing

Thanks for helping improve the evidence record for the DSH plugin ecosystem.

## Before submitting

A candidate must provide:

1. A public repository and a full 40-character commit SHA.
2. The `package.json` path that declares `dsh.bundle.patch`.
3. The referenced patch path at that same commit.
4. Repository and package license evidence, kept as separate fields.
5. The package or Git-source identity documented by the author.
6. Install-time lifecycle scripts, including `preinstall`, `install`,
   `postinstall`, and `prepare`.
7. Material capability signals such as filesystem access, credentials, network,
   subprocesses, browser control, native code, or package management.

Do not submit a topic result, star count, README claim, or default-branch URL
as sufficient proof.

## Status decisions

- **Reviewed:** native manifest-to-patch structure is present at the fixed
  commit. This does not claim runtime compatibility or safety.
- **Held:** the candidate is relevant but has a concrete blocker that a
  maintainer can repair.
- **Excluded:** the fixed source says the project is not an eligible native
  bundle.

## Data changes

Edit `data/plugins.json`, then run:

```bash
npm run generate
npm run check
```

Commit both generated README files with the data change. Do not edit text
between the catalog markers by hand.

## Pull-request checklist

- [ ] Every source URL resolves from the recorded repository and commit.
- [ ] Manifest and patch paths refer to the same commit.
- [ ] Descriptions are factual, short, and available in English and Chinese.
- [ ] Missing or conflicting evidence remains `unknown`.
- [ ] Risk signals describe observed capabilities without implying malicious
      intent.
- [ ] No floating install command has been added as a recommendation.
- [ ] `npm run check` passes.
