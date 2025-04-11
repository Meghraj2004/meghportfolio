import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Validate input
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Please provide name, email and message' });
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Please provide a valid email address' });
      }
      
      // For a real implementation, you would set up nodemailer with real credentials
      // and send the email. For now, we'll just return success.
      
      // Log the contact request
      console.log('Contact form submission:', { name, email, message });
      
      return res.status(200).json({ 
        success: true, 
        message: 'Thank you for your message. I will get back to you soon!' 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
  });

  // Serve resume file from public directory
  app.get('/assets/MegharajDandgavhal_Resume.pdf', (req, res) => {
    const resumePath = path.join(process.cwd(), "public", "assets", "MegharajDandgavhal_Resume.pdf");
    console.log('Serving resume from:', resumePath);
    res.sendFile(resumePath);
  });

  const httpServer = createServer(app);
  return httpServer;
}
