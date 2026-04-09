import type { Express } from "express";
import { createServer, type Server } from "http";
import { sendSignupNotification, sendDemoRequestNotification } from "./email.js";
import { insertSignupRequestSchema } from "../shared/schema.js";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get Started signup route — notifies admin + sends confirmation to user
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

  // Demo request route — notifies admin with "Demo Request" subject
  app.post("/api/demo-request", async (req, res) => {
    const result = insertSignupRequestSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: "Invalid demo request data", details: result.error.errors });
    }
    
    try {
      const { name, email, phone, location, userType } = result.data;
      
      await sendDemoRequestNotification({
        name,
        email,
        phone,
        location,
        userType,
      });
      
      res.status(201).json({ 
        success: true, 
        message: "Demo request received successfully" 
      });
    } catch (error) {
      console.error("Failed to process demo request:", error);
      res.status(500).json({ error: "Failed to process demo request" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
