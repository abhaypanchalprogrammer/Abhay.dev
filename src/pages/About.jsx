import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full py-40 px-6 md:px-20">
      <div className="max-w-6xl ">
        <p className="text-sm uppercase tracking-[0.35em] text-white/40 mb-8">
          Who I Am
        </p>

        <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-tight text-white">
          I don't just build interfaces.
          <br />
          <span className="text-white/50">
            I engineer how users experience products.
          </span>
        </h2>

        <div className="w-24 h-px bg-white/30 my-14" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <p className="text-lg text-gray-300 leading-relaxed md:col-span-2">
            I'm a frontend developer focused on crafting scalable,
            performance-driven web applications. My work emphasizes clarity,
            structure, and intentional design decisions rather than visual
            noise.
          </p>

          <div className="space-y-6 text-sm uppercase tracking-widest text-white/60">
            <span className="block">- React Architecture</span>
            <span className="block">- UI Engineering</span>
            <span className="block">- Front-End Development</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
