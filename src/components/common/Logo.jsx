import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-clear.png";
import { routePaths } from "../../routes/routePaths";

export function Logo({ compact = false }) {
  return (
    <Link to={routePaths.home} className="inline-flex items-center gap-3" aria-label="AlizaDev home">
      <img
        src={logo}
        alt=""
        className="h-12 w-12 object-contain drop-shadow-[0_0_18px_rgb(20_124_255_/_0.4)]"
      />
      {!compact && (
        <span className="leading-tight">
          <span className="block font-display text-sm font-semibold tracking-wide">AlizaDev</span>
          <span className="block text-[11px] tracking-[0.18em] text-muted uppercase">Portfolio</span>
        </span>
      )}
    </Link>
  );
}
