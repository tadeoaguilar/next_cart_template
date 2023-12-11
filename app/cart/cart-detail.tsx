
'use client';

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";

interface CartDetailProps {}

export function CartDetail(props: CartDetailProps) {
    const data = useAppSelector(state => state.userCart);
    const [cart, setCart] = useState(data);
    console.log(cart)
  return (
    <div>
      {
            cart.map((item,index) => {
                return (<div key ={item.productId}>{item.name} ,{item.quantity}  </div>)            })  

      }
    </div>
  );
}