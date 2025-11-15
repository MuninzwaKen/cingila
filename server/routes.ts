import type { Express } from "express";
import { createServer, type Server } from "http";
import { sendSignupNotification } from "./email";
import { insertSignupRequestSchema } from "../shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Signup Request Route
  app.post("/api/signup-request", async (req, res) => {
    const result = insertSignupRequestSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: "Invalid signup request data", details: result.error.errors });
    }
    
    try {
      const { name, email, phone, location, userType } = result.data;
      
      await sendSignupNotification({
        name,
        email,
        phone,
        location,
        userType,
      });
      
      res.status(201).json({ 
        success: true, 
        message: "Signup request received successfully" 
      });
    } catch (error) {
      console.error("Failed to process signup request:", error);
      res.status(500).json({ error: "Failed to process signup request" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
