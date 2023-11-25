"use client";

import { useAppSelector } from "@/app/store";
import { auth } from "@/auth";
export const NavBarCounter = () => {
    
    const count = useAppSelector((state: any) => state.counter.value);
  return (
    <>
        {
            count?
            <div className=" flex border border-white-next border-solid  absolute top-0 right-0  bg-[#2C742F] font-semibold text-xs text-center font-poppins items-center justify-center  text-white-next rounded-full  h-5 w-5">
            {count}
          </div>
            :null    
        }
    </>
      
  );
};