import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-base-content py-10 px-6 md:px-20 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo or Name */}
       
        <div className="flex gap-1 items-center" >
           <img src="https://i.ibb.co/MxbT95CJ/logo.png" className='w-10 rounded-full h-10' alt="" /> 
           <h2 className="text-2xl font-bold text-primary">Diya</h2></div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://x.com/diyapurkaystha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-white transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.behance.net/diyapurkayastha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-white transition"
          >
            <FaBehance size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-white transition"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://github.com/Diya-Purkayastha/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-accent text-sm text-center md:text-right">
          © 2025. All rights reserved by <span className="text-primary">Diya Purkayastha</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
