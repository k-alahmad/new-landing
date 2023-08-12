import React from "react";
import dubaiImage from "../../../../assets/images/aboutus/dubai.webp";
import logo from "../../../../assets/logos/white-logo.svg";

const About = () => {
  return (
    <div className="py-24 px-[5%] rounded-md ">
      <div
        style={{
          backgroundImage: `url(${dubaiImage})`,
        }}
        className="rounded-md bg-no-repeat bg-cover bg-center h-[500px]"
      >
        <div className="bg-black/50 h-full p-[5%]">
          <img src={logo} alt="AVA Logo" className="w-32 h-32" />
          <div className="md:grid md:grid-cols-2 place-items-center text-white py-10">
            <p className="font-bold text-big ">
              All you need about Dubai apartments, in one place
            </p>
            <p>
              Lorem ipsum dolor sit amet . The graphic and typographic operators
              know this well, in reality all the professions dealing with the
              universe of communication have a stable relationship Lorem ipsum
              dolor sit amet . The graphic and typographic operators know this
              well, in reality all the professions dealing with the universe of
              communication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
