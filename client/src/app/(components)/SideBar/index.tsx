"use client";

import { Menu } from "lucide-react";
import React from "react";

type Props = {};

const SideBar = () => {
  return (
    <div>
      <div className="flex gap-3 justify-between md:justify-normal items-center p-8">
        <div className="">logo</div>
        <h1 className="font-extrabold text-2xl"> Stocks360</h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* LINKS */}
      <div className="flex-grow mt-8">
        {/* links will come here */}
      </div>
      {/* FOOTER */}
      <div className="">
        <p className=" text-center text-xs text-gray-500">&copy; 2024 Stocks360</p>
      </div>
    </div>
  );
};

export default SideBar;
