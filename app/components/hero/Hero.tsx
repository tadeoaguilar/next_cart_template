import Image from "next/image"
export const Hero = () => {

    const normalizeSrc = (src: string) => src[0] === '/' ? src.slice(1) : src

     type propsImageLoader = {
        src: string;
        width: number;
        quality?: number;
    };
 const cloudinaryLoader= ( param: propsImageLoader ) =>{
  const params = ['f_auto', 'c_limit', 'w_' + param.width, 'q_' + (param.quality || 'auto')]; 
  const url = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/ar_1.4533,c_fit,w_1.00/ar_1.4533,c_crop,g_north,w_0.68/${normalizeSrc(param.src)}`
  return   (url)
  
  
  
}
  
    return (
        <>
                


            
            <div className=" mx-[--main-x-margin] grid grid-cols-3 grid-rows-2 my-6 gap-6 h-max">
            
            <div className=" relative row-span-2 col-span-2 w-full h-[600px]">
                   
                    
                   <div className="relative hero-filter h-[600px] z-10 rounded-[10px] flex flex-col items-center gap-7">
                        <div className="my-auto flex flex-col h-auto gap-7 mx-14">
                            <span className=" mx-1 font-semibold font-poppins leading-[58px] text-5xl text-white-next ">Fresh & Healthy Organic Food</span>
                            <span className=" mx-1 pl-3 font-medium font-poppins leading-8 text-xl text-white-next ">Sale up to</span>                            
                        </div> 
                        
                   </div>      
                        {/*<Image 
                                src = "/Main.jpg"
                                alt = "main"
                                fill={true}
                                className="rounded-[10px]"
                                style ={{objectFit: 'cover' }}
                                
    />                   */}

                            <Image 
                                src = "/Main_p3jyat.jpg"
                                alt = "Main"
                                loader={cloudinaryLoader}
                                fill = {true}
                                style ={{objectFit: 'cover' }}
                                />
                        
                    
                    
                    
                  
            </div>
                    <span className=" relative w-full h-auto  ">
                            <Image 
                                src = "/main02.jpg"
                                alt = "main"
                                fill={true}                  
                                className="rounded-[10px]"
                                style ={{objectFit: 'cover' ,transform: 'scaleX(-1)'}}
                            />                   
                    </span>
                    <span className=" relative  w-full h-auto ">
                            <Image 
                                src = "/main03.jpg"
                                alt = "main"
                                fill={true}
                                className="rounded-[10px]"
                                style ={{objectFit: 'cover' }}
                            />                   
                    </span>
             
             </div>
           
        </>
    )
}
