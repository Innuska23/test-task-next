import type { NextApiRequest, NextApiResponse } from 'next'

import { promises as fs } from "node:fs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const file = await fs.readFile(process.cwd() + '/src/app/data/quizzes.json', 'utf8');
            const data = JSON.parse(file);

            return res.status(200).json({ data });
        } catch (e) {
            return res.status(500).json({
                message: 'Something went wrong'
            })
        }
    } else {
        return res.status(400).json({
            message: 'Something went wrong'
        })
    }

}