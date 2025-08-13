import React from "react";
import { Link, NavLink } from "react-router";
import { PiShoppingCartSimple } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi2";
import Nav from "../Nav/Nav";
import { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useState } from "react";
import { LuMessageSquareText } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import AllCategories from "../../Pages/AllCategories/AllCategories";
import { useEffect } from "react";
import ToggleSwitch from "../ThemeToggle/ThemeToggle";

const Header = ({ theme, toggleTheme }) => {
  const { user, logOut } = use(AuthContext);
  const [open, setOpen] = useState(false);

  const navLink = (
    <>
      <Link className="relative group hidden lg:block md:block">
        All Category
        <ul className="absolute left-0 top-full mt-2 p-10 w-200 bg-white    rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-20">
          <AllCategories></AllCategories>
        </ul>
      </Link>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/allproducts"}>All product</NavLink>
      {user ? (
        <>
          <NavLink to={"/addProducts"}>Add Product</NavLink>
          <NavLink to={"/myproducts"}>My product</NavLink>
        </>
      ) : null}
    </>
  );

  const handleToggle = () => setOpen(!open);

  const handleLogOut = () => {
    logOut()
      .then(() => alert("User logged out successfully"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mx-auto">
      <div className="py-2">
        <div className="flex items-center mt-2">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="    w-1 mx-2 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navLink}
              </ul>
            </div>
            <span className="text-xl flex items-center  gap-2 px-6 lg:px-0">
              <img className="w-13 lg:w-20 " src="/web-logo.png" alt="" />
              <p className=" font-bold hidden lg:block">
                {/* <span className="text-white">B2B </span>   */}
                <span className="text-orange-600 text-sm absolute left-47 top-1">
                  Wholesale
                </span>
              </p>
            </span>
          </div>
          <div className="navbar-center hidden lg:flex">
            {/* <ul className="menu menu-horizontal px-1 text-white gap-5 ">
              {navLink}
            </ul> */}
          </div>
          <div className="navbar-end  gap-3 lg:gap-6 items-center flex">
            <div className="hidden lg:block">
              <p className="text-white lg:text-[11px] text-[9px] ">Deliver:</p>

              <span className="flex gap-1 items-center ">
                <img className="w-4 lg:w-5" src="/Bangladesh.png" alt="" />
                <p className=" text-[7px] lg:text-[11px] font-semibold text-white">
                  BD
                </p>
              </span>
            </div>

            {/* cart icone */}
            <Link to={"/cart"}>
              <PiShoppingCartSimple size={24} color="white" />
            </Link>
            {user ? (
              <>
                {/* Icons Section */}
                <div className="flex items-center gap-3">
                  {/* Messages Icon */}
                  <button
                    className="relative group p-2 rounded-full  dark:bg-gray-800 
        hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 
        transition-all duration-300 shadow-sm hover:shadow-md 
        active:scale-95"
                  >
                    <LuMessageSquareText
                      size={20}
                      className="text-white dark:text-gray-200 group-hover:text-white transition-colors duration-300"
                    />
                    <span
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs 
        bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition 
        pointer-events-none whitespace-nowrap"
                    >
                      Messages
                    </span>
                  </button>

                  {/* Orders Icon */}
                  <button
                    className="relative group p-2 rounded-full dark:bg-gray-800 
        hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 
        transition-all duration-300 shadow-sm hover:shadow-md 
        active:scale-95"
                  >
                    <LuClipboardList
                      size={21}
                      className="text-white dark:text-gray-200 group-hover:text-white transition-colors duration-300"
                    />
                    <span
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs 
        bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition 
        pointer-events-none whitespace-nowrap"
                    >
                      Orders
                    </span>
                  </button>

                  {/* Theme Toggle */}
                  <ToggleSwitch theme={theme} toggleTheme={toggleTheme} />

                  {/* User Menu */}
                  <div className="relative inline-block text-left">
                    {/* Avatar */}
                    <div
                      onClick={handleToggle}
                      className="cursor-pointer group"
                    >
                      <div
                        className="ring-primary ring-offset-base-100 w-9 h-9 rounded-full ring-2 ring-offset-2 overflow-hidden 
          hover:scale-110 transition-transform duration-300 shadow-md"
                      >
                        <img
                          src={user.photoURL}
                          alt="User"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Dropdown Menu */}
                    {open && (
                      <div
                        className="absolute right-0 mt-3 w-56 origin-top-right rounded-xl shadow-lg backdrop-blur-lg 
            bg-white/70 dark:bg-gray-800/80 ring-1 ring-black/10 dark:ring-white/10 z-20 
            animate-slideDown"
                      >
                        <div className="py-2">
                          {/* User Name */}
                          <p className="px-4 py-2 text-sm font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200/50 dark:border-gray-700/50">
                            {user.displayName}
                          </p>

                          {/* Profile Button */}
                          <button
                            onClick={() => alert("Profile clicked")}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 
                hover:bg-gray-100/80 dark:hover:bg-gray-700/60 transition rounded-md"
                          >
                            View Profile
                          </button>

                          {/* Logout Button */}
                          <button
                            onClick={handleLogOut}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50/70 dark:hover:bg-gray-700/60 transition rounded-md"
                          >
                            Log Out
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Animations */}
                <style jsx>{`
                  @keyframes slideDown {
                    0% {
                      opacity: 0;
                      transform: translateY(-10px);
                    }
                    100% {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                  .animate-slideDown {
                    animation: slideDown 0.25s ease-out forwards;
                  }
                `}</style>
              </>
            ) : (
              <>
                <div className="flex items-center gap-1">
                  <HiOutlineUser size={23} color="white" />
                  <Link
                    to={"/SignIn"}
                    className="text-white text-[14px] lg:text-[16px] font-semibold"
                  >
                    Login
                  </Link>
                </div>
                {/* signUP btn */}
                <div>
                  <Link
                    to={"/register"}
                    className=" hidden lg:block  text-md font-medium bg-orange-600 px-3 py-1.5 rounded-lg text-white hover:bg-none border border-orange-500  "
                  >
                    Create account
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="text-white font-[600]">
        <Nav navLink={navLink}></Nav>
      </div>
    </div>
  );
};

export default Header;
