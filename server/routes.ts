import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDonationSchema, insertImpactMetricsSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Donation routes
  app.post("/api/donations", async (req, res) => {
    try {
      const donationData = insertDonationSchema.parse(req.body);
      const donation = await storage.createDonation(donationData);
      res.json(donation);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid donation data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to process donation" });
      }
    }
  });

  app.get("/api/donations", async (req, res) => {
    try {
      const donations = await storage.getDonations();
      res.json(donations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch donations" });
    }
  });

  app.get("/api/donation-stats", async (req, res) => {
    try {
      const stats = await storage.getDonationStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch donation statistics" });
    }
  });

  // Impact metrics routes
  app.get("/api/impact-metrics", async (req, res) => {
    try {
      const metrics = await storage.getImpactMetrics();
      res.json(metrics);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch impact metrics" });
    }
  });

  app.put("/api/impact-metrics", async (req, res) => {
    try {
      const metricsData = insertImpactMetricsSchema.parse(req.body);
      const metrics = await storage.updateImpactMetrics(metricsData);
      res.json(metrics);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid metrics data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to update impact metrics" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
