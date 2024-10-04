import React, { useState } from 'react';
import logo from '../../assets/logo-tripit.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSortDown } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

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
          style={{ width: isMobileMenuOpen ? '50%' : 'auto' }}
        >
          <ul className="md:flex md:space-x-8 space-y-4 md:space-y-0 py-6 md:py-0 px-4 md:px-0 items-center justify-center">
            <li><a href="/tripit" className="block text-gray-950 hover:text-primary">TripIt</a></li>
            <li><a href="/tripit-pro" className="block text-gray-950 hover:text-primary">TripIt Pro</a></li>
            <li><a href="/how-it-works" className="block text-gray-950 hover:text-primary">How It Works</a></li>
            <li><a href="/pricing" className="block text-gray-950 hover:text-primary">Pricing</a></li>
            <li><a href="/sap-concur" className="block text-gray-950 hover:text-primary">SAP Concur</a></li>
            <li><a href="/sign-in" className="block text-gray-950 hover:text-primary">Sign In</a></li>
            <li>
              <a
                href="/sign-up"
                className="text-primary border-2 border-primary rounded-sm text-base font-semibold px-3.5 py-2 w-auto text-center hover:bg-primary hover:text-white transition duration-500 ease-in-out"
              >
                Sign Up—It's Free!
              </a>
            </li>
            <li className="relative">
              <button
              className="flex items-center text-primary border-2 border-primary rounded-sm text-xs font-bold px-3.5 py-1.5 w-auto text-center hover:bg-primary hover:text-white transition duration-500 ease-in-out"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
              <span className="mr-2">
              <FontAwesomeIcon icon={faGlobe} />
              </span>
              EN
              
              <span className="ml-2 mb-2">
              <FontAwesomeIcon icon={faSortDown} className='text-xs'/>
              </span>
              </button>
              {isDropdownOpen && (
              <div className="absolute right-0 mt-2 md:mt-0 md:top-full w-48 bg-white border border-gray-300 rounded-md shadow-lg">
              <a href="/en-uk" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">English (UK)</a>
              <a href="/fr" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Français</a>
              <a href="/de" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Deutsch</a>
              <a href="/es-co" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Español (Latinoamérica)</a>
              <a href="/es" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Español (España)</a>
              </div>
              )}
            </li>
            <li className="border-t border-gray-300 pt-4 md:border-0 md:pt-0">
              <div className="flex justify-center space-x-6">
                {/* <a href="https://www.instagram.com/tripitcom/" className="fab fa-instagram text-gray-700 text-xl hover:text-blue-600"></a>
                <a href="https://www.facebook.com/tripitcom" className="fab fa-facebook text-gray-700 text-xl hover:text-blue-600"></a>
                <a href="https://www.twitter.com/tripit" className="fab fa-twitter text-gray-700 text-xl hover:text-blue-600"></a>
                <a href="https://www.linkedin.com/company/tripit" className="fab fa-linkedin text-gray-700 text-xl hover:text-blue-600"></a>
                <a href="https://www.youtube.com/user/tripitvideos" className="fab fa-youtube text-gray-700 text-xl hover:text-blue-600"></a> */}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
