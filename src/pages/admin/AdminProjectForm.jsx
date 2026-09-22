import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useProjectMutations } from "../../hooks/useProjects";
import { useSiteData } from "../../hooks/useSiteContent";
import { routePaths } from "../../routes/routePaths";
import { getApiError } from "../../services/api/apiError";
import { ImageUploader } from "./ImageUploader";

const blank = {
  title: "",
  slug: "",
  category: "",
  status: "completed",
  featured: false,
  year: new Date().getFullYear(),
  summary: "",
  description: "",
  features: "",
  technologies: "",
  thumbnail: "",
  hero: "",
  screenshots: [],
  liveUrl: "",
  githubUrl: "",
};

export function AdminProjectForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { site } = useSiteData();
  const { create, update } = useProjectMutations();
  const [form, setForm] = useState(blank);

  useEffect(() => {
    if (!id) {
      setForm(blank);
      return;
    }
    const current = site.projects.find((item) => item.id === id);
    if (current) {
      setForm({
        ...current,
        features: current.features.join("\n"),
        technologies: current.technologies.join(", "),
        screenshots: current.screenshots || [],
      });
    }
  }, [id, site.projects]);

  function setField(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    const payload = {
      ...form,
      year: Number(form.year),
      features: form.features.split("\n").map((item) => item.trim()).filter(Boolean),
      technologies: form.technologies.split(",").map((item) => item.trim()).filter(Boolean),
    };
    try {
      if (id) await update.mutateAsync({ id, payload });
      else await create.mutateAsync(payload);
      toast.success(id ? "Project updated." : "Project created.");
      navigate(routePaths.adminProjects);
    } catch (error) {
      toast.error(getApiError(error, "Could not save project."));
    }
  }

  return (
    <Card>
      <h2 className="mb-6 font-display text-2xl font-semibold">{id ? "Edit project" : "New project"}</h2>
      <form onSubmit={onSubmit} className="grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Title" value={form.title} onChange={(value) => setField("title", value)} />
          <Field label="Slug" value={form.slug} onChange={(value) => setField("slug", value)} />
          <Field label="Category" value={form.category} onChange={(value) => setField("category", value)} />
          <Field label="Year" value={form.year} onChange={(value) => setField("year", value)} />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="label">Status</label>
            <select className="field" value={form.status} onChange={(event) => setField("status", event.target.value)}>
              <option value="completed">Completed</option>
              <option value="in-development">In development</option>
            </select>
          </div>
          <label className="flex items-end gap-3 pb-3 text-sm text-muted">
            <input type="checkbox" checked={form.featured} onChange={(event) => setField("featured", event.target.checked)} />
            Featured on homepage
          </label>
        </div>
        <Area label="Summary" value={form.summary} onChange={(value) => setField("summary", value)} />
        <Area label="Description" value={form.description} onChange={(value) => setField("description", value)} rows={6} />
        <Area label="Features (one per line)" value={form.features} onChange={(value) => setField("features", value)} />
        <Field label="Technologies (comma separated)" value={form.technologies} onChange={(value) => setField("technologies", value)} />
        <div className="grid gap-5 md:grid-cols-2">
          <ImageUploader label="Thumbnail" value={form.thumbnail} onChange={(value) => setField("thumbnail", value)} />
          <ImageUploader label="Hero image" value={form.hero} onChange={(value) => setField("hero", value)} />
        </div>
        <div>
          <ImageUploader
            label="Add screenshot"
            value=""
            onChange={() => {}}
            onUploaded={(file) => setField("screenshots", [...form.screenshots, file.url])}
          />
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {form.screenshots.map((src) => (
              <div key={src} className="overflow-hidden rounded-xl border border-line">
                <img src={src} alt="" className="h-28 w-full object-cover" />
                <button type="button" className="w-full py-2 text-xs text-muted hover:text-red-300" onClick={() => setField("screenshots", form.screenshots.filter((item) => item !== src))}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Live URL" value={form.liveUrl} onChange={(value) => setField("liveUrl", value)} />
          <Field label="GitHub URL" value={form.githubUrl} onChange={(value) => setField("githubUrl", value)} />
        </div>
        <div className="flex gap-3">
          <Button type="submit">Save project</Button>
          <Button to={routePaths.adminProjects} variant="secondary">Cancel</Button>
        </div>
      </form>
    </Card>
  );
}

function Field({ label, value, onChange }) {
  return (
    <div>
      <label className="label">{label}</label>
      <input className="field" value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}

function Area({ label, value, onChange, rows = 4 }) {
  return (
    <div>
      <label className="label">{label}</label>
      <textarea className="field" rows={rows} value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}
