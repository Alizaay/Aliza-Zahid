import { motion } from "framer-motion";
import { stagger } from "../../lib/motion";

export function StaggerContainer({ children, className }) {
  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
      {children}
    </motion.div>
  );
}
