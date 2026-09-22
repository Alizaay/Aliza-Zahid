import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { slideUp } from "../../lib/motion";

export function SlideUp({ children, className, delay = 0 }) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={slideUp} transition={{ delay }}>
      {children}
    </motion.div>
  );
}
