import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { scaleIn } from "../../lib/motion";

export function ScaleIn({ children, className }) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}>
      {children}
    </motion.div>
  );
}
