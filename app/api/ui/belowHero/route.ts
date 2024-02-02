import { NextResponse, NextRequest } from "next/server";
import { dataBelowHero } from "../../data/data";

export async function GET(request: NextRequest) {
  console.log("api", dataBelowHero);
  return NextResponse.json(dataBelowHero);
}
