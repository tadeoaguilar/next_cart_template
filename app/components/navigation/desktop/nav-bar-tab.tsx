"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLProps } from "react";
interface NavTabProp {
  path: string;
  label: string;
}
export const NavBarTab = (props: NavTabProp) => {
  const pathname = usePathname();
  const isRouteActive = (path: string) => pathname === path;

  let navBarTabClassName = "";

  if (isRouteActive(props.path)) {
    navBarTabClassName += " ";
  }

  return (
    <Link href={props.path} className={navBarTabClassName}>
      {props.label}
    </Link>
  );
};
