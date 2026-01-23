import React from "react";

const timelineData = [
  {
    title: "Started Frontend Journey",
    date: "2023",
    description:
      "Began learning HTML, CSS, and JavaScript. Built static websites and small UI projects.",
  },
  {
    title: "Started BCA from Silver Oak University",
    date: "2024",
    description:
      "Enrolled in BCA at Silver Oak University, parallelly developing frontend skills with HTML, CSS, JavaScript",
  },
  {
    title: "React & Tailwind Mastery",
    date: "2025",
    description:
      "Moved into React ecosystem, component-based architecture, and modern styling with TailwindCSS.",
  },
  {
    title: "Built Real Projects",
    date: "2026",
    description:
      "Developed NexVibe e-commerce, dashboards, and reusable frontend systems.",
  },
  {
    title: "DSA Journey Start",
    date: "2026",
    description:
      "Started my Data Structures & Algorithms journey with a focus on problem-solving.",
  },
];

const Journey = () => {
  return (
    <section id="journey" className="w-full py-24 px-6 md:px-20">
      <h2 className="text-5xl font-bold text-white text-center mb-20">
        My Journey
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 w-px h-full bg-white/20 -translate-x-1/2" />

        <div className="flex flex-col gap-16">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              +
              <span className="absolute left-1/2 top-6 w-4 h-4 rounded-full bg-cyan-400 -translate-x-1/2" />
              <div className="w-full md:w-[45%] p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                <span className="text-sm text-gray-400">{item.date}</span>
                <h3 className="text-2xl font-semibold text-white mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
