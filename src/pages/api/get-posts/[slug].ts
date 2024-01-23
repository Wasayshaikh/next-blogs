// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  status: string | number | null,
  data: object | string | null,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method == "GET"){
        const {slug} = req.query;
        fs.readFile(`blog_data/${slug}.json`, "utf-8",(err, data)=>{
           if(err){
            return res.status(404).json({ status: 404, data:"file not found" })
           }
           else{
            return res.status(200).json({ status : 200, data: JSON.parse(data) })
           }
    
        })
      
    }
    else{ 
      return res.status(405).json({ status : 405, data: "method not supported" })
    }
   

    
}
