import React from "react";
import Image from "next/image";
import coin from "media/assets/dollar.webp";
import { BiCaretDown, BiSolidUser, BiUserCircle } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { logoutUser } from "@/redux/slices/authSlice";

type SubmenuItem = {
  name?: string;
  path?: any;
};

type MenuItem = {
  className?: string;
  name?: string;
  path?: any;
  submenu?: SubmenuItem[];
};

type MenuIconItem = {
  name?: string;
  path?: any;
  className?: string;
  leftIcon?: React.ReactNode;
  submenu?: SubmenuItem[];
};

export const menuItems: MenuItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
  },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact-us" },
  { name: "Profile", path: "/account", className: "block md:hidden" },
  { name: "Dashboard", path: "/", className: "block md:hidden" },
  // { name: "Sign out", path: "/", className: "block md:hidden" },

  // { name: "Sign out", className: "block md:hidden", onClick: handleLogout },

  { name: "Login", path: "/", className: "block md:hidden" },
];

export const menuIconItems: MenuIconItem[] = [
  // {
  //     name: "Login", path: "/login",
  //     className: "text-black border border-transparent hover:bg-transparent px-0 hover:text-primaryBlue hidden md:flex",
  //     leftIcon: (<BiUserCircle
  //         className="text-lg text-[#00bfab] hover:text-[#0072b1]"
  //         size={36}
  //     />),

  // },
  {
    path: "/register",
    className: "border border-transparent hover:bg-transparent px-0 ",
    leftIcon: (
      <div
        className={" items-center border-l gap-2 pl-2 hidden md:flex"}
        style={{ minHeight: "20px", minWidth: "20px" }}
      // ref={menuRef}
      // onClick={() => setIsDropOpen(!isDropOpen)}
      >
        <BiSolidUser className="bg-[#0072b1] text-white rounded-full p-1 text-2xl " />
      </div>
    ),
    submenu: [
      { name: "Profile", path: "/" },
      { name: "Dashboard", path: "/" },
      // { name: "Sign out", path: "/" },
    ],
  },
  {
    path: "/register",
    className: "border border-transparent hover:bg-transparent px-0 ",
    leftIcon: (
      <div className={`relative cursor-pointer`}>
        <div
          style={{ minHeight: "20px", minWidth: "20px" }}
          className="select-none absolute max-h-8 max-w-8 text-primaryBlue font-bold flex justify-center items-center text-sm -right-2 -top-2 bg-white rounded-full shadow-lg border"
        >
          2
        </div>

        <FaShoppingCart className="text-[#0072b1] text-md ml-4" size={25} />
      </div>
    ),
  },
  {
    path: "/register",
    className: "border border-transparent hover:bg-transparent ",
    leftIcon: (
      <div className="relative cursor-pointer">
        <div
          style={{ minHeight: "20px", minWidth: "20px" }}
          className="select-none absolute max-h-8 max-w-8 text-primaryBlue font-bold   flex justify-center items-center text-sm -right-1 -top-1 bg-white rounded-full shadow-lg border"
        >
          0
        </div>

        {/* <Link to={"/packages#coins_purchase"}> */}
        <Image
          src={coin}
          className="text-md ml-4 coin-icon"
          width="30"
          height="30"
          id="coinIcon"
          alt="coin"
        />
        {/* </Link> */}
      </div>
    ),
  },
];
