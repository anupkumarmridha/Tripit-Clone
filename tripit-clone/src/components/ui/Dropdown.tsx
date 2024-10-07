import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

interface DropdownProps {
  defaultOption: string | JSX.Element;
  options: { label: string, href: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ defaultOption, options }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
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
            <a
              key={option.href}
              href={option.href}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {option.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
