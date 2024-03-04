import React from "react";

const Header = () => {
  return (
    <div className="bg-custom-blue text-white p-4 fixed w-full h-16 shadow-lg flex justify-between items-center z-50">
      <div className="flex items-center">
        <img
          src="https://w7.pngwing.com/pngs/604/618/png-transparent-larsen-toubro-limited-mmh-architectural-engineering-business-l-t-hydrocarbon-engineering-business-blue-text-trademark.png"
          alt="L&T Logo"
          className="w-10 h-10 mr-3"
        />
        <h1 className="text-2xl font-semibold tracking-tight">
          Larsen & Toubro Limited, Construction.
        </h1>
      </div>
      <div className="flex items-center">
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-sharp/24/FFFFFF/user-male-circle.png"
          alt="user-male-circle"
          className="mr-2"
        />
        <p className="text-sm">BUILDUP INFRASTRUCTURE PRIVATE LIMITED</p>
      </div>
    </div>
  );
};

export default Header;
