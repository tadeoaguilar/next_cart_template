import React from "react";

import { StoreProvider } from "../components/StoreProvider/StoreProvider";
import { CartDetail } from "./cart-detail";
import dynamic from "next/dynamic";
const page = () => {
  return (
    <div>
      <StoreProvider>
        <CartDetail />
      </StoreProvider>
    </div>
  );
};

export default page;
