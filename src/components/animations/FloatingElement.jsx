export function FloatingElement({ children, className = "", delay = false }) {
  return <div className={`${delay ? "animate-float-delayed" : "animate-float"} ${className}`}>{children}</div>;
}
