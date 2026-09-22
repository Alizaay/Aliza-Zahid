import { cn } from "../../utils/cn";
import { Container } from "../ui/Container";

export function Section({ id, className, children }) {
  return (
    <section id={id} className={cn("section-space", className)}>
      <Container>{children}</Container>
    </section>
  );
}
