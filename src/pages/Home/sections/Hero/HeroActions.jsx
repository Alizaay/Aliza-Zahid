import { Button } from "../../../../components/ui/Button";

export function HeroActions() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Button href="/#projects">View Projects</Button>
      <Button href="/#contact" variant="secondary">
        Contact Me
      </Button>
    </div>
  );
}
