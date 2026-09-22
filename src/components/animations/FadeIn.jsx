import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { fadeIn } from "../../lib/motion";

export function FadeIn({ children, className, delay = 0 }) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} transition={{ delay }}>
      {children}
    </motion.div>
  );
}
