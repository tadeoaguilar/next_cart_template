import React, { createContext, useContext, useState } from "react";
type contextCount = {
    count: number;
    increment: () => void;
  };
  
 export const myContextCount = createContext<contextCount>({
    count: 0,
    increment: () => {},
  });
  
  export const useContextCount = () => useContext(myContextCount);
  
  