const express = require('express');
const next = require('next');
const helmet = require('helmet');
const cors = require('cors');

// Next.js configuration
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 8080;

// Security options
const helmetOptions = {
  contentSecurityPolicy: false, // Disable CSP for development
};

const corsOptions = {
  origin: '*', // Configure this based on your needs
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// API routes
const apiRoutes = express.Router();
// Add your API routes here
apiRoutes.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.prepare().then(() => {
  const server = express();

  // Security Middleware
  server.use(helmet(helmetOptions));
  server.use(cors(corsOptions));
  server.use(express.json());

  // API Routes
  server.use("/api", apiRoutes);

  // Middleware to Filter `_next/data/` Logs
  server.use((req, res, next) => {
    if (req.path.startsWith("/_next/data/")) return next();
    console.log(`📢 ${req.method} ${req.path}`);
    next();
  });

  // Handle Next.js pages
  server.all("*", (req, res) => handle(req, res));

  // Start Server
  server.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
}); 