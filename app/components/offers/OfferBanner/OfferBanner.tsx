//React arrow function component with props interface
import { fetchAllEntries, NextOfferBanner ,ImageCld} from "@/app/api/utils/contentful/utils";
import AspectImage from "../../ui/aspectImage/AspectImage";
import {BannerOffer1} from "../../ui/BannerTop/BannerTop";

    

export async function OfferBanner()
{
    const data =await fetchAllEntries<NextOfferBanner>(
        process.env.CONTENTFUL_SPACE_ID,
        process.env.CONTENTFUL_TOKEN, "nextBannerOffer"
        
        )
        const imageDataVar = data.items.map((item)=>{
          const imgData: ImageCld =item.fields.image[0]
          return {banner:item.fields, image:  imgData.public_id}})

  return (

      <div className="relative flex flex-row gap-6 mt-16">
        {imageDataVar.map((item,index) => {
                
           return (
                    
                    <AspectImage 
                    key={index}
                    src= {`https://res.cloudinary.com/${
                        process.env.CLOUDINARY_CLOUD_NAME
                    }/image/upload/c_crop,x_0,y_0,ar_0.7910/${item.image}`}
                    alt={String(item.banner.title)} 
                    format=""
                    width="424px"
                    modifier="rounded"
                    widthAR={424}
                    heightAR={536}
                    TopBanner={BannerOffer1}
                        
                        

                    
                    />)
                })}

  
      </div>
    
  );
};