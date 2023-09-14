
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
             
               <div className="grid grid-cols-6 h-[70vh] ">
              
                
                {
                 
                 imageDataVar.map((item: any) => {
                   
                    console.log("item",item.image[0].url)
                    return(
                      <div className=" flex flex-col justify-center items-center " key= {item.index}>
                        <div className="relative  h-full w-full " key= {item.index+1}>
                        <Image 
                                src ={item.image[0].url}
                                alt = "item.cat"
                                fill = {true}
                                style ={{objectFit: 'fill' , borderRadius: "10px"}}
                                /> 

                        </div>
                        <span>{item.cat}</span>     
                    </div>
                      
                    
                   )
            
                })   }
             </div>
            </div>
        </>
    )
}
