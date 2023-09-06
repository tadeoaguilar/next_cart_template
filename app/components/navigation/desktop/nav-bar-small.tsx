import Image from "next/image";

export const NavBarSmall = () => {
    return (
      

      
      <nav className="flex flex-row w-full justify-between py-1 px-[--main-x-margin] mx-auto items-center shadow-next-box-s bg-white-next  " >
        <div className="flex flex-row min-w-max items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
            <path d="M16 8.36364C16 14.0909 8.5 19 8.5 19C8.5 19 1 14.0909 1 8.36364C1 6.41068 1.79018 4.53771 3.1967 3.15676C4.60322 1.77581 6.51088 1 8.5 1C10.4891 1 12.3968 1.77581 13.8033 3.15676C15.2098 4.53771 16 6.41068 16 8.36364Z" stroke="#666666" strokeLinecap="round" strokeLinejoin="round"/> 
            <path d="M8.5 10.8182C9.88071 10.8182 11 9.71925 11 8.36364C11 7.00803 9.88071 5.90909 8.5 5.90909C7.11929 5.90909 6 7.00803 6 8.36364C6 9.71925 7.11929 10.8182 8.5 10.8182Z" stroke="#666666" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
        <span className=" mx-1 whitespace-nowrap font-poppins font-thin text-xs text-gray-next-600">Store Location: Lincoln- 344, Illinois, Chicago, USA </span>    
        </div>
        <div className="flex flex-row min-w-max items-center">
          <span className=" mr-[6px] whitespace-nowrap font-poppins font-thin text-xs text-gray-next-600">
            Eng
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
            <path d="M8 1.25L4.5 4.75L1 1.25" stroke="#666666" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className=" ml-5 mr-[6px] whitespace-nowrap font-poppins font-thin text-xs text-gray-next-600">
            USD
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
            <path d="M8 1.25L4.5 4.75L1 1.25" stroke="#666666" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="px-5 mx-1 whitespace-nowrap font-poppins font-thin text-xs text-gray-next-600">
            |
          </span>
          <span className="whitespace-nowrap font-poppins font-thin text-xs text-gray-next-600">
            Sign In
          </span>
          <span className="mx-[4px] whitespace-nowrap font-poppins  font-thin text-xs text-gray-next-600">
            /
          </span>
          <span className="whitespace-nowrap font-poppins font-thin text-xs text-gray-next-600">
            Sign Up
          </span>
        </div>
      </nav>

      
    );
  };