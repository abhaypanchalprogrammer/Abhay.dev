import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import nexvibe from "../assets/nexvibe.png";
import dashboard from "../assets/dashboard.png";

const projects = [
  {
    name: "NexVibe E-Commerce",
    description:
      "A modern e-commerce frontend built with React, TailwindCSS, and API integration.",
    image: nexvibe,
    liveLink: "https://nex-vibe-app.vercel.app/",
    githubLink: "https://github.com/abhaypanchalprogrammer/NexVibe",
    tags: ["React", "Tailwind", "API"],
  },
  {
    name: "Product Dashboard",
    description:
      "A responsive admin dashboard built with React, charts, and real-time stats.",
    image: dashboard,
    liveLink: "https://dashboardap.netlify.app/",
    githubLink: "https://github.com/abhaypanchalprogrammer/Dashboard",
    tags: ["React", "Charts", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <section id="project" className="w-full py-24 px-6 md:px-20">
      <p className="text-sm uppercase tracking-[0.35em] text-white/40 mb-8">
        My Works
      </p>
      <h2 className="text-5xl font-bold mb-20 text-white">Selected Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-3xl border border-white/10">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-6 transition-opacity duration-300">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl hover:text-cyan-400 transition-colors"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl hover:text-cyan-400 transition-colors"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.name}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-white/60">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="mt-8 w-12 h-px bg-white/30" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
