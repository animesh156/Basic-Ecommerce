import { Response, Request } from "express";
import { pool } from "../config/db";
import { sendEmail } from "../services/mail.service";

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const { email, items, amount } = req.body;

    // ---------------- Basic Validation ----------------
    if (!email || !items || !amount) {
      return res.status(400).json({
        success: false,
        message: "Email, items and amount are required",
      });
    }

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Items must be a non-empty array",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    if (typeof amount !== "number") {
      return res.status(400).json({
        success: false,
        message: "Amount must be a number",
      });
    }

    // Ensure data is numeric
    const sanitizedItems = items.map((item: any) => ({
      ...item,
      price: Number(item.price),
      actualPrice: Number(item.actualPrice),
      rating: Number(item.rating),
      quantity: Number(item.quantity),
    }));

    // ---------------- Insert Order ----------------
    const result = await pool.query(
      `INSERT INTO orders (email, items, amount)
       VALUES ($1, $2, $3)
       RETURNING id, email, items, amount, created_at`,
      [email, sanitizedItems, amount]
    );

    const order = result.rows[0];

    // ---------------- Format Item Details for Email ----------------
    const itemsList = sanitizedItems
      .map(
        (item: any) =>
          `• ${item.name}\n  Qty: ${item.quantity} × $${item.price} = $${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n\n");

    const emailBody = `
Your order has been placed successfully!

Order ID: ${order.id}
Total Amount: $${order.amount}

Items Ordered:
${itemsList}

Thank you for shopping with us ❤️
`;

    // ---------------- Send Email ----------------
    try {
      await sendEmail(email, "Order Confirmation", emailBody);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    // ---------------- Response ----------------
    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.error("Error placing order:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
