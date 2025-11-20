import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config(); // VERY IMPORTANT

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Test DB connection once when server starts
export const testDBConnection = async () => {
  try {
    const client = await pool.connect();
    console.log("✅ Database connected successfully");
    client.release();
  } catch (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1); // stop server completely
  }
};
