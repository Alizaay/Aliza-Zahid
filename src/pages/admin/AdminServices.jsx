import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useSiteData } from "../../hooks/useSiteContent";
import { contentService } from "../../services/content/contentService";
import { getApiError } from "../../services/api/apiError";

export function AdminServices() {
  const { site } = useSiteData();
  const queryClient = useQueryClient();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(site.services.map((item) => ({ ...item, features: item.features.join("\n") })));
  }, [site.services]);

  function update(index, key, value) {
    setItems((current) => current.map((item, i) => (i === index ? { ...item, [key]: value } : item)));
  }

  function add() {
    setItems((current) => [
      ...current,
      { id: `service-${Date.now()}`, title: "New service", icon: "Code", description: "", features: "" },
    ]);
  }

  async function save() {
    try {
      await contentService.saveSlice(
        "services",
        items.map((item) => ({
          ...item,
          features: item.features.split("\n").map((line) => line.trim()).filter(Boolean),
        })),
      );
      await queryClient.invalidateQueries({ queryKey: ["site-content"] });
      toast.success("Services saved.");
    } catch (error) {
      toast.error(getApiError(error, "Could not save services."));
    }
  }

  return (
    <div className="space-y-5">
      {items.map((item, index) => (
        <Card key={item.id} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Title" value={item.title} onChange={(value) => update(index, "title", value)} />
            <Input label="Icon (Code, Smartphone, Cpu, Terminal)" value={item.icon} onChange={(value) => update(index, "icon", value)} />
          </div>
          <Area label="Description" value={item.description} onChange={(value) => update(index, "description", value)} />
          <Area label="Features (one per line)" value={item.features} onChange={(value) => update(index, "features", value)} />
          <Button variant="danger" className="justify-self-start" onClick={() => setItems((current) => current.filter((_, i) => i !== index))}>
            Remove
          </Button>
        </Card>
      ))}
      <div className="flex gap-3">
        <Button onClick={add} variant="secondary">Add service</Button>
        <Button onClick={save}>Save services</Button>
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

function Area({ label, value, onChange }) {
  return (
    <div>
      <label className="label">{label}</label>
      <textarea className="field" rows={3} value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}
