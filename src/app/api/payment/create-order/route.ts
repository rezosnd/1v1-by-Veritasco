import { NextResponse } from "next/dist/server/web/spec-extension/response";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  try {
    const { amount, currency = "INR" } = await req.json();

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const options = {
      amount: amount * 100, // Amount in paise
      currency,
      receipt: `receipt_order_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    
    return NextResponse.json(order);
  } catch (error) {
    console.error("Razorpay Error:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
