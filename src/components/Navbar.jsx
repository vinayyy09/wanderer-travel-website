import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch, BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlane } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div className="flex">
        <h5 onClick={handleNav} className={logo ? "hidden" : "block text-2xl"}>
          Wanderer
        </h5>
        <p className="mt-3 ml-2">
          <FaPlane />
        </p>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Book</li>
        <li>Routes</li>
      </ul>
      <div className="hidden md:flex">
        <BsPerson className="mr-2" size={25} />
        <BiSearch size={25} />
      </div>

      {/* hamburger menu */}

      <div onClick={handleNav} className="block md:hidden z-10">
        {nav ? (
          <AiOutlineClose size={25} color={"#000"} />
        ) : (
          <BiMenu size={28} />
        )}
      </div>

      {/* mobile menu  */}

      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-[0] top-0 w-full bg-gray-100 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul className="text-black">
          <div className="flex">
            <h5 className="text-2xl">Wanderer</h5>
            <p className="mt-3 ml-2">
              <FaPlane />
            </p>
          </div>

          <li className="text-center text-lg">Home</li>
          <li className="text-center text-lg">Destinations</li>
          <li className="text-center text-lg">Book</li>
          <li className="text-center text-lg">Routes</li>
          <div className="flex flex-col">
            <button className="font-bold my-6 p-3 border rounded-lg border-black hover:bg-black hover:text-white">Search</button>
            <button className="font-bold my-6 p-3 border rounded-lg border-black hover:bg-black hover:text-white">Account</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
