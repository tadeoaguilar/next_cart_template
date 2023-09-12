import Image from "next/image"

export  async function  Categories ()  {

    
        
        const res = await fetch('http://localhost:3000/api/ui/nextCategories')
        const data = await res.json();
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
          }      
    
          
          console.log(data[0].fields.imageCld[0].public_id)
          console.log(data[0].fields.category)
          data.map((item: any) => {
                        
        console.log( item.fields.category)

    })     
    
    
    
    const normalizeSrc = (src: string) => src[0] === '/' ? src.slice(1) : src

     type propsImageLoader = {
        src: string;
        width: number;
        quality?: number;
    };
    
 const cloudinaryLoader= ( param: propsImageLoader ) =>{
  const params = ['f_auto', 'c_limit', 'w_' + param.width, 'q_' + (param.quality || 'auto')]; 
  const url = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/ar_1.4533,c_crop,x_0.15,y_0.12/${normalizeSrc(param.src)}`
  return   (url)
  
  
  
   

}
  
    return (
        <>
            <div className=" mx-[--main-x-margin]  font-poppins w-full h-auto ">  
               <span> {
                 data.map((item: any) => {
                   
                    
                    return(
                      <span key= {item.index}> {item.fields.category}  </span>
                   )
            
                })   
                } </span>
            </div>
        </>
    )
}
