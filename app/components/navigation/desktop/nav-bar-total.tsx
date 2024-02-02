"use client";

import { onClickSubmitCart } from "@/app/lib/cartActions";
import { useAppSelector } from "@/app/store";
import { use, useEffect } from "react";
import { OrderDetail } from '@/app/lib/databaseStructure';
import { useState } from "react";
import { set } from "zod";
import Link from "next/link";
export const  NavBarTotal = () => {
    
    
    const cart: OrderDetail[]  = useAppSelector((state: any) => state.userCart);
    const [cartTotal, setCartTotal] = useState(0)  

    const calculateSubTotal = (cart: OrderDetail[]) => {
      return Number(cart.reduce((price, item) => price + item.price * item.quantity, 0).toFixed(2));
    
    }


  useEffect(() => {    
    setCartTotal(0.00)
  
    setCartTotal(calculateSubTotal(cart))
    
  }, [cart])
    
    
    

  return (
    <>
        {
            cartTotal?
            //<div onClick={() => onClickSubmitCart(cart)}
            <Link href="/cart">
             <span className="font-poppins text-sm  text-green-next-900 font-semibold">
                {`$ ${cartTotal.toFixed(2)}`}
            </span>
            </Link>
            :null    
        }
    </>
      
  );
};