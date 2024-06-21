// NOT WORKING YET, MAYBE ITS OUTDATED, will check back on this

// This page is used for instance revalidation after a blog updata
// Again its not a required procedure for the website to work

// http://localhost:3000/api/revalidate?path=/&secret=71401024ead8f50ee7a793da5a154a0962ecdacd

import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ Message: `Invalide token` });
  }

  const path = req.query.path as string;
  await res.revalidate(path);
  return res.json({ Mesage: `Revalidated true` });
}
export default handler;
