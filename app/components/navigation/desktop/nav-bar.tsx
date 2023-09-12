"use client";


import { NavBarIcon } from "./nav-bar-logo";
import { LoginButton } from "../../buttons/login-button";
import { LogoutButton } from "../../buttons/logout-button";
import { SignupButton } from "../../buttons/sign-up-button";
import { NavBarButtons } from "./nav-bar-buttons";
import { NavBarSmall } from "./nav-bar-small";
import { NavBarMidle } from "./nav-bar-midle";
import { NavBarTabs } from "./nav-bar-tabs";
import { HTMLAttributes } from "react";
import { NavBarLinks } from "./nav-bar-links";
import { Hero } from "../../hero/Hero";
import { Categories } from "../../categories/Categories";

export const NavBar = () => {
  
  return (
    <nav className="">

      <NavBarSmall/>
     <NavBarMidle />
     <NavBarLinks />
     <Hero/>
     <Categories />
     
{/*
      <NavBarIcon />
      <NavBarTabs />
      <NavBarButtons />

  */ }
    </nav>
  );
};