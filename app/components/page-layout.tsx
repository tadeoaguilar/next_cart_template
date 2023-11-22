import React, { FC, ReactNode } from "react";

import { NavBar } from "./navigation/desktop/nav-bar";

type Props = {
  children: ReactNode;
};

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div id="MainContainer" className=" w-[--template-max-width] mx-auto">
      <NavBar />
      {children}
    </div>
  );
};
