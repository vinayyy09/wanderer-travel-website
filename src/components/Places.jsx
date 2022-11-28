import React from "react";
import beach1 from "../assets/beach1.jpg";
import beach2 from "../assets/beach2.jpg";
import beach3 from "../assets/beach3.jpg";
import beach4 from "../assets/beach4.jpg";
import beach5 from "../assets/beach5.jpg";
import beach6 from "../assets/beach6.jpg";
import PlacesCards from "./PlacesCards";

const Places = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 object-cover gap-4">
      <PlacesCards bg={beach1} text={"Caribbean"} />
      <PlacesCards bg={beach2} text={"Hawaii"} />
      <PlacesCards bg={beach3} text={"Jamaica"} />
      <PlacesCards bg={beach4} text={"Boro Boro"} />
      <PlacesCards bg={beach5} text={"Bali"} />
      <PlacesCards bg={beach6} text={"Maldives"} />
    </div>
  );
};

export default Places;
