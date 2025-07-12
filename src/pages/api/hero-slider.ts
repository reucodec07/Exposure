import type { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Fetch up to 8 images from HeroSlider folder
    const resources = await cloudinary.search
      .expression("folder:PixelImageGoa/Gallery")
      .sort_by("created_at", "desc")
      .max_results(8)
      .execute();

    interface CloudinaryResource {
      public_id: string;
      secure_url: string;
      // Add other known properties here if needed, or remove the index signature
      // For example:
      // format?: string;
      // width?: number;
      // height?: number;
    }

    interface CloudinarySearchResponse {
      resources: CloudinaryResource[];
      // Add other known properties here if needed, for example:
      // total_count?: number;
      // next_cursor?: string;
    }

    interface HeroSliderResponse {
      resources: {
        public_id: string;
        secure_url: string;
      }[];
    }

    const cloudinaryResources = (resources as CloudinarySearchResponse)
      .resources;

    res.status(200).json({
      resources: cloudinaryResources.map((img: CloudinaryResource) => ({
        public_id: img.public_id,
        secure_url: img.secure_url,
      })),
    } as HeroSliderResponse);
  } catch (err) {
    res.status(500).json({ error: err || "Failed to fetch hero images" });
  }
}
