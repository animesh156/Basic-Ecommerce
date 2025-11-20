import express from "express";
const app = express();
import { initDB } from "./db/dbInit";
import dotenv from "dotenv";
import cors from "cors";
import otpRoutes from "./routes/otp.routes";
import orderRoutes from "./routes/order.routes";

dotenv.config();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/otp", otpRoutes);
app.use("/api/order", orderRoutes);

// 404 handler
app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await initDB();
    console.log("Databse connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1); // Stop App Completely
  }
}

startServer();
