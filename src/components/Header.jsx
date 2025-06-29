import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#212428] shadow-md">
      <div className="navbar px-4 md:px-10">
        <div className="flex-1">
          <div className='flex gap-1 items-center'>
            <img src="https://i.ibb.co/MxbT95CJ/logo.png" className='w-10 rounded-full h-10' alt="" />
          <h1 className="text-2xl font-bold text-[#ff014f]">Diya</h1>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 font-medium">
          {['home', 'about', 'skills', 'portfolio', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-[#ff014f]"
              className="cursor-pointer hover:text-[#ff014f] transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-[#ff014f]">
            {isOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#212428] border-t border-[#333] px-4 pb-4 pt-2 space-y-2 text-center font-medium">
          {['home', 'about', 'skills', 'portfolio', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth
              duration={500}
              onClick={closeMenu}
              className="block py-2 text-base text-[#c4cfde] hover:text-[#ff014f] transition cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
