import React from "react";
import logo from "../../public/QT-banner.png";

const Logo = () => {
  return (
    <>
      <div className="flex items-center justify-start">
        <img src={logo} alt="logo" className="w-auto h-12 lg:w-[280px] lg:h-14" />
        
      </div>
    </>
  );
};

export default Logo;
