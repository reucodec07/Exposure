// src/pages/api/upload-image.ts
import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const form = formidable({});
        const [fields, files] = await form.parse(req);

        const file = Array.isArray(files.file) ? files.file[0] : files.file;

        if (!file) {
            return res.status(400).json({ error: 'No file provided' });
        }

        const result = await cloudinary.uploader.upload(file.filepath, {
            folder: 'PixelImageGoa/Gallery',
            tags: Array.isArray(fields.tags) ? fields.tags : [fields.tags].filter(Boolean),
            context: {
                custom: {
                    title: Array.isArray(fields.title) ? fields.title[0] : fields.title,
                    description: Array.isArray(fields.description) ? fields.description[0] : fields.description,
                    client: Array.isArray(fields.client) ? fields.client[0] : fields.client,
                }
            }
        });

        res.status(200).json({ result });
    } catch (e) {
        // Properly handle unknown error type
        const errorMessage = e instanceof Error ? e.message : 'Failed to upload';
        return res.status(500).json({ error: errorMessage });
    }
}