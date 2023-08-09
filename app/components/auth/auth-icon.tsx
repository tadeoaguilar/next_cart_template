
import { FC } from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

export const AuthIcon: FC = () => {
    const defaultPicture =
    "https://cdn.auth0.com/blog/hello-auth0/auth0-user.png";
    const {user} = useUser();
    
    const myPict = user?.picture ? user?.picture : false
    return (
      <a  href="/profile">
        {user ?
         <Image
                src={myPict ? myPict : defaultPicture}
                alt="Profile"
                className="rounded-full"
                width={27}
                height={27}
        />
        :             
            <></>
        }
      </a>
    );
  };