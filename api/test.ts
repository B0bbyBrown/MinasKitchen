import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.json({ message: "API is working!", timestamp: new Date().toISOString() });
}
