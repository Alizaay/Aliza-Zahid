export function ProjectFeatures({ features = [] }) {
  if (!features.length) return null;
  return (
    <div className="mt-8">
      <h2 className="font-display text-2xl font-semibold">Features</h2>
      <ul className="mt-4 space-y-2 text-muted">
        {features.map((feature) => (
          <li key={feature}>• {feature}</li>
        ))}
      </ul>
    </div>
  );
}
