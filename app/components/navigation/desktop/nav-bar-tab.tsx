"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLProps } from "react";
interface NavTabProp {
    path: string ,
    label: string
}
export const NavBarTab = (props: NavTabProp) => {
  const pathname = usePathname();
  const isRouteActive = (path: string) => pathname === path;
console.log("patname",pathname)
console.log("isroute",isRouteActive(props.path))
console.log(props.path)


  let navBarTabClassName = "flex flex-row items-center text-base font-medium mx-6 ";

  if (isRouteActive(props.path)) {
    navBarTabClassName += " underline solid decoration-solid decoration-violet-100 decoration-4 underline-offset-8";
  }
 console.log(navBarTabClassName)
  return (
    <Link href={props.path} className={navBarTabClassName} >
      {props.label}
    </Link>
  );
};