import { NextResponse } from "next/server";
import * as contentful from 'contentful'
export async function GET() {
    
  const  contentfulClient = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_TOKEN || ""
  })


  const message = 
     await contentfulClient.getEntries({content_type: "author"})  ;



  return NextResponse.json(message.items[0].fields);
}