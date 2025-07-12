import type { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";
import formidable from "formidable";
import fs from "fs";

// Disable Next.js body parsing to handle multipart/form-data
export const config = { api: { bodyParser: false } };

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

type Data = { url?: string; error?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err || !files.image)
      return res.status(400).json({ error: "Invalid upload" });

    const file = Array.isArray(files.image) ? files.image[0] : files.image;
    const tag = typeof fields.tag === "string" ? fields.tag : "Other";

    try {
      const upload = await cloudinary.uploader.upload(file.filepath, {
        folder: "PixelImageGoa/Gallery",
        tags: [tag],
        resource_type: "image",
      });
      fs.unlinkSync(file.filepath); // Clean up
      return res.status(200).json({ url: upload.secure_url });
    } catch (e) {
      return res
        .status(500)
        .json({ error: (e as Error).message || "Failed to upload" });
    }
  });
}
