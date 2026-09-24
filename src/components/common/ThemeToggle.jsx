import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useTheme } from "../../context/ThemeProvider";
import { IconButton } from "../ui/IconButton";

export function ThemeToggle({ className = "" }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <IconButton
      className={className}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggleTheme}
    >
      {isDark ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
    </IconButton>
  );
}
