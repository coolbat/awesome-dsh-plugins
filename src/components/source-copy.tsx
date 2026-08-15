"use client";

import { useState } from "react";

export function SourceCopy({
  source,
  label,
  copiedLabel,
}: {
  source: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copySource() {
    await navigator.clipboard.writeText(source);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      className="button button-secondary"
      onClick={copySource}
      type="button"
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
