import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useSiteData } from "../../hooks/useSiteContent";
import { getApiError } from "../../services/api/apiError";
import { contentService } from "../../services/content/contentService";

const blankRole = () => ({
  id: `exp-${Date.now()}`,
  role: "",
  company: "",
  period: "",
  location: "",
  detail: "",
});

const blankStudy = () => ({
  id: `edu-${Date.now()}`,
  degree: "",
  institution: "",
  period: "",
  location: "",
  detail: "",
});

export function AdminExperience() {
  const { site } = useSiteData();
  const queryClient = useQueryClient();
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    setExperience(site.profile.experience || []);
    setEducation(site.profile.education || []);
  }, [site.profile.education, site.profile.experience]);

  async function save() {
    try {
      await contentService.saveSlice("profile", {
        ...site.profile,
        experience,
        education,
      });
      await queryClient.invalidateQueries({ queryKey: ["site-content"] });
      toast.success("Experience and education saved.");
    } catch (error) {
      toast.error(getApiError(error, "Could not save this section."));
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4 font-display text-2xl font-semibold">Experience</h2>
        <div className="space-y-4">
          {experience.map((item, index) => (
            <Card key={item.id || index} className="grid gap-4 md:grid-cols-2">
              <Input label="Role" value={item.role} onChange={(value) => update(setExperience, index, "role", value)} />
              <Input label="Company" value={item.company} onChange={(value) => update(setExperience, index, "company", value)} />
              <Input label="Period" value={item.period} onChange={(value) => update(setExperience, index, "period", value)} />
              <Input label="Location" value={item.location} onChange={(value) => update(setExperience, index, "location", value)} />
              <div className="md:col-span-2">
                <Area label="Detail" value={item.detail} onChange={(value) => update(setExperience, index, "detail", value)} />
              </div>
              <Button variant="danger" onClick={() => setExperience((current) => current.filter((_, i) => i !== index))}>
                Remove role
              </Button>
            </Card>
          ))}
        </div>
        <Button variant="secondary" className="mt-4" onClick={() => setExperience((current) => [...current, blankRole()])}>
          Add role
        </Button>
      </div>

      <div>
        <h2 className="mb-4 font-display text-2xl font-semibold">Education</h2>
        <div className="space-y-4">
          {education.map((item, index) => (
            <Card key={item.id || index} className="grid gap-4 md:grid-cols-2">
              <Input label="Degree" value={item.degree} onChange={(value) => update(setEducation, index, "degree", value)} />
              <Input label="Institution" value={item.institution} onChange={(value) => update(setEducation, index, "institution", value)} />
              <Input label="Period" value={item.period} onChange={(value) => update(setEducation, index, "period", value)} />
              <Input label="Location" value={item.location} onChange={(value) => update(setEducation, index, "location", value)} />
              <div className="md:col-span-2">
                <Area label="Detail" value={item.detail} onChange={(value) => update(setEducation, index, "detail", value)} />
              </div>
              <Button variant="danger" onClick={() => setEducation((current) => current.filter((_, i) => i !== index))}>
                Remove study
              </Button>
            </Card>
          ))}
        </div>
        <Button variant="secondary" className="mt-4" onClick={() => setEducation((current) => [...current, blankStudy()])}>
          Add education
        </Button>
      </div>

      <Button onClick={save}>Save experience & education</Button>
    </div>
  );
}

function update(setter, index, key, value) {
  setter((current) => current.map((item, i) => (i === index ? { ...item, [key]: value } : item)));
}

function Input({ label, value, onChange }) {
  return (
    <div>
      <label className="label">{label}</label>
      <input className="field" value={value || ""} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}

function Area({ label, value, onChange }) {
  return (
    <div>
      <label className="label">{label}</label>
      <textarea className="field" rows={3} value={value || ""} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}
