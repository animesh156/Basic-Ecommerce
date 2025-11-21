import express from "express";
const app = express();
import { testDBConnection } from "./config/db";
import dotenv from "dotenv";
import cors from "cors";
import otpRoutes from "./routes/otp.routes";
import orderRoutes from "./routes/order.routes";
import productRoutes from "./routes/productRoutes";

dotenv.config();

//Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

//Routes
app.use("/api/otp", otpRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/products", productRoutes);

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
    await testDBConnection();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1); // Stop App Completely
  }
}

startServer();
