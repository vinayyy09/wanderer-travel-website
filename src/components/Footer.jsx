import React from "react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-black text-white py-y px-2">
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white">
        <h4 className="py-4">
          Wanderer.
          <br /> All rights reserved LLC 2022.
        </h4>
        <div className="flex justify-around sm:w-[300px] pt-4 pb-4 text-2xl">
          <FaFacebook className="text-blue-500" />
          <FaInstagram className="text-red-400" />
          <FaTwitter className="text-blue-300" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
