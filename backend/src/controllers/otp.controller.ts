import { Request, Response } from "express";
import { createOtp, verifyOtpDB } from "../services/otp.service";
import { sendEmail } from "../services/mail.service";

//Sends OTP to user email
export const sendOtp = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const otp = await createOtp(email);
    await sendEmail(email, "Your OTP Code", `Your OTP is: ${otp}`);

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error: any) {
    console.error("Error sending OTP:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//verify OTP
export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required",
      });
    }

    const isValid = await verifyOtpDB(email, otp);

    if (!isValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully",
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
