import React, { FC,  ReactNode } from "react"
import { LoginButton } from "./buttons/login-button"
import { LogoutButton } from "./buttons/logout-button"
import { SignupButton } from "./buttons/sign-up-button"
import { NavBar } from "./navigation/desktop/nav-bar"
type Props = {
    children: ReactNode
    }

export const  PageLayout:FC<Props> = ({children})=>{

        return (
            <>
            <NavBar />
            {children}
            </>
            )
}