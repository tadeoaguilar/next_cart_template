"use client";

import { onClickSubmitCart } from "@/app/lib/cartActions";
import { useAppSelector } from "@/app/store";
import { use, useEffect } from "react";
import { OrderDetail } from "@/app/lib/databaseStructure";
import { useState } from "react";
import { set } from "zod";
import Link from "next/link";
export const NavBarCounter = () => {
  const cart: OrderDetail[] = useAppSelector((state: any) => state.userCart);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    setCartCount(0);
    cart.reduce((acc, item) => {
      setCartCount(acc + item.quantity);
      return acc + item.quantity;
    }, 0);
  }, [cart]);

  return (
    <>
      {cartCount ? (
        //<div onClick={() => onClickSubmitCart(cart)}
        <Link href="/cart">
          <button className=" flex border border-white-next border-solid  absolute top-0 right-0  bg-[#2C742F] font-semibold text-xs text-center font-poppins items-center justify-center  text-white-next rounded-full  h-5 w-5">
            {cartCount}
          </button>
        </Link>
      ) : null}
    </>
  );
};
