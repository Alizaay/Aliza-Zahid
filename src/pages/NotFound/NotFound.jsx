import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { usePageTitle } from "../../hooks/usePageTitle";
import { routePaths } from "../../routes/routePaths";

export function NotFound() {
  usePageTitle("Not found");
  return (
    <section className="flex min-h-[70vh] items-center pt-24">
      <Container className="text-center">
        <p className="mb-3 font-display text-xs tracking-[0.28em] text-cyan uppercase">404</p>
        <h1 className="font-display text-4xl font-semibold">This route is not on the map.</h1>
        <Button to={routePaths.home} className="mt-8">
          Back to home
        </Button>
      </Container>
    </section>
  );
}
