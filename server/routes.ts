import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'Please provide name, email, subject and message' });
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Please provide a valid email address' });
      }
      
      // Create fetch request to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e99b466d-e31a-4dfe-9e20-188a24f69b8c',
          name,
          email,
          subject,
          message,
          from_name: 'Megharaj Portfolio Contact',
          botcheck: ''
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        console.log('Contact form submission successful:', data);
        return res.status(200).json({ 
          success: true, 
          message: 'Thank you for your message. I will get back to you soon!' 
        });
      } else {
        console.error('Web3Forms returned error:', data);
        // Fallback to just logging the submission if Web3Forms fails
        console.log('Contact form submission (fallback):', { name, email, subject, message });
        return res.status(200).json({ 
          success: true, 
          message: 'Thank you for your message. I will get back to you soon!',
          note: 'Message logged (email service unavailable)'
        });
      }
    } catch (error) {
      console.error('Error processing contact form:', error);
      // Fallback to just logging the submission if there's an error
      const { name, email, subject, message } = req.body;
      if (name && email && message) {
        console.log('Contact form submission (fallback after error):', { name, email, subject, message });
      }
      return res.status(200).json({ 
        success: true, 
        message: 'Thank you for your message. I will get back to you soon!',
        note: 'Message logged (email service unavailable)'
      });
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
