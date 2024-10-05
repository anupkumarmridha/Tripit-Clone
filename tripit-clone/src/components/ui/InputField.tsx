import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange, placeholder, error }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mb-2 w-full px-3 py-2 border rounded"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
