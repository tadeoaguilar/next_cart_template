
import { fetchAllEntries, NextProducts ,ImageCld, cloudinaryLoader} from "@/app/api/utils/contentful/utils";








export async function GET() { 
  const data =await fetchAllEntries<NextProducts>(
    process.env.CONTENTFUL_SPACE_ID,
    process.env.CONTENTFUL_TOKEN,
    "nextProducts"
    )
    const imageDataVar = data.items.map((item)=>{
      const imgData: ImageCld =item.fields.image[0]
      return {...item.fields, image:  imgData.public_id}})
      console.log("Server","si")
  return Response.json( imageDataVar);
}