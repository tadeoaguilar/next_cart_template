"use client";

import { useAppSelector } from "@/app/store";
import { auth } from "@/auth";
export const NavBarLocation = () => {
    
    
    const location = typeof navigator !== 'undefined' && navigator.geolocation.getCurrentPosition((position)=>{return (
        { "Latitude":  position.coords.latitude ,
          "Longitude":  position.coords.longitude
    })})
    
    
    
  console.log("location",location)
  return (
    <>
       {location?.toString()   }
    </>
      
  );
};