// pages/api/gallery-by-tag.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";

type CloudinaryResource = {
    public_id: string;
    secure_url: string;
    tags?: string[];
    context?: Record<string, never>;
};

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { tag } = req.query;
    const folder = "PixelBoardsProject";
    let expression = `folder:${folder}`;

    const tagMap: Record<string, string> = {
        "Portraits": "LED",
        "Weddings": "ACP",
        "Commercial": "Acrylic",
        "Events": "Fabrication"
    };

    let cloudinaryTag = tag as string;
    if (cloudinaryTag && tagMap[cloudinaryTag]) {
        cloudinaryTag = tagMap[cloudinaryTag];
    }

    if (cloudinaryTag && cloudinaryTag !== "All") {
        expression += ` AND tags=${cloudinaryTag}`;
    }

    try {
        const results = await cloudinary.search
            .expression(expression)
            .sort_by("created_at", "desc")
            .max_results(40)
            .execute();

        const resources = (results.resources as CloudinaryResource[]).map((img) => ({
            public_id: img.public_id,
            secure_url: img.secure_url,
            tags: img.tags,
            context: img.context,
        }));

        res.status(200).json({ resources });
    } catch (err) {
        res.status(500).json({
            error:
                err instanceof Error
                    ? err.message
                    : "Failed to fetch gallery images.",
        });
    }
}
