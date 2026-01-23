import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  gap-8">
      <div className="relative w-40 h-40">
        <div className="absolute inset-0 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin-slow"></div>
        <div className="absolute inset-4 rounded-full border-2 border-cyan-300/50"></div>
      </div>

      <h1 className="text-7xl font-bold text-cyan-400 text-center animate-fadeIn">
        Welcome To Abhay's World
      </h1>
      <p className="text-gray-400 animate-fadeIn delay-200">
        Frontend Developer
      </p>

      <div className="w-80 h-1 bg-gray-700 rounded overflow-hidden">
        <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 loader-intro"></div>
      </div>
    </div>
  );
};

export default Loader;
