import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUser, faComments, faBars } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../ui/Dropdown';
import logo from '../../assets/logo-tripit.svg';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/app/main">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Navbar Links for Desktop */}
          <div className="hidden md:flex space-x-4">
            <a href="/trips" className="text-gray-800 font-bold hover:underline">
              Trips
            </a>
            <Dropdown
              defaultOption="Support"
              options={[
                { label: 'Help Center', href: '/help' },
                { label: 'Contact Us', href: '/contact' },
              ]}
            />
            <Dropdown
              defaultOption={
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faComments} className="mr-2" />
                  Chat
                </span>
              }
              options={[
                { label: 'General Chat', href: '/general-chat' },
                { label: 'Support Chat', href: '/support-chat' },
              ]}
            />
            <Dropdown
              defaultOption={
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  User
                </span>
              }
              options={[
                { label: 'Account and Security', href: '/account-security' },
                { label: 'Profile', href: '/app/profile' },
                { label: 'Settings', href: '/settings' },
                { label: 'Sign Out', href: '/signout' },
              ]}
            />
            <Dropdown
              defaultOption={
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                  EN
                </span>
              }
              options={[
                { label: 'EN', href: '#' },
                { label: 'FR', href: '#' },
                { label: 'ES', href: '#' },
              ]}
            />
            <div className="flex items-center">
              <span className="text-gray-800 font-bold mr-2">New website</span>
              <input type="checkbox" className="toggle-checkbox" />
            </div>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/trips" className="text-gray-800 block px-3 py-2 rounded-md font-bold hover:underline">
              Trips
            </a>
            <Dropdown
              defaultOption="Support"
              options={[
                { label: 'Help Center', href: '/help' },
                { label: 'Contact Us', href: '/contact' },
              ]}
            />
            <Dropdown
              defaultOption={
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faComments} className="mr-2" />
                  Chat
                </span>
              }
              options={[
                { label: 'General Chat', href: '/general-chat' },
                { label: 'Support Chat', href: '/support-chat' },
              ]}
            />
            <Dropdown
              defaultOption={
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  User
                </span>
              }
              options={[
                { label: 'Account and Security', href: '/account-security' },
                { label: 'Profile', href: '/app/profile' },
                { label: 'Settings', href: '/settings' },
                { label: 'Sign Out', href: '/signout' },
              ]}
            />
            <Dropdown
              defaultOption={
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                  EN
                </span>
              }
              options={[
                { label: 'EN', href: '#' },
                { label: 'FR', href: '#' },
                { label: 'ES', href: '#' },
              ]}
            />
            <div className="flex items-center px-3 py-2">
              <span className="text-gray-800 font-bold mr-2">New website</span>
              <input type="checkbox" className="toggle-checkbox" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
