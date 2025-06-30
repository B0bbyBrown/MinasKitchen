import { users, donations, impactMetrics, type User, type InsertUser, type Donation, type InsertDonation, type ImpactMetrics, type InsertImpactMetrics } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createDonation(donation: InsertDonation): Promise<Donation>;
  getDonations(): Promise<Donation[]>;
  getTotalDonations(): Promise<number>;
  getAverageDonation(): Promise<number>;
  getDonationStats(): Promise<{ total: number; average: number; count: number }>;
  getImpactMetrics(): Promise<ImpactMetrics | undefined>;
  updateImpactMetrics(metrics: InsertImpactMetrics): Promise<ImpactMetrics>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private donations: Map<number, Donation>;
  private impactMetrics: ImpactMetrics;
  private currentUserId: number;
  private currentDonationId: number;

  constructor() {
    this.users = new Map();
    this.donations = new Map();
    this.currentUserId = 1;
    this.currentDonationId = 1;
    
    // Initialize with current impact metrics
    this.impactMetrics = {
      id: 1,
      mealsServed: 12000,
      childrenFed: 500,
      womenEmployed: 10,
      weeksRunning: 42,
      lastUpdated: new Date(),
    };

    // Add some initial donations to show progress
    this.addInitialDonations();
  }

  private addInitialDonations() {
    const initialDonations = [
      { donorName: "Anonymous Donor", donorEmail: "anonymous@example.com", amount: "2500.00", isMonthly: true },
      { donorName: "John Smith", donorEmail: "john@example.com", amount: "500.00", isMonthly: false },
      { donorName: "Sarah Johnson", donorEmail: "sarah@example.com", amount: "750.00", isMonthly: true },
      { donorName: "Community Fund", donorEmail: "fund@community.org", amount: "10000.00", isMonthly: false },
      { donorName: "Local Business", donorEmail: "support@localbiz.com", amount: "1500.00", isMonthly: true },
    ];

    initialDonations.forEach(donation => {
      const id = this.currentDonationId++;
      this.donations.set(id, {
        id,
        ...donation,
        isMonthly: donation.isMonthly || false,
        createdAt: new Date(),
      });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createDonation(insertDonation: InsertDonation): Promise<Donation> {
    const id = this.currentDonationId++;
    const donation: Donation = {
      id,
      ...insertDonation,
      isMonthly: insertDonation.isMonthly || false,
      createdAt: new Date(),
    };
    this.donations.set(id, donation);
    return donation;
  }

  async getDonations(): Promise<Donation[]> {
    return Array.from(this.donations.values()).sort(
      (a, b) => b.createdAt!.getTime() - a.createdAt!.getTime()
    );
  }

  async getTotalDonations(): Promise<number> {
    const donations = Array.from(this.donations.values());
    return donations.reduce((total, donation) => {
      return total + parseFloat(donation.amount);
    }, 0);
  }

  async getAverageDonation(): Promise<number> {
    const donations = Array.from(this.donations.values());
    if (donations.length === 0) return 0;
    
    const total = donations.reduce((sum, donation) => {
      return sum + parseFloat(donation.amount);
    }, 0);
    
    return total / donations.length;
  }

  async getDonationStats(): Promise<{ total: number; average: number; count: number }> {
    const donations = Array.from(this.donations.values());
    const count = donations.length;
    const total = donations.reduce((sum, donation) => {
      return sum + parseFloat(donation.amount);
    }, 0);
    const average = count > 0 ? total / count : 0;
    
    return { total, average, count };
  }

  async getImpactMetrics(): Promise<ImpactMetrics | undefined> {
    return this.impactMetrics;
  }

  async updateImpactMetrics(metrics: InsertImpactMetrics): Promise<ImpactMetrics> {
    this.impactMetrics = {
      ...this.impactMetrics,
      ...metrics,
      lastUpdated: new Date(),
    };
    return this.impactMetrics;
  }
}

export const storage = new MemStorage();
