// src/pages/api/gallery.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';

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
        const resources = await cloudinary.search
            .expression('folder:PixelImageGoa/Gallery')
            .sort_by('created_at', 'desc')
            .max_results(30)
            .execute();

        // Only pass needed fields to frontend
        res.status(200).json({
            resources: resources.resources.map((img: any) => ({
                public_id: img.public_id,
                secure_url: img.secure_url,
            })),
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch images' });
    }
}
