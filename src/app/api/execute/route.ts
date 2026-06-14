import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { source_code, language_id, stdin, expected_output } = await req.json();

    const response = await fetch(`https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": process.env.JUDGE0_KEY || "",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
      },
      body: JSON.stringify({
        source_code: Buffer.from(source_code).toString('base64'),
        language_id: language_id,
        stdin: stdin ? Buffer.from(stdin).toString('base64') : undefined,
        expected_output: expected_output ? Buffer.from(expected_output).toString('base64') : undefined,
      }),
    });

    const data = await response.json();
    
    // Map Judge0 status to readable verdict
    let verdict = "Pending";
    if (data.status) {
        if (data.status.id === 3) verdict = "Accepted";
        else if (data.status.id === 4) verdict = "Wrong Answer";
        else if (data.status.id === 5) verdict = "Time Limit Exceeded";
        else if (data.status.id === 6) verdict = "Compilation Error";
        else if (data.status.id >= 7 && data.status.id <= 12) verdict = "Runtime Error";
        else verdict = data.status.description;
    }

    return NextResponse.json({ ...data, verdict });
  } catch (error) {
    console.error("Code execution error:", error);
    return NextResponse.json({ error: "Execution failed", verdict: "Internal Error" }, { status: 500 });
  }
}
