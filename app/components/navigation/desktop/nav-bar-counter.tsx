"use client";

import { useAppSelector } from "@/app/store";

export const  NavBarCounter = () => {

    const count = useAppSelector((state: any) => state.counter.value);
    const cart = useAppSelector((state: any) => state.userCart);
    console.log("cart",cart)
  return (
    <>
        {
            count?
            <div onClick={
              async()=>{ 
                const rawResponse = await fetch('/api/cart', {
                                                      method: 'POST',
                                                      headers: {
                                                      'Accept': 'application/json',
                                                      'Content-Type': 'application/json'
                                                      },
                                                      body: JSON.stringify(cart)
                                                      });          
                        }
                      } 
            className=" flex border border-white-next border-solid  absolute top-0 right-0  bg-[#2C742F] font-semibold text-xs text-center font-poppins items-center justify-center  text-white-next rounded-full  h-5 w-5">
            {count}
          </div>
            :null    
        }
    </>
      
  );
};