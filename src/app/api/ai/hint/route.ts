import { NextResponse } from "next/dist/server/web/spec-extension/response";

export async function POST(req: Request) {
  try {
    const { problemDescription, userCode, type } = await req.json();

    // Mock response for AI. In production, connect to OpenAI
    // const response = await openai.chat.completions.create({...})

    let hint = "This is an AI generated hint.";
    if (type === "complexity") {
      hint = "Your current code has O(N^2) complexity. Try using a Hash Map to reduce it to O(N).";
    }

    return NextResponse.json({ hint });
  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json({ error: "Failed to generate hint" }, { status: 500 });
  }
}
