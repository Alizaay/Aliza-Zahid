import { cn } from "../../utils/cn";

export function IconButton({ className, children, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        "grid h-11 w-11 place-items-center rounded-xl border border-line text-ink hover:border-cyan hover:text-cyan",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
