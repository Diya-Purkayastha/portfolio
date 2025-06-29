// src/components/HeroSection.jsx
import { Typewriter } from 'react-simple-typewriter';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaDribbble, FaTwitter, FaBehance } from 'react-icons/fa';
// import profile from '../assets/profile.png';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-auto md:h-[80vh] max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center bg-[#212428] text-white pt-20"
    >
     
      {/* Right: Text */}
      <motion.div
        className="md:w-1/2 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-lg font-semibold uppercase">Welcome to My World</h2>
        <h1 className=" text-4xl md:text-5xl font-bold leading-tight">
          Hi, I’m <span className="text-[#ff014f]">Diya</span>
        </h1>
        <h3 className="text-4xl md:text-5xl font-medium">
          A{' '}
          <span className="">
            <Typewriter
              words={['Frontend Developer', 'React Enthusiast', 'Web Designer']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto md:mx-0">
          I’m a passionate full-stack developer specializing in React, Node.js, and modern web
          technologies. I love building elegant, responsive web apps.
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-4 pt-4">
          <a href="https://x.com/diyapurkaystha" target="_blank" rel="noopener noreferrer" className="text-white bg-neutral p-4 rounded-xl shadow-[0_2px_16px_rgba(255,255,255,0.08)] hover:text-[#ff014f] transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white bg-neutral p-4 rounded-xl shadow-[0_2px_16px_rgba(255,255,255,0.08)] hover:text-[#ff014f] transition">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://github.com/Diya-Purkayastha/" target="_blank" rel="noopener noreferrer" className="text-white bg-neutral p-4 rounded-xl shadow-[0_2px_16px_rgba(255,255,255,0.08)] hover:text-[#ff014f] transition">
            <FaGithub size={20} />
          </a>
          <a href="https://www.behance.net/diyapurkayastha" target="_blank" rel="noopener noreferrer" className="text-white bg-neutral p-4 rounded-xl shadow-[0_2px_16px_rgba(255,255,255,0.08)] hover:text-[#ff014f] transition">
            <FaBehance size={20} />
          </a>
        </div>
        {/* Download CV */}
          <a
            href="/cv.pdf"
            download
            className="inline-block mt-4 px-6 py-2 border-2 border-[#ff014f] text-[#ff014f] rounded hover:bg-[#ff014f] hover:text-white transition"
          >
            Download CV
          </a>
      </motion.div>
       {/* Left: Image */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src='https://i.ibb.co/mVvfsScG/picofme-3.png'
          alt="Profile"
          className="w-72 h-72 md:w-[24rem] md:h-[24rem] rounded-full object-cover border-4 border-[#ff014f] shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
