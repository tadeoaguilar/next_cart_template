'use server'
import Image from "next/image"
async function getData(category: string) {
    const res = await fetch(`${process.env.SITE_URL}/api/ui/${category}`)
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }      
    return  res.json();

  }


export  async function  Categories ()  {

    
         
        
          const data:any = await getData("nextCategories");
    

          console.log(data[0].fields.imageCld[0].public_id)
          console.log(data[0].fields.category)
          data.map((item: any) => {
                        
        console.log( item.fields.imageCld[0].public_id)

    })     
    
    
    
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
                 data.map((item: any) => {
                   
                    
                    return(
                      <div className=" flex flex-col justify-center items-center " key= {item.index}>
                        <div className="relative  h-full w-full " key= {item.index}>
                            <Image 
                                    src =  {`${item.fields.imageCld[0].public_id}.${item.fields.imageCld[0].format}`}
                                    alt = {`${item.fields.imageCld[0].public_id}`}
                                    loader={cloudinaryLoader}
                                    fill = {true}
                                    style ={{objectFit: 'fill' , borderRadius: "10px"}}
                                    />    

                        </div>
                        <span>{item.fields.category}</span>     
                    </div>
                      
                    
                   )
            
                })   
                } </div>
            </div>
        </>
    )
}