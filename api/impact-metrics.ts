import type { VercelRequest, VercelResponse } from "@vercel/node";
import { storage } from "../server/storage.js";
import { insertImpactMetricsSchema } from "../shared/schema.js";
import { ZodError } from "zod";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    try {
      const metrics = await storage.getImpactMetrics();
      res.json(metrics);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch impact metrics" });
    }
  } else if (req.method === "PUT") {
    try {
      const metricsData = insertImpactMetricsSchema.parse(req.body);
      const metrics = await storage.updateImpactMetrics(metricsData);
      res.json(metrics);
    } catch (error) {
      if (error instanceof ZodError) {
        res
          .status(400)
          .json({ message: "Invalid metrics data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to update impact metrics" });
      }
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
