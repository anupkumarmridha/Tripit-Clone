import React, { useState } from 'react';
import logo from '../../assets/logo-tripit.svg';
import { Link } from 'react-router-dom';
import Dropdown from '../ui/Dropdown';
import SocialIcons from '../ui/SocialIcons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    <header className="bg-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-3 lg:py-4">
        <a href="/" className="flex items-center flex-shrink-0">
          <img src={logo} alt="TripIt" className="h-8" />
        </a>

        <button
          className="lg:hidden text-gray-700 focus:outline-none"
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
            } lg:flex items-center justify-center lg:space-x-4 w-full lg:w-auto absolute lg:relative top-16 lg:top-auto right-0 lg:right-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-10 lg:z-auto transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 py-6 lg:py-0 px-4 lg:px-0 items-center justify-center">
            <li><Link to="/tripit" className="block text-gray-950 hover:text-primary transition duration-300 text-base lg:text-lg">TripIt</Link></li>
            <li><a href="/tripit-pro" className="block text-gray-950 hover:text-primary transition duration-300 text-base lg:text-lg">TripIt Pro</a></li>
            <li><a href="/how-it-works" className="block text-gray-950 hover:text-primary transition duration-300 text-base lg:text-lg">How It Works</a></li>
            <li><a href="/pricing" className="block text-gray-950 hover:text-primary transition duration-300 text-base lg:text-lg">Pricing</a></li>
            <li><a href="/sap-concur" className="block text-gray-950 hover:text-primary transition duration-300 text-base lg:text-lg">SAP Concur</a></li>
            <li><Link to="/account/login" className="block text-gray-950 hover:text-primary transition duration-300 text-base lg:text-lg">Sign In</Link></li>
            <li>
              <Link
                to="/account/create"
                className="text-primary border-2 border-primary rounded-sm text-sm lg:text-base font-semibold px-3 py-1 lg:px-4 lg:py-2 w-auto text-center hover:bg-primary hover:text-white transition duration-500 ease-in-out whitespace-nowrap"
              >
                Sign Up—It's Free!
              </Link>
            </li>
            <li>
              <Dropdown
                defaultOption={
                  <span className="flex items-center">
                    <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                    EN
                  </span>
                }
                options={languageOptions}
              />
            </li>
            <li className="border-t border-gray-300 pt-4 lg:hidden">
              <SocialIcons />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;