import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="animate-fadeIn h-16 fixed w-full top-0 text-gray-200 bg-black/5 backdrop-blur-3xl flex justify-between px-6 sm:px-10 md:px-20 items-center z-50">
      <h1 className="text-4xl font-bold text-cyan-300">Abhay.dev</h1>

      <div className="hidden lg:flex items-center gap-10 px-10 rounded-xl bg-black/5 backdrop-blur-2xl border border-white/10 text-lg">
        <a
          href="#home"
          className="px-5 py-2 hover:bg-cyan-400/90 hover:text-black hover:rounded-lg transition-all duration-300"
        >
          Home
        </a>
        <a
          href="#journey"
          className="px-5 py-2 hover:bg-cyan-400/90 hover:text-black hover:rounded-lg transition-all duration-300"
        >
          Journey
        </a>
        <a
          href="#contact"
          className="px-5 py-2 hover:bg-cyan-400/90 hover:text-black hover:rounded-lg transition-all duration-300"
        >
          Contact
        </a>
      </div>

      <button className="hidden lg:block text-lg px-10 py-1.5 rounded-xl bg-cyan-400 font-semibold text-black hover:bg-cyan-300 cursor-pointer">
        Resume
      </button>

      <div
        className="lg:hidden text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {isOpen && (
        <div className="absolute top-12 right-20 lg:hidden w-50 bg-black/90 backdrop-blur-md flex flex-col items-center py-6 gap-6 text-lg z-40">
          <a
            href="#home"
            className="px-5 py-2 hover:bg-white/90 hover:text-black rounded-xl transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#journey"
            className="px-5 py-2 hover:bg-white/90 hover:text-black rounded-xl transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Journey
          </a>
          <a
            href="#contact"
            className="px-5 py-2 hover:bg-white/90 hover:text-black rounded-xl transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a href="https://abhaypanchalprogrammer.github.io/Resume/Abhay-Resume.pdf">
          <button
            className="px-10 py-2 rounded-xl bg-white text-black hover:bg-black hover:text-white transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;

