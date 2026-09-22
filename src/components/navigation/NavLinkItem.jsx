import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";

export function NavLinkItem({ href, children, onClick, active }) {
  const classes = cn(
    "relative text-sm font-medium tracking-wide transition",
    active ? "text-cyan after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-cyan after:shadow-[0_0_8px_#00d9ff]" : "text-muted hover:text-ink",
  );

  if (href.startsWith("/#") || href.startsWith("#")) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <NavLink to={href} className={({ isActive }) => cn(classes, isActive && "text-cyan")} onClick={onClick}>
      {children}
    </NavLink>
  );
}
