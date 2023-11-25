
'use client'
import {useEffect,useState} from "react"

export const NavBarLogIn =  () => {
  const [user, setUser] = useState<string>("")

  
  useEffect(() => {
    const fetchData = async () => {
      try {
      const data = await fetch("/api/user",{cache:"no-cache"})
      const data2= await data.json()
      setUser( data2)
    } catch (error) {
      console.log(error)
    }
  };
   fetchData();
}, [])
   
  return (
        
        <div>
          {user? user: "Log In"}
        </div>       
    
      
  );
};