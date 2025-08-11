// import type { VercelRequest, VercelResponse } from "@vercel/node";
// import { storage } from "../server/storage.js";

// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   if (req.method === "GET") {
//     try {
//       const stats = await storage.getDonationStats();
//       res.json(stats);
//     } catch (error) {
//       res.status(500).json({ message: "Failed to fetch donation statistics" });
//     }
//   } else {
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
