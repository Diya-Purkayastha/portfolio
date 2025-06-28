import React from 'react';
// import profile from '../assets/profile.jpg';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className="px-6 py-10 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* <img
            src={profile}
            alt="Debopriya Das Purkayastha"
            className="rounded-2xl w-64 h-64 object-cover inline-block border-4 border-primary shadow-lg"
          /> */}
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold mb-2">Debopriya Das Purkayastha</h1>
          <h2 className="text-xl text-primary mb-4">Full Stack Web Developer</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I’m a 4th-year CSE student passionate about building efficient, user-friendly web applications. With 12+ full-stack projects completed, I specialize in React, Node.js, MongoDB, and Firebase.
          </p>

          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div><strong>Birthday:</strong> 25 Aug, 2002</div>
            <div><strong>Age:</strong> 22</div>
            <div><strong>Address:</strong> Bangladesh</div>
            <div><strong>Email:</strong> diyadaspurkayastha@gmail.com</div>
            <div><strong>Phone:</strong> +880123456789</div>
            <div><strong>Freelance:</strong> Available</div>
          </div>

          {/* CV Button */}
          <a
            href="/cv.pdf"
            download
            className="btn btn-primary mt-6 inline-flex items-center gap-2"
          >
            <FaDownload /> Download CV
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
