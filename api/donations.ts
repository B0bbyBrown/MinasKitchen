import type { VercelRequest, VercelResponse } from "@vercel/node";
import { storage } from "../server/storage.js";
import { insertDonationSchema } from "../shared/schema.js";
import { ZodError } from "zod";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    try {
      const donationData = insertDonationSchema.parse(req.body);
      const donation = await storage.createDonation(donationData);
      res.json(donation);
    } catch (error) {
      if (error instanceof ZodError) {
        res
          .status(400)
          .json({ message: "Invalid donation data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to process donation" });
      }
    }
  } else if (req.method === "GET") {
    try {
      const donations = await storage.getDonations();
      res.json(donations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch donations" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
