import React from 'react';
import { ButtonProps } from '../../types/types';

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', variant = 'primary', className = '' }) => {
  const baseStyles = "px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 w-full text-center";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    secondary: "bg-gray-100 text-black border border-gray-300 hover:bg-gray-200",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
