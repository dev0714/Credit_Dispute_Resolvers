import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const consultationRequests = pgTable("consultation_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  primaryConcern: text("primary_concern"),
  additionalDetails: text("additional_details"),
  consentGiven: text("consent_given").notNull().default("true"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertConsultationRequestSchema = createInsertSchema(consultationRequests).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  primaryConcern: true,
  additionalDetails: true,
  consentGiven: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
});

export type InsertConsultationRequest = z.infer<typeof insertConsultationRequestSchema>;
export type ConsultationRequest = typeof consultationRequests.$inferSelect;

export const creditReportAnalysisRequests = pgTable("credit_report_analysis_requests", {
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
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertCreditReportAnalysisRequestSchema = createInsertSchema(creditReportAnalysisRequests).pick({
  firstName: true,
  lastName: true,
  idNumber: true,
  email: true,
  phone: true,
  employerName: true,
  monthlyIncome: true,
  primaryConcern: true,
  consentGiven: true,
}).extend({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  idNumber: z.string()
    .min(13, "SA ID number must be 13 digits")
    .max(13, "SA ID number must be 13 digits")
    .regex(/^\d{13}$/, "SA ID number must contain only numbers"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  consentGiven: z.string().refine((val) => val === "true", {
    message: "You must consent to credit report analysis",
  }),
});

export type InsertCreditReportAnalysisRequest = z.infer<typeof insertCreditReportAnalysisRequestSchema>;
export type CreditReportAnalysisRequest = typeof creditReportAnalysisRequests.$inferSelect;
