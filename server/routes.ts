import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, service, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'Name, email, and message are required fields' 
        });
      }
      
      // In a real application, you would send an email, store in database, etc.
      // For now just return success
      return res.status(200).json({ 
        success: true, 
        message: 'Message received successfully!' 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'An error occurred while processing your request' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
