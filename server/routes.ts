import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationRequestSchema, insertCreditReportAnalysisRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Consultation request endpoint
  app.post("/api/consultation-requests", async (req, res) => {
    try {
      const validatedData = insertConsultationRequestSchema.parse(req.body);
      const request = await storage.createConsultationRequest(validatedData);
      res.json({ success: true, data: request });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        error: error.message || "Failed to create consultation request" 
      });
    }
  });

  // Get all consultation requests (admin endpoint)
  app.get("/api/consultation-requests", async (req, res) => {
    try {
      const requests = await storage.getConsultationRequests();
      res.json({ success: true, data: requests });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        error: error.message || "Failed to fetch consultation requests" 
      });
    }
  });

  // Credit report analysis request endpoint
  app.post("/api/credit-report-analysis", async (req, res) => {
    try {
      const validatedData = insertCreditReportAnalysisRequestSchema.parse(req.body);
      const request = await storage.createCreditReportAnalysisRequest(validatedData);
      res.json({ success: true, data: request });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        error: error.message || "Failed to create credit report analysis request" 
      });
    }
  });

  // Get all credit report analysis requests (admin endpoint)
  app.get("/api/credit-report-analysis", async (req, res) => {
    try {
      const requests = await storage.getCreditReportAnalysisRequests();
      res.json({ success: true, data: requests });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        error: error.message || "Failed to fetch credit report analysis requests" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
