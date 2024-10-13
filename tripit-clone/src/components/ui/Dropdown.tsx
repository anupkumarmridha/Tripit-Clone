import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice'; 

interface DropdownProps {
  defaultOption: string | JSX.Element;
  options: { label: string, href: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ defaultOption, options }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    // Dispatch the logout action
    dispatch(logout());

    // Navigate to login page
    navigate('/account/login');
  };

  return (
    <div className="relative">
      <button
        className="flex items-center text-primary border-2 border-primary rounded-sm text-xs font-bold px-3.5 py-1.5 w-auto text-center hover:bg-primary hover:text-white transition duration-500 ease-in-out"
        onClick={toggleDropdown}
      >
        {defaultOption}
        <FontAwesomeIcon icon={faSortDown} className="ml-2 text-xs" />
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-20">
          {options.map(option => (
            option.label === 'Sign Out' ? (
              <button
                key={option.href}
                onClick={handleSignOut}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                {option.label}
              </button>
            ) : (
              <Link
                key={option.href}
                to={option.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                {option.label}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
