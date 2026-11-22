
import OpenAI from "openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    // Check API key
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "OpenAI API key is missing. Add it to .env.local."
        },
        { status: 500 }
      );
    }

    // Read chatbot question
    const body = await request.json();

    const message = body.message;
    const lesson = body.lesson || "Next.js and TypeScript";

    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please enter a valid question." },
        { status: 400 }
      );
    }

    // Connect OpenAI
    const openai = new OpenAI({
      apiKey: apiKey,
    });

    // Generate AI response
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      instructions: `
        You are Edu2Skill AI Teaching Assistant.

        Help beginner students understand programming.

        Current lesson: ${lesson}

        Rules:
        1. Give simple English explanations.
        2. Answer questions related to the lesson.
        3. Give examples when needed.
        4. Explain code step by step.
        5. Keep answers clear and helpful.
      `,
      input: message.trim(),
    });

    const reply = response.output_text;

    if (!reply) {
      throw new Error("OpenAI returned an empty response.");
    }

    return NextResponse.json({
      success: true,
      reply: reply,
    });

  } catch (error) {
    console.error("EDU2SKILL CHAT API ERROR:", error);

    const errorMessage =
      error instanceof Error
        ? error.message
        : "Unknown server error.";

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
