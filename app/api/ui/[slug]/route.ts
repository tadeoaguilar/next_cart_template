import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
 
  return NextResponse.json("Hello World " + params.slug);
}
