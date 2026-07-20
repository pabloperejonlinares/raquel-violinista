type JsonLdProps = Readonly<{
  data: Record<string, unknown> | Record<string, unknown>[];
}>;

/**
 * Safari throws on bare JSON-LD arrays (`r["@context"].toLowerCase`).
 * Prefer a single root object with `@graph` (also Google's recommended shape).
 */
function toJsonLdDocument(
  data: Record<string, unknown> | Record<string, unknown>[],
): Record<string, unknown> {
  if (!Array.isArray(data)) {
    return data;
  }

  return {
    "@context": "https://schema.org",
    "@graph": data.map(({ ["@context"]: _context, ...node }) => node),
  };
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(toJsonLdDocument(data)),
      }}
    />
  );
}
