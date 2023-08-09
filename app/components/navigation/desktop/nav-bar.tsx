"use client";


import { NavBarIcon } from "./nav-bar-logo";
import { LoginButton } from "../../buttons/login-button";
import { LogoutButton } from "../../buttons/logout-button";
import { SignupButton } from "../../buttons/sign-up-button";
import { NavBarButtons } from "./nav-bar-buttons";

import { NavBarTabs } from "./nav-bar-tabs";
import { HTMLAttributes } from "react";

export const NavBar = () => {
  
  return (
    <nav className="flex flex-row flex-1 shrink-0 max-w-[85%] py-6 mx-auto p-6 ">
      <NavBarIcon />
      <NavBarTabs />
      <NavBarButtons />
    </nav>
  );
};