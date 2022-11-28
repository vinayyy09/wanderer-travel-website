import React from "react";
import main from "../assets/resort1.jpg";
import main2 from "../assets/resort2.jpg";
import main3 from "../assets/resort3.jpg";
import main4 from "../assets/resort4.jpg";
import main5 from "../assets/resort5.jpg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4">
      <h1 className="font-black text-center text-cyan-800">All-Inclusive Resorts</h1>
      <p className="text-center py-4 text-cyan-800">On the Best Beaches of the World.</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={main} alt="/" />
        <img className="w-full h-full object-cover" src={main2} alt="/" />
        <img className="w-full h-full object-cover" src={main3} alt="/" />
        <img className="w-full h-full object-cover" src={main4} alt="/" />
        <img className="w-full h-full object-cover" src={main5} alt="/" />
      </div>
    </div>
  );
};

export default Destinations;
