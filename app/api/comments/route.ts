import { NextRequest, NextResponse } from "next/server";
import { addComment } from "../../../lib/firebase-comments";

export async function POST(req: NextRequest) {
  const { fullName, email, telegram, comment } = await req.json();

  if (
    typeof fullName !== "string" ||
    typeof email !== "string" ||
    typeof telegram !== "string" ||
    typeof comment !== "string"
  ) {
    return NextResponse.json(
      { success: false, error: "Invalid input" },
      { status: 400 }
    );
  }

  try {
    await addComment(fullName, email, telegram, comment);
    return NextResponse.json({ success: true });
  } catch (error) {
    // Explicitly type error as unknown and safely get message
    const msg = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
