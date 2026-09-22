export function ProjectGallery({ screenshots = [], title }) {
  if (!screenshots.length) return null;
  return (
    <div className="mt-10">
      <h2 className="font-display text-2xl font-semibold">Gallery</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {screenshots.map((src) => (
          <img key={src} src={src} alt={`${title} screenshot`} className="max-h-72 w-full rounded-2xl border border-line object-cover" />
        ))}
      </div>
    </div>
  );
}
