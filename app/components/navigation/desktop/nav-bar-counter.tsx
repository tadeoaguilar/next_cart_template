'use client'
import React from 'react'
import { useAppSelector } from '@/app/store'



const NavBarCounter = () => {
    const count = useAppSelector((state) => state.counter.value)
  
  return (
    
    <label className=" border border-white-next border-solid absolute top-0 right-0 bg-[#2C742F] text-[9px] font-medium font-poppins text-white-next text-center  rounded-full w-5 h-5 flex items-center justify-center ">
            {count}
    </label>
    
  )
}

export default NavBarCounter