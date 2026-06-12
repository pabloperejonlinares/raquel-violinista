const speculationRules = {
  prerender: [
    {
      where: { href_matches: "/*" },
      eagerness: "moderate",
    },
  ],
};

export function SpeculationRules() {
  return (
    <script
      type="speculationrules"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(speculationRules) }}
    />
  );
}
