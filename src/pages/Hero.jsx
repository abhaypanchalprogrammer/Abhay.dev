import React from "react";

const Hero = () => {
  return (
    <div
      id="home"
      className="animate-fade h-screen px-4 sm:px-10  md:px-20 flex flex-col justify-end items-start pb-20 sm:pb-12 md:pb-15 text-left"
    >
      <h2 className="text-6xl sm:text-6xl md:text-6xl lg:text-8xl font-bold mb-4 text-white">
        Abhay's <span className="text-cyan-500">Portfolio</span>
      </h2>
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-300">
        Frontend Developer
      </h3>
      <p className="text-base sm:text-lg md:text-xl max-w-full md:max-w-lg text-gray-400">
        I build modern, responsive, and interactive web applications using
        React, TailwindCSS, and JavaScript.
      </p>
      <a href="#project">
        <button className="cursor-pointer font-semibold mt-6 sm:mt-8 px-4 sm:px-6 py-1 sm:py-3 bg-cyan-400 hover:bg-cyan-300 text-black rounded-lg  ">
          View Projects
        </button>
      </a>
      <span className="w-full text-center relative top-16 bg-cyan-600 h-1"></span>
    </div>
  );
};

export default Hero;
