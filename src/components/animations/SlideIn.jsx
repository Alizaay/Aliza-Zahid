import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { slideIn } from "../../lib/motion";

export function SlideIn({ children, className }) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideIn}>
      {children}
    </motion.div>
  );
}
