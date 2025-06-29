// src/components/AboutSection.jsx
import profile from '../assets/Programming (1).gif';
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className=" mt-24 min-h-screen bg-[#0f0f0f] text-white px-6 md:px-20 py-20"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}>
        <h2 className="text-4xl font-bold">
          About <span className="text-[#ff014f]">Me</span>
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          I'm a passionate developer who enjoys turning ideas into reality with elegant front-end code and powerful backend logic.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={profile}
            alt="About Me"
            className="rounded-2xl w-full border-l-1 border-b-1 hover:scale-105 transition-transform max-w-md mx-auto"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold">
            Who <span className="text-[#ff014f]">I Am</span>
          </h3>
          <p className="text-gray-400">
            I'm Diya, a dedicated Frontend Developer with a strong background in React, TailwindCSS, and modern web development. I love building responsive, performant interfaces and enjoy working with real-world projects that solve problems.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#2a2a2a] hover:border-[#ff014f] transition">
              <h4 className="text-[#ff014f] text-lg font-semibold">3+ Years</h4>
              <p className="text-gray-400">Experience</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#2a2a2a] hover:border-[#ff014f] transition">
              <h4 className="text-[#ff014f] text-lg font-semibold">12 Projects</h4>
              <p className="text-gray-400">Completed</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#2a2a2a] hover:border-[#ff014f] transition">
              <h4 className="text-[#ff014f] text-lg font-semibold">B.Sc. CSE</h4>
              <p className="text-gray-400">AKTU University</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#2a2a2a] hover:border-[#ff014f] transition">
              <h4 className="text-[#ff014f] text-lg font-semibold">React</h4>
              <p className="text-gray-400">Core Stack</p>
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default About;
