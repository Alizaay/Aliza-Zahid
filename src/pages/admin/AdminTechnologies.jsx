import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useSiteData } from "../../hooks/useSiteContent";
import { contentService } from "../../services/content/contentService";
import { getApiError } from "../../services/api/apiError";
import { ImageUploader } from "./ImageUploader";

export function AdminTechnologies() {
  const { site } = useSiteData();
  const queryClient = useQueryClient();
  const [items, setItems] = useState([]);

  useEffect(() => setItems(site.technologies), [site.technologies]);

  function update(index, key, value) {
    setItems((current) => current.map((item, i) => (i === index ? { ...item, [key]: value } : item)));
  }

  async function save() {
    try {
      await contentService.saveSlice("technologies", items);
      await queryClient.invalidateQueries({ queryKey: ["site-content"] });
      toast.success("Technologies saved.");
    } catch (error) {
      toast.error(getApiError(error, "Could not save technologies."));
    }
  }

  return (
    <div className="space-y-5">
      {items.map((item, index) => (
        <Card key={item.id} className="grid gap-4 md:grid-cols-[160px_1fr]">
          <ImageUploader label="Logo" value={item.logo} onChange={(value) => update(index, "logo", value)} />
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Name" value={item.name} onChange={(value) => update(index, "name", value)} />
            <Input label="Category" value={item.category} onChange={(value) => update(index, "category", value)} />
            <Input label="Experience" value={item.experience} onChange={(value) => update(index, "experience", value)} />
            <div className="flex items-end">
              <Button variant="danger" onClick={() => setItems((current) => current.filter((_, i) => i !== index))}>
                Remove
              </Button>
            </div>
          </div>
        </Card>
      ))}
      <div className="flex gap-3">
        <Button
          variant="secondary"
          onClick={() =>
            setItems((current) => [...current, { id: `tech-${Date.now()}`, name: "New tech", category: "Frontend", logo: "", experience: "Working" }])
          }
        >
          Add technology
        </Button>
        <Button onClick={save}>Save technologies</Button>
      </div>
    </div>
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
