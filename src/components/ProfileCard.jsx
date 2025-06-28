import React from 'react';
// import profile from '../assets/profile.jpg';
import { FaInstagram, FaGithub, FaLinkedin, FaDownload, FaEnvelope } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <div className="text-center py-8 px-4 md:px-6 w-full md:w-auto mx-auto">
      {/* Background image + profile overlay */}
      <div className="relative">
        <div className="h-40 w-full bg-gradient-to-tr from-primary to-secondary rounded-t-xl"></div>
        {/* <img
          src={profile}
          alt="Debopriya Das Purkayastha"
          className="w-28 h-28 object-cover rounded-full border-4 border-base-100 absolute left-1/2 transform -translate-x-1/2 -bottom-14"
        /> */}
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold">Debopriya Das</h2>
        <p className="text-sm text-gray-400 mb-4">Full Stack Developer</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-4 text-primary">
          <a href="https://instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/cv.pdf"
            download
            className="btn btn-outline btn-sm rounded-full"
          >
            <FaDownload className="mr-2" /> Download CV
          </a>
          <a
            href="#contact"
            className="btn btn-primary btn-sm rounded-full"
          >
            <FaEnvelope className="mr-2" /> Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
