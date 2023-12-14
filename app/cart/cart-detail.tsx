'use client'

import { use, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import AspectImage from "@/app/components/ui/aspectImage/AspectImage";


export const  CartDetail = () => {
  const [isClient, setIsClient] = useState(false)
  const data = useAppSelector(state => state.userCart);
  const [cart, setCart] = useState(data);
  useEffect(() => {
    setCart(data);
    setIsClient(true);
    
  

  }, [ data]);


  
  return (
    <>
        {
           <>
           <div className="fixed left-0 h-4 flex ">
           <AspectImage 
            src={`https://res.cloudinary.com/do7uf4vlt/image/upload/v1702072680/breadcrumbs_bzsrxsj.jpg`}
            format="ar_1.0,c_scale,w_1920"
            width="1920px"
            widthAR={1920}
            heightAR={120}
            alt="breadcrumbs"
            modifier=""
           />
           </div>
            <div  className="flex flex-row "> 
        
           <div  className="flex flex-col basis-1/2 mt-24"> 
                
              { isClient &&
                cart.map((item,index) => {
                    return (
  
                    <div className="flex flex-row items-center " key = {item.productId} >
                         <div className="border border-danger basis-28">
                         <AspectImage                          
                          src= {`https://res.cloudinary.com/do7uf4vlt/image/upload/ar_1.1043,c_scale,w_254/${item.image}.jpg`}
                          format= "ar_1.1043,c_scale,w_100"                            
                          width="100px"
                          widthAR={100} 
                          heightAR={100}
                          alt={String(item.name)} 
                          modifier="rounded border border-gray-next-100"
                          />
                          </div>
                          <div className="border border-danger basis-6/12"> {item.name}</div>
                          <div className="border border-danger basis-5/12"> {item.price}</div>
                    </div>
  
  
  
                    )            
                    })  
    
              }
          
        </div>         
        <div  className="flex flex-col border border-danger basis-1/2 mt-24"> Title
        </div>
        </div>
        </>
        }
    </>
      
  );
};