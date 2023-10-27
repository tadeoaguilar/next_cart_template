"use client";

import { useAppSelector } from "@/app/store";

export const NavBarCounter = () => {
    const count = useAppSelector((state: any) => state.counter.value);
  return (
    <>
        {
            count?
            <label className=" border border-white-next border-solid  absolute top-0 right-0  bg-[#2C742F] text-[9px] font-medium font-poppins pt-[2px]  text-white-next text-center rounded-full  h-5 w-5">
            {count}
          </label>
            :null    
        }
    </>
      
  );
};