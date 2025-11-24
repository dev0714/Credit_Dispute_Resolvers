import { 
  consultationRequests, 
  type ConsultationRequest, 
  type InsertConsultationRequest,
  creditReportAnalysisRequests,
  type CreditReportAnalysisRequest,
  type InsertCreditReportAnalysisRequest
} from "@shared/schema";
import { db } from "./db";
import { desc } from "drizzle-orm";

export interface IStorage {
  createConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest>;
  getConsultationRequests(): Promise<ConsultationRequest[]>;
  createCreditReportAnalysisRequest(request: InsertCreditReportAnalysisRequest): Promise<CreditReportAnalysisRequest>;
  getCreditReportAnalysisRequests(): Promise<CreditReportAnalysisRequest[]>;
}

export class DatabaseStorage implements IStorage {
  async createConsultationRequest(insertRequest: InsertConsultationRequest): Promise<ConsultationRequest> {
    const [request] = await db
      .insert(consultationRequests)
      .values(insertRequest)
      .returning();
    return request;
  }

  async getConsultationRequests(): Promise<ConsultationRequest[]> {
    return await db
      .select()
      .from(consultationRequests)
      .orderBy(desc(consultationRequests.createdAt));
  }

  async createCreditReportAnalysisRequest(insertRequest: InsertCreditReportAnalysisRequest): Promise<CreditReportAnalysisRequest> {
    const [request] = await db
      .insert(creditReportAnalysisRequests)
      .values(insertRequest)
      .returning();
    return request;
  }

  async getCreditReportAnalysisRequests(): Promise<CreditReportAnalysisRequest[]> {
    return await db
      .select()
      .from(creditReportAnalysisRequests)
      .orderBy(desc(creditReportAnalysisRequests.createdAt));
  }
}

export const storage = new DatabaseStorage();
