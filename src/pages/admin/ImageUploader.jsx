import toast from "react-hot-toast";
import { mediaService } from "../../services/media/mediaService";
import { getApiError } from "../../services/api/apiError";

export function ImageUploader({ label, value, onChange, onUploaded }) {
  async function handleFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const uploaded = await mediaService.upload(file);
      onChange(uploaded.url);
      onUploaded?.(uploaded);
      toast.success("Image uploaded.");
    } catch (error) {
      toast.error(getApiError(error, "Upload failed."));
    } finally {
      event.target.value = "";
    }
  }

  return (
    <div>
      <label className="label">{label}</label>
      {value && (
        <img src={value} alt="" className="mb-3 h-28 w-full rounded-xl border border-line object-cover" />
      )}
      <input type="file" accept="image/*" onChange={handleFile} className="field" />
      {value && (
        <button type="button" className="mt-2 text-xs text-muted hover:text-red-300" onClick={() => onChange("")}>
          Remove image
        </button>
      )}
    </div>
  );
}
