import React from "react";
import { FaCode, FaReact, FaTools } from "react-icons/fa";

const skillCategories = [
  {
    category: "Frontend",
    icon: <FaCode className="text-cyan-400/60 text-xl" />,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Library & Frameworks",
    icon: <FaReact className="text-cyan-400/60 text-xl" />,
    skills: ["React", "TailwindCSS"],
  },
  {
    category: "Tools",
    icon: <FaTools className="text-cyan-400/60 text-xl" />,
    skills: ["Git", "GitHub", "Vercel", "Netlify"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-32 px-6 md:px-20">
      <div className="max-w-6xl  mb-20">
        <p className="text-sm uppercase tracking-[0.35em] text-white/40 mb-6">
          Capabilities
        </p>
        <h2 className="text-6xl font-bold text-white leading-tight">
          Technical Skillset
        </h2>
      </div>

      <div className="max-w-6xl  grid grid-cols-1 md:grid-cols-3 gap-20">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="relative pl-6">
            <span className="absolute left-0 top-1 w-px h-full bg-white/15" />

            <div className="flex items-center gap-4  mb-6">
              {cat.icon}
              <h3 className="text-2xl font-semibold text-white">
                {cat.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-3">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-lg text-gray-300 relative after:content-['•'] after:ml-4 after:text-white/20 last:after:hidden"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
