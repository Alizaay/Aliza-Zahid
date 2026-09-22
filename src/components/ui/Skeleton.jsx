export function Skeleton({ className = "h-6 w-full" }) {
  return <div className={`animate-pulse rounded-lg bg-panel-elevated ${className}`} />;
}
