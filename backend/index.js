import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import itemRoutes from "./routes/itemRoutes.js";

const app = express();
const PORT = process.env.PORT || 7000;

// MongoDB URL
const MONGO_URL = "mongodb+srv://fazil01:fazil01@cluster0.alpmmwz.mongodb.net/";

app.use(cors());
app.use(express.json());

// DB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ Database error:", error);
  }
};

// Routes
app.use("/api/items", itemRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Hello, Lost & Found Server is running...");
});

// Start Server
app.listen(PORT, () => {
  connectDB();
  console.log(`🚀 Server started on port ${PORT}`);
});
