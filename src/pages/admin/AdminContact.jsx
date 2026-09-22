import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useSiteData } from "../../hooks/useSiteContent";
import { contentService } from "../../services/content/contentService";
import { getApiError } from "../../services/api/apiError";

export function AdminContact() {
  const { site } = useSiteData();
  const queryClient = useQueryClient();
  const [form, setForm] = useState({
    ...site.contact,
    emails: site.contact.emails.join("\n"),
  });
  const [socials, setSocials] = useState(site.socialLinks);

  useEffect(() => {
    setForm({ ...site.contact, emails: site.contact.emails.join("\n") });
    setSocials(site.socialLinks);
  }, [site.contact, site.socialLinks]);

  async function save() {
    try {
      await contentService.saveSlice("contact", {
        ...form,
        emails: form.emails.split("\n").map((item) => item.trim()).filter(Boolean),
      });
      await contentService.saveSlice("socialLinks", socials);
      await queryClient.invalidateQueries({ queryKey: ["site-content"] });
      toast.success("Contact details saved.");
    } catch (error) {
      toast.error(getApiError(error, "Could not save contact."));
    }
  }

  return (
    <Card className="grid gap-5">
      <Input label="Title" value={form.title} onChange={(value) => setForm((current) => ({ ...current, title: value }))} />
      <Area label="Description" value={form.description} onChange={(value) => setForm((current) => ({ ...current, description: value }))} />
      <div className="grid gap-5 md:grid-cols-2">
        <Input label="Phone" value={form.phone} onChange={(value) => setForm((current) => ({ ...current, phone: value }))} />
        <Input label="WhatsApp URL" value={form.whatsapp} onChange={(value) => setForm((current) => ({ ...current, whatsapp: value }))} />
      </div>
      <Area label="Emails (one per line)" value={form.emails} onChange={(value) => setForm((current) => ({ ...current, emails: value }))} />
      <Input label="Location" value={form.location} onChange={(value) => setForm((current) => ({ ...current, location: value }))} />
      <Input label="Availability" value={form.availability} onChange={(value) => setForm((current) => ({ ...current, availability: value }))} />
      <div className="space-y-3">
        <p className="label">Social links</p>
        {socials.map((link, index) => (
          <div key={link.id} className="grid gap-3 md:grid-cols-2">
            <input className="field" value={link.label} onChange={(event) => setSocials((current) => current.map((item, i) => (i === index ? { ...item, label: event.target.value } : item)))} />
            <input className="field" value={link.href} onChange={(event) => setSocials((current) => current.map((item, i) => (i === index ? { ...item, href: event.target.value } : item)))} />
          </div>
        ))}
      </div>
      <Button onClick={save}>Save contact</Button>
    </Card>
  );
}

function Input({ label, value, onChange }) {
  return (
    <div>
      <label className="label">{label}</label>
      <input className="field" value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}

function Area({ label, value, onChange }) {
  return (
    <div>
      <label className="label">{label}</label>
      <textarea className="field" rows={4} value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}
