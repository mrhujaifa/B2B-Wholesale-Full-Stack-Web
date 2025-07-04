import React from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const NotFound = () => {
  return (
    <div>
      <header className="bg-[#010100e9] shadow-2xl fixed top-0 right-0 left-0 z-20">
        <Header />
      </header>

      <div className="flex flex-col items-center justify-center h-screen  text-center px-6">
        <img
          src="https://i.postimg.cc/MGm3qSSf/20602774-6339704.jpg"
          alt="404 Illustration"
          className="w-72 md:w-96 mb-8 "
        />
        <h1 className="text-6xl font-extrabold text-[#222] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Oops! Page not found.
        </h2>
        <p className="text-gray-500 max-w-md mb-6">
          The page you’re looking for doesn’t exist. It might have been moved or
          deleted. No worries — let’s get you back on track.
        </p>
        <Link
          to="/"
          className="flex items-center gap-2 bg-[#4e2600] hover:bg-[#3a1b00] text-white px-6 py-3 rounded-full transition"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default NotFound;
