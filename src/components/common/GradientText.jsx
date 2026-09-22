export function GradientText({ as: Tag = "span", children, className = "" }) {
  return <Tag className={`gradient-text ${className}`}>{children}</Tag>;
}
