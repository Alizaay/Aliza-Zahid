export function GlowEffect({ className = "" }) {
  return <div className={`pointer-events-none absolute rounded-full bg-brand/15 blur-3xl ${className}`} />;
}
