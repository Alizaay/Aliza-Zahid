import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import { externalLinkProps } from "../../utils/externalLink";

const variants = {
  primary:
    "bg-brand text-ink shadow-[0_0_22px_rgb(20_124_255_/_0.32)] hover:bg-[#2b8cff]",
  secondary: "border border-brand/70 bg-transparent text-ink hover:border-cyan hover:text-cyan",
  ghost: "bg-panel-elevated text-ink hover:text-cyan",
  danger: "bg-red-500/15 text-red-200 hover:bg-red-500/25",
};

export function Button({
  href,
  to,
  children,
  variant = "primary",
  className,
  type = "button",
  ...props
}) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-wide transition duration-300 hover:-translate-y-0.5 disabled:opacity-50",
    variants[variant],
    className,
  );

  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>;
  if (href) {
    return (
      <a href={href} className={classes} {...externalLinkProps(href)} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
