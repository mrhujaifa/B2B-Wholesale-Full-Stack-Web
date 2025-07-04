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

const Header = () => {
  const { user, logOut } = use(AuthContext);
  const [open, setOpen] = useState(false);

  const navLink = (
    <>
      <Link className="relative group hidden lg:block md:block">
        All Category
        <ul className="absolute left-0 top-full mt-2 p-10 w-200 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-20">
          <AllCategories></AllCategories>
        </ul>
      </Link>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/allproducts"}>All product</NavLink>
      <NavLink to={"/addProducts"}>Add Product</NavLink>
      <NavLink to={"/myproducts"}>My product</NavLink>
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
        <div className="flex items-center mt-2 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="text-white  w-1 mx-2 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
            <span className="text-xl flex items-center gap-2 px-6 lg:px-0">
              <img className="w-8 lg:w-10 " src="/web-logo.png" alt="" />
              <p className=" font-bold hidden lg:block">
                <span className="text-orange-600">B2B </span>
                <span className="text-orange-500 text-sm">wholesale</span>
              </p>
            </span>
          </div>
          <div className="navbar-center hidden lg:flex">
            {/* <ul className="menu menu-horizontal px-1 text-white gap-5 ">
              {navLink}
            </ul> */}
          </div>
          <div className="navbar-end gap-3 lg:gap-6 items-center flex">
            <div className="">
              <p className="text-white lg:text-[11px] text-[9px] ">Deliver:</p>

              <span className="flex gap-1 items-center ">
                <img className="w-4 lg:w-5" src="/Bangladesh.png" alt="" />
                <p className=" text-[7px] lg:text-[11px] font-semibold text-white">BD</p>
              </span>
            </div>

            {/* cart icone */}
            <Link to={"/cart"}>
              <PiShoppingCartSimple size={24} color="white" />
            </Link>
            {user ? (
              <>
                <div>
                  <LuMessageSquareText size={22} color="white" />
                </div>
                <div>
                  <LuClipboardList size={23} color="white" />
                </div>
                <div className="relative inline-block text-left">
                  <div onClick={handleToggle} className="cursor-pointer">
                    <div className="avatar w-14 lg:w-15">
                      <div className="ring-primary ring-offset-base-100 lg:w-11 mx-3 rounded-full ring-2 ring-offset-2">
                        <img src={user.photoURL} alt="User" />
                      </div>
                    </div>
                  </div>
                  {open && (
                    <div className="absolute right-0 mt-3 w-48 origin-top-right rounded-md shadow-lg bg-white dark:bg-[#1f2937] ring-1 ring-black ring-opacity-5 z-10">
                      <div className="py-1 px-2">
                        <p className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 font-medium">
                          {user.displayName}
                        </p>
                        <button
                          onClick={() => alert("Profile clicked")}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          Profile
                        </button>
                        <button
                          onClick={handleLogOut}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          Log Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
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
                    className="border text-md font-medium bg-orange-600 px-4 py-1 rounded-2xl text-white hover:bg-none border-orange-300"
                  >
                    Register
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
