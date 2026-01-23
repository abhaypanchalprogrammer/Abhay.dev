import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 md:px-20 flex flex-col items-center"
    >
      <h2 className="text-5xl font-bold text-white mb-12">Contact Me</h2>

      <p className="text-gray-300 text-lg mb-8 text-center max-w-xl">
        I'm currently open to new opportunities. Feel free to reach out via
        email or connect with me on my professional profiles.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <a
          href="mailto:abhaypanchal2525@gmail.com"
          className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/20 backdrop-blur-2xl text-white hover:bg-white/10 transition-all duration-300"
        >
          <FaEnvelope className="text-cyan-400 text-2xl" />
          abhaypanchal2525@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/abhay-panchal-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/20 backdrop-blur-2xl text-white hover:bg-white/10 transition-all duration-300"
        >
          <FaLinkedin className="text-blue-500 text-2xl" />
          LinkedIn
        </a>

        <a
          href="https://github.com/abhaypanchalprogrammer"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/20 backdrop-blur-2xl text-white hover:bg-white/10 transition-all duration-300"
        >
          <FaGithub className="text-gray-300 text-2xl" />
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
