import React, { useState, useEffect } from "react";
import SwithcherNav from "./ScrollNavbar";


const NavbarSwitcher = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed z-999 left-0 right-0 top-0 shadow bg-white ">
        {scrolled && <SwithcherNav></SwithcherNav>}
      </div>
    </>
  );
};

export default NavbarSwitcher;
