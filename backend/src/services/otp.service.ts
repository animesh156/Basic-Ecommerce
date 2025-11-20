import crypto from "crypto";
import { pool } from "../config/db";

export const createOtp = async (email: string) => {
  const otp = crypto.randomInt(10000, 999999).toString();
  const expires = new Date(Date.now() + 5 * 60 * 1000);

  await pool.query(
    "INSERT INTO otp (email, otp, expires_at) VALUES ($1, $2, $3)",
    [email, otp, expires]
  );

  return otp;
};

export const verifyOtp = async (email: string, otp: string) => {
  const result = await pool.query(
    "SELECT * FROM otp WHERE email=$1 AND otp=$2",
    [email, otp]
  );

  if (result.rows.length === 0) return false;

  const record = result.rows[0];

  return new Date(record.expires_at) > new Date();
};
