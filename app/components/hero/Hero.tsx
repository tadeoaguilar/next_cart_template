import Image from "next/image";
import { fetchAllEntries,NextHero,ImageCld  } from "@/app/api/utils/contentful/utils";
import AspectImage from "../ui/aspectImage/AspectImage";
import { BannerTop1, BannerTop2, BannerTop3 } from "../ui/BannerTop/BannerTop";


export async function Hero() {


  const data =await fetchAllEntries<NextHero>(
    process.env.CONTENTFUL_SPACE_ID,
    process.env.CONTENTFUL_TOKEN,
    "nextHero"
    )
    
    const imageDataVar = data.items.map((item)=>{
      const imgData: ImageCld =item.fields.imageCld[0]
      return { image:  String(imgData.public_id) +"."+ String(imgData.format)  , order: item.fields.order , atext: item.fields.alternateText  }})
  
      
      const image1 = imageDataVar.filter((x)=> x.order ===1) 
      const image2 = imageDataVar.filter((x)=> x.order ===2)
      const image3 = imageDataVar.filter((x)=> x.order ===3)
      

  
  return (
    <>
      <div className="w-[--template-max-width] rounded flex flex-row gap-6 mx-auto mt-6 font-poppins">
          
            <AspectImage 
              src={`https://res.cloudinary.com/${
                process.env.CLOUDINARY_CLOUD_NAME
              }/image/upload/c_crop,x_0,y_0,ar_1.4533/next_hero/${image1[0].image}`}
              alt={String(image1[0].atext)} format="c_crop,x_0,y_0,ar_1.4533" width="872px"
              modifier="rounded-[10px]" widthAR={872} heightAR={600} 
              TopBanner={BannerTop1}
              />            
         
         
         <div className="flex flex-col gap-6">
            <AspectImage 
              src={`https://res.cloudinary.com/${
                process.env.CLOUDINARY_CLOUD_NAME
              }/image/upload/c_crop,x_0,y_0,ar_1.5/${String(image2[0].image)}`}
              alt={String(image2[0].atext)} format=""  width="432px" 
              modifier="rounded-[10px] scale-x-[-1]" widthAR={432} heightAR={288}
              TopBanner={BannerTop2}
              />               

            <AspectImage 
              src={`https://res.cloudinary.com/${
                process.env.CLOUDINARY_CLOUD_NAME
              }/image/upload/c_crop,x_0,y_0,ar_1.5/${String(image3[0].image)}`}
              alt={String(image2[0].atext)} format="" width="432px"
              modifier="rounded-[10px] " widthAR={432} heightAR={288}
              TopBanner={BannerTop3}
            />  
          </div>
        </div>
       
    </>
  );
}
