import React from 'react';
import { Link, useLocation } from 'react-router';
import {
  FaUser, FaFileAlt, FaBriefcase, FaEnvelope, FaBlog, FaBars,
} from 'react-icons/fa';

const Sidebar = () => {
  const { pathname } = useLocation();
  const isActive = (path) =>
    pathname === path
      ? 'bg-primary text-white'
      : 'hover:bg-primary hover:text-white transition-colors';

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col justify-start items-center bg-red-200 w-20 py-6 space-y-6 shadow-xl h-screen sticky top-0 z-50">
        <Link to="/" className={`p-3 rounded-full ${isActive('/')}`} title="About"><FaUser /></Link>
        <Link to="/resume" className={`p-3 rounded-full ${isActive('/resume')}`} title="Resume"><FaFileAlt /></Link>
        <Link to="/portfolio" className={`p-3 rounded-full ${isActive('/portfolio')}`} title="Works"><FaBriefcase /></Link>
        <Link to="/blog" className={`p-3 rounded-full ${isActive('/blog')}`} title="Blog"><FaBlog /></Link>
        <Link to="/contact" className={`p-3 rounded-full ${isActive('/contact')}`} title="Contact"><FaEnvelope /></Link>
      </aside>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex justify-between items-center bg-base-200 px-4 py-3 fixed top-0 w-full z-50 shadow-md">
        <h1 className="font-bold text-lg flex items-center gap-2">
          <FaBars className="text-primary" /> Diya
        </h1>
        <div className="flex gap-4">
          <Link to="/" className={`p-2 ${isActive('/')}`}><FaUser /></Link>
          <Link to="/resume" className={`p-2 ${isActive('/resume')}`}><FaFileAlt /></Link>
          <Link to="/portfolio" className={`p-2 ${isActive('/portfolio')}`}><FaBriefcase /></Link>
          <Link to="/blog" className={`p-2 ${isActive('/blog')}`}><FaBlog /></Link>
          <Link to="/contact" className={`p-2 ${isActive('/contact')}`}><FaEnvelope /></Link>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
