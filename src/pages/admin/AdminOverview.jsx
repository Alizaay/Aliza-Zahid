import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useSiteData } from "../../hooks/useSiteContent";
import { routePaths } from "../../routes/routePaths";
import { contentService } from "../../services/content/contentService";
import { getApiError } from "../../services/api/apiError";

export function AdminOverview() {
  const { site } = useSiteData();
  const queryClient = useQueryClient();
  const cards = [
    { label: "Projects", value: site.projects.length, to: routePaths.adminProjects },
    { label: "Services", value: site.services.length, to: routePaths.adminServices },
    { label: "Technologies", value: site.technologies.length, to: routePaths.adminTechnologies },
    { label: "Featured", value: site.projects.filter((item) => item.featured).length, to: routePaths.adminProjects },
  ];

  async function reset() {
    if (!window.confirm("Reset all dashboard content back to the original seed?")) return;
    try {
      await contentService.reset();
      await queryClient.invalidateQueries({ queryKey: ["site-content"] });
      toast.success("Content reset to seed.");
    } catch (error) {
      toast.error(getApiError(error, "Reset failed."));
    }
  }

  return (
    <div>
      <p className="text-muted">Upload images and edit live portfolio data. Changes appear on the public site immediately.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.label} as={Link} to={card.to} className="block">
            <p className="text-xs tracking-[0.18em] text-muted uppercase">{card.label}</p>
            <p className="mt-3 font-display text-3xl font-semibold text-cyan">{card.value}</p>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button to={routePaths.adminProjectNew}>Add project</Button>
        <Button to={routePaths.adminMedia} variant="secondary">
          Open media library
        </Button>
        <Button variant="ghost" onClick={reset}>
          Reset to seed
        </Button>
      </div>
    </div>
  );
}
