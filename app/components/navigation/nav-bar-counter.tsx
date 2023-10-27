"use client";

import { useAppSelector } from "@/app/store";

export const NavBarCounter = () => {
    const count = useAppSelector((state: any) => state.counter.value);
  return (
    <>
        {
            count?
            <label className=" border border-white-next border-solid  absolute top-0 right-0  bg-[#2C742F] text-[10px] font-medium font-poppins  text-white-next text-center rounded-[50%]  h-4 w-4">
            {count}
          </label>
            :null    
        }
    </>
      
  );
};