import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function testConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("DB working:", res.rows);
  } catch (err) {
    console.error("DB ERROR:", err);
  }
}

testConnection();
