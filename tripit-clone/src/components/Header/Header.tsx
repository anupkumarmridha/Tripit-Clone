import React, { useState } from 'react';
import logo from '../../assets/logo-tripit.svg';
import { Link } from 'react-router-dom';
import Dropdown from '../ui/Dropdown';
import SocialIcons from '../ui/SocialIcons';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const languageOptions = [
    { label: 'English (UK)', href: '/en-uk' },
    { label: 'Français', href: '/fr' },
    { label: 'Deutsch', href: '/de' },
    { label: 'Español (Latinoamérica)', href: '/es-co' },
    { label: 'Español (España)', href: '/es' },
  ];

  return (
    <header className="bg-white fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <a href="/" className="flex items-center">
          <img src={logo} alt="TripIt" className="h-8" />
        </a>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-2">
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
          </div>
        </button>

        <nav
          className={`${isMobileMenuOpen ? 'block' : 'hidden'
            } md:flex items-center justify-center md:space-x-8 w-full md:w-auto absolute md:relative top-16 md:top-auto right-0 md:right-auto bg-white md:bg-transparent shadow-lg md:shadow-none z-10 md:z-auto`}
        >
          <ul className="md:flex md:space-x-8 space-y-4 md:space-y-0 py-6 md:py-0 px-4 md:px-0 items-center justify-center">
            <li><Link to="/tripit" className="block text-gray-950 hover:text-primary">TripIt</Link></li>
            <li><a href="/tripit-pro" className="block text-gray-950 hover:text-primary">TripIt Pro</a></li>
            <li><a href="/how-it-works" className="block text-gray-950 hover:text-primary">How It Works</a></li>
            <li><a href="/pricing" className="block text-gray-950 hover:text-primary">Pricing</a></li>
            <li><a href="/sap-concur" className="block text-gray-950 hover:text-primary">SAP Concur</a></li>
            <li><Link to="/account/login" className="block text-gray-950 hover:text-primary">Sign In</Link></li>
            <li>
              <Link
                to="/account/create"
                className="text-primary border-2 border-primary rounded-sm text-base font-semibold px-3.5 py-2 w-auto text-center hover:bg-primary hover:text-white transition duration-500 ease-in-out"
              >
                Sign Up—It's Free!
              </Link>
            </li>
            <li>
              <Dropdown defaultOption={'EN'} options={languageOptions} />
            </li>
            <li className="border-t border-gray-300 pt-4 md:hidden">
              <SocialIcons />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
