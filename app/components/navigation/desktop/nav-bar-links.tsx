import Image from "next/image";

export const NavBarLinks = () => {
  return (
    <nav className=" flex flex-row w-[--template-max-width] items-center mx-auto   justify-between bg-gray-next-800 p-4">
      <div className="flex flex-row w-max items-center justify-center gap-8">
        <div className="flex flex-row items-center">
          <span className="font-poppins text-sm font-medium leading-5 text-white-next ">
            Home
          </span>
          <svg
            className="mx-1"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1.33332 1.66667L5.99999 6.33334L10.6667 1.66667"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-row items-center">
          <span className="font-poppins text-sm font-medium leading-5 text-white-next ">
            Shop
          </span>
          <svg
            className="mx-1"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1.33332 1.66667L5.99999 6.33334L10.6667 1.66667"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-row items-center">
          <span className="font-poppins text-sm font-medium leading-5 text-white-next ">
            Pages
          </span>
          <svg
            className="mx-1"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1.33332 1.66667L5.99999 6.33334L10.6667 1.66667"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-row items-center">
          <span className="font-poppins text-sm font-medium leading-5 text-white-next ">
            Blog
          </span>
          <svg
            className="mx-1"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1.33332 1.66667L5.99999 6.33334L10.6667 1.66667"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span className="font-poppins text-sm font-medium leading-5 text-white-next ">
          About Us
        </span>
        <span className="font-poppins text-sm font-medium leading-5 text-white-next ">
          Contact Us
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M17.4359 4.375C18.9193 4.77396 20.2718 5.55567 21.358 6.64184C22.4441 7.72801 23.2258 9.08051 23.6248 10.5639"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5306 7.75687C17.4205 7.99625 18.2318 8.46521 18.8833 9.11678C19.5349 9.76835 20.0039 10.5797 20.2433 11.4695"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.115 13.6517C11.0224 15.5074 12.5263 17.0049 14.3859 17.9042C14.522 17.9688 14.6727 17.9966 14.8229 17.9851C14.9731 17.9736 15.1178 17.9231 15.2425 17.8386L17.9812 16.0134C18.1022 15.9326 18.2414 15.8833 18.3862 15.8698C18.5311 15.8564 18.677 15.8793 18.8107 15.9364L23.9339 18.1326C24.1079 18.2065 24.2532 18.335 24.3479 18.4987C24.4426 18.6623 24.4815 18.8523 24.4589 19.04C24.2967 20.307 23.6784 21.4714 22.7196 22.3154C21.7608 23.1593 20.5273 23.6249 19.25 23.625C15.3049 23.625 11.5214 22.0578 8.73179 19.2682C5.94218 16.4786 4.375 12.6951 4.375 8.75C4.37512 7.47279 4.84074 6.23941 5.68471 5.28077C6.52867 4.32213 7.6931 3.70396 8.96 3.542C9.14771 3.51936 9.33769 3.55832 9.50134 3.653C9.66499 3.74769 9.79345 3.89298 9.86738 4.067L12.0654 9.1945C12.1219 9.32698 12.1449 9.47137 12.1322 9.61485C12.1195 9.75833 12.0716 9.89647 11.9928 10.017L10.1728 12.7977C10.0901 12.923 10.0414 13.0675 10.0313 13.2171C10.0212 13.3668 10.05 13.5165 10.115 13.6517V13.6517Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-poppins text-sm font-medium leading-5 text-white-next ">
          (219) 555-0114
        </span>
      </div>
    </nav>
  );
};
