import { NextResponse, NextRequest } from "next/server";
import * as contentful from "contentful";
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  const contentfulClient = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_TOKEN || "",
  });

  const returnValue = await contentfulClient.getEntries({
    content_type: params.slug,
  });

  return NextResponse.json(returnValue.items);
}
