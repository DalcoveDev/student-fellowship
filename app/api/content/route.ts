import { NextRequest, NextResponse } from "next/server";
import { loadSiteContent, saveSiteContent } from "@/lib/admin-store";

export async function GET() {
  try {
    const content = await loadSiteContent();
    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to load site content" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const content = body as Parameters<typeof saveSiteContent>[0];
    await saveSiteContent(content);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to save site content" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  return POST(request);
}
