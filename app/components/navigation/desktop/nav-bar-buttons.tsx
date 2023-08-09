"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { LoginButton } from "../../buttons/login-button";
import { LogoutButton } from "../../buttons/logout-button";
import { SignupButton } from "../../buttons/sign-up-button";
import {AuthIcon}  from "../../auth/auth-icon";
export const NavBarButtons = () => {
    const { user } = useUser();
    
    return (
    <div className="flex flex-row space-x-4 ">
    {!user && (
      <>
        <SignupButton />
        <LoginButton />
      </>
      
    )}
    {user && (
      <>
        <LogoutButton />
      </>
    )}
   <AuthIcon />
  </div>)

}