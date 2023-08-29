import Image from "next/image"
export const Hero = () => {
    const imageStyle = {
        "margin-top": '-50px',
        "margin-left": '-200px'
        
    }
  
    return (
        <>
            <div className=" mx-[--main-x-margin] grid grid-cols-2  my-6 gap-6 h-[60vh] ">
            <span className=" relative row-span-2 w-full h-auto">
                   <Image 
                        src = "/main.jpg"
                        alt = "main"
                        fill={true}
                        style ={{objectFit: 'cover' }}
                   />                   
                   
                </span>
            
            <span className=" relative w-full h-auto ">
                    <Image 
                        src = "/main02.jpg"
                        alt = "main"
                        fill={true}                  
                              
                        style ={{objectFit: 'cover' ,transform: 'scaleX(-1)'}}
                    />                   
            </span>
            <span className=" relative  w-full h-auto">
                    <Image 
                        src = "/main03.jpg"
                        alt = "main"
                        fill={true}
                        style ={{objectFit: 'cover' }}
                    />                   
            </span>
             
             </div>
        </>
    )
}
