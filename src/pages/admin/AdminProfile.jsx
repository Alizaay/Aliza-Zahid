import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useSiteData } from "../../hooks/useSiteContent";
import { contentService } from "../../services/content/contentService";
import { getApiError } from "../../services/api/apiError";
import { ImageUploader } from "./ImageUploader";

const empty = {
  name: "",
  brand: "",
  roles: "",
  headline: "",
  description: "",
  aboutTitle: "",
  biography: "",
  positioning: "",
  image: "",
  imageAlt: "",
};

export function AdminProfile() {
  const { site } = useSiteData();
  const queryClient = useQueryClient();
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const profile = site.profile;
    setForm({
      ...profile,
      roles: profile.roles.join(", "),
      biography: profile.biography.join("\n\n"),
    });
  }, [site.profile]);

  function setField(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setSaving(true);
    try {
      await contentService.saveSlice("profile", {
        ...site.profile,
        ...form,
        roles: form.roles.split(",").map((item) => item.trim()).filter(Boolean),
        biography: form.biography.split(/\n\s*\n/).map((item) => item.trim()).filter(Boolean),
      });
      await queryClient.invalidateQueries({ queryKey: ["site-content"] });
      toast.success("Profile saved.");
    } catch (error) {
      toast.error(getApiError(error, "Could not save profile."));
    } finally {
      setSaving(false);
    }
  }

  return (
    <Card>
      <form onSubmit={onSubmit} className="grid gap-5">
        <ImageUploader label="Profile photo" value={form.image} onChange={(value) => setField("image", value)} />
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Name" value={form.name} onChange={(value) => setField("name", value)} />
          <Field label="Brand" value={form.brand} onChange={(value) => setField("brand", value)} />
        </div>
        <Field label="Roles (comma separated)" value={form.roles} onChange={(value) => setField("roles", value)} />
        <Field label="Headline" value={form.headline} onChange={(value) => setField("headline", value)} />
        <Area label="Short description" value={form.description} onChange={(value) => setField("description", value)} />
        <Field label="About title" value={form.aboutTitle} onChange={(value) => setField("aboutTitle", value)} />
        <Area label="Biography (separate paragraphs with a blank line)" value={form.biography} onChange={(value) => setField("biography", value)} rows={8} />
        <Area label="Positioning" value={form.positioning} onChange={(value) => setField("positioning", value)} />
        <Button type="submit" disabled={saving}>{saving ? "Saving..." : "Save profile"}</Button>
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
