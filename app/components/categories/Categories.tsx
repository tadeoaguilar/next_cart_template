
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
        
        const a = items.map((item)=> item.fields)
                    .map((item)=> item.imageCld)
                    .map((item)=> item)
                    
        
        const b:any = a.map((item) => item).flat(100)
        const c = b.map((item:any)=> {return (item.url)})
        return (
            c

        )
    } 
         
    console.log("image",imageData(data.items))
          
    
    
    
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
                 
                 imageData(data.items).map((item: any) => {
                   
                    console.log(item)
                    return(
                      <div className=" flex flex-col justify-center items-center " key= {item.index}>
                        <div className="relative  h-full w-full " key= {item.index}>
                        <Image 
                                src ={item}
                                alt = "hola"
                                fill = {true}
                                style ={{objectFit: 'fill' , borderRadius: "10px"}}
                                /> 

                        </div>
                        <span>{"Descr"}</span>     
                    </div>
                      
                    
                   )
            
                })   }
             </div>
            </div>
        </>
    )
}
