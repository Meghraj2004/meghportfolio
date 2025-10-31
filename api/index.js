import express from "express";
import { registerRoutes } from "../dist/routes.js";
import { serveStatic } from "../dist/vite.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware for logging
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      console.log(`${req.method} ${path} ${res.statusCode} in ${duration}ms`);
    }
  });
  
  next();
});

// Register API routes
(async () => {
  try {
    await registerRoutes(app);
    serveStatic(app);
  } catch (error) {
    console.error("Error setting up routes:", error);
  }
})();

// Error handler
app.use((err, req, res, next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Export for Vercel serverless
export default async (req, res) => {
  return app(req, res);
};
