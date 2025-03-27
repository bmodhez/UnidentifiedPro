import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js"; // Ensure correct path

// ✅ 1. Express App Initialize FIRST
const app = express();

// ✅ 2. Middleware Setup
app.use(cors());
app.use(express.json()); // For parsing JSON requests

// ✅ 3. Routes Setup (AFTER app initialization)
app.use("/api/auth", authRoutes);

// ✅ 4. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
