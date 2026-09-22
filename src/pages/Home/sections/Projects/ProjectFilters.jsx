export function ProjectFilters({ value, onChange }) {
  const options = ["all", "completed", "in-development"];

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase ${
            value === option ? "bg-brand text-ink" : "border border-line text-muted"
          }`}
        >
          {option.replace("-", " ")}
        </button>
      ))}
    </div>
  );
}
