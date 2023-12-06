import {NextRequest,NextResponse} from "next/server"
import { fetchAllEntries, NextProducts ,ImageCld, cloudinaryLoader} from "@/app/api/utils/contentful/utils";


export async function GET(request:NextRequest) { 
  const data =await fetchAllEntries<NextProducts>(
    process.env.CONTENTFUL_SPACE_ID || "",
    process.env.CONTENTFUL_TOKEN || "",
    "nextProducts"
    )
    const imageDataVar = data.items.map((item)=>{
      //@ts-expect-error
      const imgData: ImageCld =item.fields.image[0]
     
      
      return {...item.fields, ...imgData  }})
    
  return NextResponse.json( imageDataVar);
}