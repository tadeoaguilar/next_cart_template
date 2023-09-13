
import { CldImage } from "next-cloudinary";
import * as contentful from 'contentful'
import Image from "next/image"
type propsImageLoader = {
    src: string;
    width: number;
    quality?: number;
};
async function getData(category: string) {


    const  contentfulClient = await contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID || "",
        accessToken: process.env.CONTENTFUL_TOKEN || ""
      })
    
    
    return(contentfulClient.getEntries({content_type: category })  )        
         


    

  }
  

export  async function  Hero ()  {

    
    const data:any = await getData("nextHero");
    
    
          
    
    
    
    const image1 = data.filter((item:any)=> item.fields.order === 1)[0].fields
    const image2 = data.filter((item:any)=> item.fields.order === 2)[0].fields
    const image3 = data.filter((item:any)=> item.fields.order === 3)[0].fields
    
    console.log(`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/v1694466946/next_hero/${image2.imageCld[0].public_id}.${image2.imageCld[0].format}`)
    
    const normalizeSrc = (src: string) => src[0] === '/' ? src.slice(1) : src
     function cloudinaryLoader  ( param: propsImageLoader )  {
      
        const params = ['f_auto', 'c_limit', 'w_' + param.width, 'q_' + (param.quality || 'auto')]; 
        const url = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/ar_1.4533,c_crop,x_0.15,y_0.12/${normalizeSrc(param.src)}`
        return   (url)
        }

    

    return (
        <>
                


            
            <div className=" mx-[--main-x-margin] grid grid-cols-3 grid-rows-2 my-6 gap-6 h-max font-poppins">
            
            <div className=" relative row-span-2  col-span-2 w-full h-full min-h-full min-w-full">
                   
                    
                   <div className="relative hero-filter h-full z-10 rounded-[10px] flex flex-col items-center justify-start">
                        <div className="flex my-auto flex-col rounded-[10px] self-start ml-10 min-h-max  ">
                            <span className=" mx-1 font-semibold  text-5xl text-white-next mb-2 ">Fresh & Healthy</span>
                            <span className=" mx-1 font-semibold  text-5xl text-white-next mb-7">Organic Food</span>
                            <div className="flex mb-7">
                                <span className="w-[2px] h-16 bg-[#84D187]"></span>
                                <div className="flex flex-col ">
                                    <div className="flex  gap-x-2">
                                        <span className=" mx-1 pl-3 font-medium leading-8 text-xl text-white-next  ">Sale up to</span>
                                        <div className="bg-[#FF8A00] rounded-md px-3 py-1 items-center text-white-next text-xl  font-semibold">
                                            30% OFF
                                        </div>
                                    </div>
                                    <span className=" mx-1 pl-3 font-normal text-sm text-white-next">Free shipping on all your order.</span>                            
                                </div>
                                
                            </div>
                            <div className="flex bg-white-next rounded-[53px] w-max items-center px-10 py-4 ">
                                <span className="mr-4 text-[#00B207] text-base font-semibold">Shop now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                    <path d="M16.5 7.50055H1.5" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.45 1.47552L16.5 7.49953L10.45 13.5245" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div> 
                        
                   </div>  
                      

                            <Image 
                                src = {`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/ar_1.4533,c_crop,x_0.15,y_0.12/next_hero/${image1.imageCld[0].public_id}.${image1.imageCld[0].format}`}
                                alt = "hola"
                                fill = {true}
                                style ={{objectFit: 'fill' , borderRadius: "10px"}}
                                />
                        
                    
                    
                    
                  
            </div>
                    <div className="flex flex-col relative w-full h-auto ">
                        
                        <span className="z-10 mx-8 mt-8 text-sm font-medium leading-[14px] text-gray-next-900 ">SUMMER SALE </span>
                        <span className="z-10 mt-2 mx-8 text-[32px] font-semibold leading-9 text-gray-next-900">75% OFF </span>
                        <span className="z-10 mx-8 mt-3 text-sm font-normal leading-[21px] text-gray-next-900 ">Only Fruit & Vegetable</span>
                        <div className=" z-10 flex items-center mx-8 mt-6 py-4 ">
                                <span className="mr-4 text-[#00B207] text-base font-semibold">Shop now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                    <path d="M16.5 7.50055H1.5" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.45 1.47552L16.5 7.49953L10.45 13.5245" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        
                        <Image 
                                
                            src =   {`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/v1694466946/${image2.imageCld[0].public_id}.${image2.imageCld[0].format}`}
                            alt = "main"
                            fill={true}                  
                           
                            style ={{objectFit: 'cover' ,transform: 'scaleX(-1)' , borderRadius: "10px"}}
                        /> 
    
                        
                    </div>
                    
                        <span className=" relative  w-full h-auto ">
                        <div className="relative hero-green-filter rounded-[10px] h-full w-full z-10  flex flex-col items-center justify-start"> 
                            <div className="flex flex-col items-center my-auto text-white-next">
                                <span className="text-sm font-medium leading-3 mb-3">BEST DEAL</span>
                                <span className="text-[32px] font-semibold  leading-10">Special Products</span>
                                <span className="text-[32px] font-semibold  leading-10">Deal of the Month</span>
                                <div className=" z-10 flex items-center mx-8 mt-6 py-4 ">
                                <span className="mr-4 text-[#00B207] text-base font-semibold">Shop now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                    <path d="M16.5 7.50055H1.5" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.45 1.47552L16.5 7.49953L10.45 13.5245" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            </div>
                        </div>
                        
                            <Image 
                                src =   {`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/v1694466946/${image3.imageCld[0].public_id}.${image3.imageCld[0].format}`}
                                alt = "main"
                                fill={true}                  
                                
                                style ={{objectFit: 'cover' ,transform: 'scaleX(-1)' , borderRadius: "10px"}}
                            />                    
                        
                        </span>
                    
             </div>
           
        </>
    )
}
