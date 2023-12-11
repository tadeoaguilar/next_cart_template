'use client'

import { use, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";



export const  CartDetail = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const data = useAppSelector(state => state.userCart);
  const [cart, setCart] = useState(data);
  useEffect(() => {
    setCart(data);
    setDomLoaded(true);
    
  

  }, [ data]);


  
  return (
    <>
        {
              <div >
              { domLoaded &&
                cart.map((item,index) => {
                    return (
                    <div key = {item.productId} >
                         {item.name}  , {item.price} , {item.quantity}
                    </div>)            
                    })  
    
              }
          
        </div>         
        }
    </>
      
  );
};