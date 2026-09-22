import { HiMenuAlt3, HiX } from "react-icons/hi";
import { IconButton } from "../ui/IconButton";

export function MobileMenuButton({ open, onToggle }) {
  return (
    <IconButton className="lg:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={onToggle}>
      {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
    </IconButton>
  );
}
