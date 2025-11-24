var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  consultationRequests: () => consultationRequests,
  creditReportAnalysisRequests: () => creditReportAnalysisRequests,
  insertConsultationRequestSchema: () => insertConsultationRequestSchema,
  insertCreditReportAnalysisRequestSchema: () => insertCreditReportAnalysisRequestSchema
});
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var consultationRequests = pgTable("consultation_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  primaryConcern: text("primary_concern"),
  additionalDetails: text("additional_details"),
  consentGiven: text("consent_given").notNull().default("true"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertConsultationRequestSchema = createInsertSchema(consultationRequests).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  primaryConcern: true,
  additionalDetails: true,
  consentGiven: true
}).extend({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters")
});
var creditReportAnalysisRequests = pgTable("credit_report_analysis_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  idNumber: text("id_number").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  employerName: text("employer_name"),
  monthlyIncome: text("monthly_income"),
  primaryConcern: text("primary_concern"),
  consentGiven: text("consent_given").notNull().default("true"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertCreditReportAnalysisRequestSchema = createInsertSchema(creditReportAnalysisRequests).pick({
  firstName: true,
  lastName: true,
  idNumber: true,
  email: true,
  phone: true,
  employerName: true,
  monthlyIncome: true,
  primaryConcern: true,
  consentGiven: true
}).extend({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  idNumber: z.string().min(13, "SA ID number must be 13 digits").max(13, "SA ID number must be 13 digits").regex(/^\d{13}$/, "SA ID number must contain only numbers"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  consentGiven: z.string().refine((val) => val === "true", {
    message: "You must consent to credit report analysis"
  })
});

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
neonConfig.webSocketConstructor = ws;
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}
var pool = new Pool({ connectionString: process.env.DATABASE_URL });
var db = drizzle({ client: pool, schema: schema_exports });

// server/storage.ts
import { desc } from "drizzle-orm";
var DatabaseStorage = class {
  async createConsultationRequest(insertRequest) {
    const [request] = await db.insert(consultationRequests).values(insertRequest).returning();
    return request;
  }
  async getConsultationRequests() {
    return await db.select().from(consultationRequests).orderBy(desc(consultationRequests.createdAt));
  }
  async createCreditReportAnalysisRequest(insertRequest) {
    const [request] = await db.insert(creditReportAnalysisRequests).values(insertRequest).returning();
    return request;
  }
  async getCreditReportAnalysisRequests() {
    return await db.select().from(creditReportAnalysisRequests).orderBy(desc(creditReportAnalysisRequests.createdAt));
  }
};
var storage = new DatabaseStorage();

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/consultation-requests", async (req, res) => {
    try {
      const validatedData = insertConsultationRequestSchema.parse(req.body);
      const request = await storage.createConsultationRequest(validatedData);
      res.json({ success: true, data: request });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message || "Failed to create consultation request"
      });
    }
  });
  app2.get("/api/consultation-requests", async (req, res) => {
    try {
      const requests = await storage.getConsultationRequests();
      res.json({ success: true, data: requests });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message || "Failed to fetch consultation requests"
      });
    }
  });
  app2.post("/api/credit-report-analysis", async (req, res) => {
    try {
      const validatedData = insertCreditReportAnalysisRequestSchema.parse(req.body);
      const request = await storage.createCreditReportAnalysisRequest(validatedData);
      res.json({ success: true, data: request });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message || "Failed to create credit report analysis request"
      });
    }
  });
  app2.get("/api/credit-report-analysis", async (req, res) => {
    try {
      const requests = await storage.getCreditReportAnalysisRequests();
      res.json({ success: true, data: requests });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message || "Failed to fetch credit report analysis requests"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

// server/index.ts
import path2 from "path";
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  app.use(express2.static("public"));
  app.get("*", (_req, res) => {
    res.sendFile(path2.join(process.cwd(), "public", "index.html"));
  });
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
