import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  name,
  onChange,
  placeholder,
  error,
  required = false
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [touched, setTouched] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          type={inputType}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={handleBlur} // Trigger validation when the user leaves the input field
          placeholder={placeholder}
          className="mb-2 w-full px-3 py-2 border rounded"
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-700"
          >
            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      {/* Show error only if the field is required, touched, and the value is empty */}
      {required && touched && !value && (
        <p className="text-red-500 text-sm">This field is required</p>
      )}
      {/* Optionally show the passed error if provided */}
      {error && !touched && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
