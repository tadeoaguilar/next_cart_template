import Image from "next/image";
import { fetchAllEntries,NextHero,ImageCld  } from "@/app/api/utils/contentful/utils";




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
      <div className="w-[--template-max-width] flex flex-row gap-6 mx-auto font-poppins">
          <div className="relative border border-danger w-[872px]">  
            <Image
              src={`https://res.cloudinary.com/${
                process.env.CLOUDINARY_CLOUD_NAME
              }/image/upload/c_crop,x_0,y_0,ar_1.4533/next_hero/${image1[0].image}`}
              alt={String(image1[0].atext)}
              className="w-full h-full"
              width={872}
              height={600}
              
             
            />            
         </div> 
         

         <div className="flex flex-col gap-6">
           <div className="relative w-[432px]  ">  
              <Image
                src={`https://res.cloudinary.com/${
                  process.env.CLOUDINARY_CLOUD_NAME
                }/image/upload/c_crop,x_0,y_0,ar_1.5/${String(image2[0].image)}`}
                alt={String(image2[0].atext)}
                
                className=" w-full h-full scale-x-[-1]"
                width={432}
                height={288}
              />
            </div>

            <div className="relative w-[432px]  ">  
              <Image
                src={`https://res.cloudinary.com/${
                  process.env.CLOUDINARY_CLOUD_NAME
                }/image/upload/c_crop,x_0,y_0,ar_1.5/${String(image3[0].image)}`}
                alt={String(image2[0].atext)}
                
                className=" w-full h-full scale-x-[-1]"
                width={432}
                height={288}
              />
            </div>
                

          </div>
        </div>
      {/*
          
          

          <Image
            src={`https://res.cloudinary.com/${
              process.env.CLOUDINARY_CLOUD_NAME
            }/image/upload/v1694466946/${image3[0].image}`}
            alt={String(image3[0].atext)}
            fill={true}
            style={{
              objectFit: "cover",
              transform: "scaleX(-1)",
              borderRadius: "10px",
            }}
            
          />
          */}
        
    </>
  );
}
