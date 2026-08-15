export function StructuredData({ value }: { value: object }) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(value).replace(/</g, "\\u003c"),
      }}
      type="application/ld+json"
    />
  );
}
