import { useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { mediaService } from "../../services/media/mediaService";
import { getApiError } from "../../services/api/apiError";
import { ImageUploader } from "./ImageUploader";

export function AdminMedia() {
  const queryClient = useQueryClient();
  const { data: files = [] } = useQuery({
    queryKey: ["media"],
    queryFn: mediaService.list,
  });

  async function remove(filename) {
    if (!window.confirm("Delete this file?")) return;
    try {
      await mediaService.remove(filename);
      await queryClient.invalidateQueries({ queryKey: ["media"] });
      toast.success("File deleted.");
    } catch (error) {
      toast.error(getApiError(error, "Could not delete file."));
    }
  }

  return (
    <div>
      <Card className="mb-6">
        <ImageUploader
          label="Upload image"
          value=""
          onChange={() => {}}
          onUploaded={() => queryClient.invalidateQueries({ queryKey: ["media"] })}
        />
        <p className="mt-3 text-sm text-muted">Upload profile photos, project thumbnails, hero images, screenshots, and technology logos. Then attach them from the relevant editor.</p>
      </Card>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {files.map((file) => (
          <Card key={file.filename} className="p-3">
            <img src={file.url} alt={file.filename} className="h-36 w-full rounded-xl object-cover" />
            <p className="mt-3 truncate text-xs text-muted">{file.url}</p>
            <div className="mt-3 flex gap-2">
              <Button
                variant="secondary"
                className="min-h-9 px-3 text-xs"
                onClick={() => {
                  navigator.clipboard.writeText(file.url);
                  toast.success("URL copied.");
                }}
              >
                Copy URL
              </Button>
              <Button variant="danger" className="min-h-9 px-3 text-xs" onClick={() => remove(file.filename)}>
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
