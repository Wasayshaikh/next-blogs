// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs/promises'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  status: string | number | null,
  data: object | string | null,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "GET") {
    let blogs = [];
    const { slug } = req.query;
    let files = await fs.readdir('blog_data');
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      const data = await fs.readFile("blog_data/" + element, "utf-8")
      blogs.push(JSON.parse(data));

    }
    return res.status(200).json({ data: blogs, status: 200 })
  }
  return res.status(405).json({ data: "method not supported", status: 405 })

}
