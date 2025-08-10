import React from "react";

const AppLogo = () => {
  return (
    <span className="text-xl flex items-center gap-2 px-6 lg:px-0">
      <img className="w-8 lg:w-20 " src="/web-logo.png" alt="" />
      <p className=" font-bold hidden lg:block">
        {/* <span className="text-white">B2B </span>   */}
        <span className="text-[#ff6600] text-sm absolute left-47 top-1">
          Wholesale
        </span>
      </p>
    </span>
  );
};

export default AppLogo;
