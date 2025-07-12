"use client";
import { useState } from "react";

const TAGS = [
  "LED",
  "Glow",
  "Fabrication",
  "Frontlite",
  "Foam",
  "ACP",
  "Hoarding",
  "Acrylic",
  "Scrolling",
];

export default function AdminUploader({ onUpload }: { onUpload?: () => void }) {
  const [files, setFiles] = useState<File[]>([]);
  const [tag, setTag] = useState<string>(TAGS[0]);
  const [status, setStatus] = useState("");
  const [uploading, setUploading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (files.length === 0) {
      setStatus("Please select at least one image.");
      return;
    }
    setUploading(true);
    setStatus("");

    let uploadedCount = 0;
    for (const file of files) {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("tag", tag);

      const res = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.url) {
        uploadedCount++;
      } else {
        setStatus(
          `Error uploading one image: ${result.error || "Upload failed."}`
        );
      }
    }

    setUploading(false);
    if (uploadedCount === files.length) {
      setStatus(`✅ Uploaded ${uploadedCount} image(s) successfully!`);
      setFiles([]);
      if (onUpload) onUpload();
    } else {
      setStatus(`Uploaded ${uploadedCount} of ${files.length} image(s).`);
    }
  }

  function handleFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files || []);
    setFiles(selected.slice(0, 5)); // Limit to 5 files
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-8">
      <label className="block text-left font-medium">
        Gallery Tag/Category:
      </label>
      <select
        className="border px-3 py-2 rounded w-full"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      >
        {TAGS.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <label className="block text-left font-medium mt-2">Image File(s):</label>
      <input
        type="file"
        accept="image/*"
        multiple
        className="w-full"
        onChange={handleFilesChange}
        required
      />
      <div className="text-sm text-gray-600">{files.length}/5 selected</div>
      <button
        type="submit"
        disabled={uploading}
        className="w-full bg-blue-700 text-white font-semibold py-2 rounded hover:bg-blue-800 transition"
      >
        {uploading ? "Uploading..." : "Upload Image(s)"}
      </button>
      {status && <div className="text-center text-sm mt-2">{status}</div>}
    </form>
  );
}
