import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';  // Import CORS

import authRoutes from './routes/auth.route.js';
import movieRoutes from './routes/movie.route.js';
import tvRoutes from './routes/tv.route.js';
import searchRoutes from './routes/search.route.js';

import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';
import { protectRoute } from './middleware/protectRoute.js';

dotenv.config();
const app = express();
const PORT = ENV_VARS.PORT;

// CORS Middleware Configuration
app.use(cors({
  origin: "http://localhost:5173",  // Frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"],  // Allowed methods
  credentials: true,  // Allow cookies
}));

// Body parser and cookies
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

// Start Server
app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
  connectDB();
});
