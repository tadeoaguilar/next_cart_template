
import Image from "next/image"
import * as contentful from 'contentful'
type propsImageLoader = {
    src: string;
    width: number;
    quality?: number;
};

type categoryQuery = {
    content_type: string,

}
async function getData(query:categoryQuery ) {


    const  contentfulClient = await contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID || "",
        accessToken: process.env.CONTENTFUL_TOKEN || ""
      })
    
    
    return(contentfulClient.getEntries(query)  )        
         


    

  }







export  async function  Categories ()  {

    type returnContent = Awaited<ReturnType<typeof getData>>
    
    const data: returnContent  = (await getData({content_type: "nextCategories"  }));
    

    type itemsType = typeof data.items
   
          
    

    const imageData = (items: itemsType) => {
        
        const a1 = items.map((item)=>  item.fields)
        const  a:any = a1.map((item:any)=> {return ({cat: item.category, image: item.imageCld.flat(100)})})
        
        return (
            a

        )
    } 
         
   const imageDataVar:any= imageData(data.items)
    
    
    //console.log(pto[0].image[0].url)
    
    
    const normalizeSrc = (src: string) => src[0] === '/' ? src.slice(1) : src

     type propsImageLoader = {
        src: string;
        width: number;
        quality?: number;
    };
    
 const cloudinaryLoader= ( param: propsImageLoader ) =>{
  const params = ['f_auto', 'c_limit', 'w_' + param.width, 'q_' + (param.quality || 'auto')]; 
  const url = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/f_auto/${normalizeSrc(param.src)}`
  return   (url)
  
  
  
   

}
  
    return (
        <>
            
            <div className=" mx-[--main-x-margin] h-max  font-poppins   ">  
            <span className="from-gray-next-900 text-[32px] font-semibold leading-4 ">Popular Categories</span>
             
               <div className="grid grid-cols-6 w-full gap-6  mt-8">
              
                
                {
                 
                 imageDataVar.map((item: any) => {
          
                    return(
                      <div className=" flex flex-col  rounded-md border border-gray-next-100 h-max justify-center items-center hover:border-[#2C742F] hover:text-[#2C742F] hover:border-solid hover:shadow-lg hover:shadow-green-next-400" key= {item.index}>
                        <div className="relative  h-[230px] w-full " key= {item.index+1}>
                        <Image 
                                src ={item.image[0].url}
                                alt = "item.cat"
                                fill = {true}
                                style ={{objectFit: 'fill' , borderRadius: "10px"}}
                                /> 

                        </div>
                        <span className=" mt-4 mb-6  text-lg leading-7 font-medium text-gray-next-900  hover:text-[#2C742F] ">{item.cat}</span>     
                    </div>
                      
                    
                   )
            
                })   }
             </div>
            </div>
        </>
    )
}
