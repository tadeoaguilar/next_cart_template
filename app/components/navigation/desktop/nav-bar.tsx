

import { NavBarIcon } from "./nav-bar-logo";
import { NavBarSmall } from "./nav-bar-small";
import { NavBarMidle } from "./nav-bar-midle";

import { HTMLAttributes } from "react";
import { NavBarLinks } from "./nav-bar-links";
import { Hero } from "../../hero/Hero";
import { Categories } from "../../categories/Categories";

export const NavBar = () => {
  return (
    <nav className="">
      <NavBarSmall />
      <NavBarMidle />
      <NavBarLinks />

    </nav>
  );
};
