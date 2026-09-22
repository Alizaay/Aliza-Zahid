import { motion } from "framer-motion";
import logo from "../../../../assets/images/logo-clear.png";
import { usePrefersReducedMotion } from "../../../../hooks/usePrefersReducedMotion";
import { getTechIcon } from "../../../../lib/techIcons";

export function TechOrbit({ technologies = [] }) {
  const reduced = usePrefersReducedMotion();
  const items = technologies;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <div className="absolute inset-10 rounded-full bg-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-[12%] rounded-full border border-dashed border-cyan/20" />
      <div className="pointer-events-none absolute inset-[22%] rounded-full border border-brand/20" />

      <div className="absolute inset-0 grid place-items-center">
        <img src={logo} alt="AlizaDev logo" className="w-[46%] drop-shadow-[0_16px_40px_rgb(0_217_255_/_0.22)]" />
      </div>

      <motion.div
        className="absolute inset-0"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={reduced ? undefined : { duration: 36, repeat: Infinity, ease: "linear" }}
      >
        {items.map((tech, index) => {
          const angle = (index / items.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * 44;
          const y = 50 + Math.sin(angle) * 44;
          const Icon = getTechIcon(tech.id);

          return (
            <span
              key={tech.id}
              className="absolute"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <motion.span
                className="grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-cyan/30 bg-[rgb(7_18_38_/_0.92)] text-cyan shadow-[0_0_18px_rgb(0_217_255_/_0.2)]"
                animate={reduced ? undefined : { rotate: -360 }}
                transition={reduced ? undefined : { duration: 36, repeat: Infinity, ease: "linear" }}
                title={tech.name}
              >
                <Icon size={18} />
              </motion.span>
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}
