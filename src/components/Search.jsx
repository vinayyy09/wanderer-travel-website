import React from "react";
import { AiFillCustomerService } from "react-icons/ai";
import { FaCar } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { MdOutlineFastfood } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex-col justify-evenly">
        <div>
          <h1 className="font-black text-center text-cyan-800 pb-8">
            Enjoy more than three days of an ideal beach holiday
          </h1>
          <p className="py-4 text-center text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            natus repellat ratione tempora est. Quis, facere. Quaerat
            repudiandae assumenda, tempore, expedita numquam voluptates
            temporibus alias repellendus libero nam, nesciunt nemo nostrum
            tenetur. Aliquid modi ullam facilis ex labore architecto aliquam.
            Adipisci, voluptates. Placeat, architecto maiores, perspiciatis iure
            vel harum neque ab dolores dolorum nisi commodi velit dignissimos
            facere at numquam? Culpa, quae aut accusantium distinctio obcaecati
            illo maxime architecto odio id velit repellendus, ad cumque?
            Consequatur maxime mollitia facere nisi tempore animi sunt in
            exercitationem error, neque nihil. Molestias illum itaque, aut iure
            neque facere asperiores quo voluptatum in repellat?
          </p>
        </div>
        <h1 className="text-cyan-800 text-center mt-[8rem]">
          THINGS TO KNOW BEFORE TRAVELLING
        </h1>
        <div className="grid sm:grid-cols-4 gap-8 py-12">
          <div className="flex flex-col items-center text-center">
            <div className="py-6">
              <AiFillCustomerService size={40} color={"#00838F"} />
            </div>
            <div>
              <h3 className="py-2 font-bold text-cyan-700">Leading Services</h3>
              <p className="py-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, distinctio!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="py-6">
              <FaCar size={40} color={"#00838F"} />
            </div>
            <div>
              <h3 className="py-2 font-bold text-cyan-700">
                Travel Regulations
              </h3>
              <p className="py-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, recusandae!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="py-6">
              <BiBook size={40} color={"#00838F"} />
            </div>
            <div>
              <h3 className="py-2 font-bold text-cyan-700">
                Travel Regulations
              </h3>
              <p className="py-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, reiciendis!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="py-6">
              <MdOutlineFastfood size={40} color={"#00838F"} />
            </div>
            <div>
              <h3 className="py-2 font-bold text-cyan-700">
                Travel Regulations
              </h3>
              <p className="py-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, deserunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
