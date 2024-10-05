import React from 'react';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex justify-center space-x-6">
      <a href="#" className="hover:text-primary transition-all duration-300">
        <FaInstagram />
      </a>
      <a href="#" className="hover:text-primary transition-all duration-300">
        <FaFacebookF />
      </a>
      <a href="#" className="hover:text-primary transition-all duration-300">
        <FaTwitter />
      </a>
      <a href="#" className="hover:text-primary transition-all duration-300">
        <FaLinkedinIn />
      </a>
      <a href="#" className="hover:text-primary transition-all duration-300">
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialIcons;
