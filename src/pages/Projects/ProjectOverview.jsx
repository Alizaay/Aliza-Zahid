export function ProjectOverview({ project }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold">Overview</h2>
      <p className="mt-4 leading-7 text-muted">{project.description}</p>
    </div>
  );
}
