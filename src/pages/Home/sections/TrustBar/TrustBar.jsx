import { Container } from "../../../../components/ui/Container";

export function TrustBar({ companies = [] }) {
  return (
    <section className="pb-6">
      <Container>
        <div className="glow-card overflow-hidden px-5 py-5">
          <p className="mb-4 text-center text-[11px] tracking-[0.28em] text-muted uppercase">Trusted by teams and brands</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {companies.map((company) => (
              <span key={company.id} className="font-display text-sm font-semibold tracking-wide text-ink/70 transition hover:text-cyan">
                {company.name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
