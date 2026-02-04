

import React from "react";

function Navbar()  {
  return (
<nav className="w-full bg-violet-950 text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <h1 className="text-xl font-bold tracking-wide">
        iTask
      </h1>

      {/* Menu */}
      <ul className="flex gap-6 text-sm font-medium">
        <li className="cursor-pointer hover:text-blue-400 transition">
          Home
        </li>
        <li className="cursor-pointer hover:text-blue-400 transition">
          Tasks
        </li>
        <li className="cursor-pointer hover:text-blue-400 transition">
          About
        </li>
      </ul>
    </nav>
    
    
  );
};


export default Navbar;


