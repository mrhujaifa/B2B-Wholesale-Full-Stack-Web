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
      <div className="fixed z-999 left-0 right-0 top-0 bg-gradient-to-r from-[hsl(0,89%,11%)] to-[hsl(0,100%,50%)] ">
        {scrolled && <SwithcherNav></SwithcherNav>}
      </div>
    </>
  );
};

export default NavbarSwitcher;
