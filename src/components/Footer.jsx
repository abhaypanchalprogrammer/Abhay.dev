import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-10 px-6 md:px-20 bg-black/5 backdrop-blur-3xl border-t  flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-2xl font-bold text-white">Abhay.dev</h1>
        <p className="text-gray-400 mt-1 text-sm">
          © {new Date().getFullYear()} Abhay Panchal. All rights reserved.
        </p>
      </div>

      <div className="flex gap-6 text-white">
        <a
          href="#home"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#project"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          Projects
        </a>
        <a
          href="#skills"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          Contact
        </a>
      </div>

      <div className="flex gap-5 text-white text-xl">
        <a
          href="https://github.com/abhaypanchalprogrammer"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abhaypanchal/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:abhaypanchal2525@gmail.com"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

