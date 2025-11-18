import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config(); // VERY IMPORTANT

console.log("DATABASE_URL:", process.env.DATABASE_URL); // TEMP — debug

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
