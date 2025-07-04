import React from "react";
import { MdOutlinePlayCircleOutline } from "react-icons/md";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[650px] flex items-center bg-black bg-cover" // Added bg-black here, and bg-cover bg-center
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
     
      <div className="absolute inset-0 bg-black opacity-60  blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-white max-w-[960px]">
          <div className="flex items-center gap-2 text-xl mb-2 ">
            <MdOutlinePlayCircleOutline size={22} />
            Learn about B2Bwholesale.com
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            The leading B2B ecommerce platform for global trade
          </h1>
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg max-w-2xl">
            <input
              type="text"
              placeholder="Search products or suppliers"
              className="flex-grow px-4 py-3 outline-none text-gray-700"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-semibold">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
