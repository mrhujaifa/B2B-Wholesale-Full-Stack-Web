import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";

const RootLayout = () => {
  return (
    <div>
      <section className="relative">
        <header className="absolute left-0 right-0 z-20 ">
          <Header></Header>
        </header>

        <div className="">
          <Banner></Banner>
        </div>
      </section>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
