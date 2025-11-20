import { pool } from "../config/db";

export const initDB = async () => {
  try {
    console.log("Initializing DB...");

    await pool.query(`
      CREATE TABLE IF NOT EXISTS otp (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255),
        otp VARCHAR(10),
        expires_at TIMESTAMP
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255),
        items JSONB,
        amount INT,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    console.log("DB initialized successfully");
  } catch (err) {
    console.error("DB Init Error:", err);
    throw err;
  }
};
