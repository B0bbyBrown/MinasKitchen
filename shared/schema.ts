import { pgTable, text, serial, integer, boolean, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const donations = pgTable("donations", {
  id: serial("id").primaryKey(),
  donorName: text("donor_name").notNull(),
  donorEmail: text("donor_email").notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  isMonthly: boolean("is_monthly").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const impactMetrics = pgTable("impact_metrics", {
  id: serial("id").primaryKey(),
  mealsServed: integer("meals_served").notNull(),
  childrenFed: integer("children_fed").notNull(),
  womenEmployed: integer("women_employed").notNull(),
  weeksRunning: integer("weeks_running").notNull(),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertDonationSchema = createInsertSchema(donations).pick({
  donorName: true,
  donorEmail: true,
  amount: true,
  isMonthly: true,
}).extend({
  amount: z.string().min(1, "Amount is required"),
});

export const insertImpactMetricsSchema = createInsertSchema(impactMetrics).pick({
  mealsServed: true,
  childrenFed: true,
  womenEmployed: true,
  weeksRunning: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertDonation = z.infer<typeof insertDonationSchema>;
export type Donation = typeof donations.$inferSelect;
export type InsertImpactMetrics = z.infer<typeof insertImpactMetricsSchema>;
export type ImpactMetrics = typeof impactMetrics.$inferSelect;
