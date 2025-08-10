import React from "react";
import { NavLink } from "react-router";
import { AiOutlineBars } from "react-icons/ai";

const Nav = ({ navLink }) => {
  return (
    <div>
      <div className="hidden lg:block md:block">
        <nav className="flex lg:gap-66 py-2 text-sm">
          <div className="">
            <div className="flex items-center gap-2">
              <div>
                <AiOutlineBars size={17} />
              </div>
              <div className="flex items-center gap-4 lg:gap-7">{navLink}</div>
            </div>
          </div>
          <div className="lg:navbar-end">
            <ul className="flex items-center gap-4 lg:gap-7">
              <NavLink to={"/coming-soon"}>Buyer Central</NavLink>
              <NavLink to={"/coming-soon"}>Gift Cards</NavLink>
              <NavLink to={"/coming-soon"}>Customer Service</NavLink>
              {/* <NavLink to={""}>Become a supplier</NavLink> */}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
