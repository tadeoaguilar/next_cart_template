"use client";
import React, { FC } from "react";
import { Provider } from "react-redux";
import store from "@/app/store";
type Props = {
  children: React.ReactNode;
};
export const StoreProvider: FC<Props> = ({ children }) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};
