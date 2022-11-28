import React from "react";
import main from "../assets/beach-home.mp4";
import {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={main}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-slate-900/30" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1 className="font-black">First Class Travel</h1>
        <h3 className="py-4">Top Locations Worldwide</h3>
        <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
          <div>
            <input className="bg-transparent w-[300px] sm:w-[400px] font-[Raleway] focus:outline-none" type="text" placeholder="Search Destinations" />
          </div>
          <div>
            <button className="p-3 border rounded-lg"><AiOutlineSearch size={20}/></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
