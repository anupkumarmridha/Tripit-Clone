import React, { useRef } from 'react';

interface CityDropdownProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  cityOptions: Array<{ label: string }>;
  onCitySelect: (city: string) => void;
  hideDropdown: () => void; 
  showDropdown: boolean; 
  error?: string;
}

const CityDropdown: React.FC<CityDropdownProps> = ({
  inputValue,
  onInputChange,
  isLoading,
  cityOptions,
  onCitySelect,
  hideDropdown, 
  showDropdown, 
  error,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCitySelection = (city: string) => {
    onCitySelect(city);
    hideDropdown(); // Hide dropdown after selection
    if (inputRef.current) {
      inputRef.current.blur(); // Remove focus from input to hide dropdown
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Home City
      </label>
      <div className="relative">
        <input
          ref={inputRef} // Attach ref to input
          type="text"
          value={inputValue}
          onChange={onInputChange}
          placeholder="Enter your home city"
          className="mb-2 w-full px-3 py-2 border rounded"
        />

        {isLoading && (
          <div className="absolute z-10 bg-white border border-gray-300 rounded w-full max-h-40 overflow-y-auto px-4 py-2 text-gray-500">
            Loading...
          </div>
        )}

        {/* Show dropdown only when `showDropdown` is true */}
        {!isLoading && showDropdown && inputValue && cityOptions.length > 0 && (
          <ul className="absolute z-10 bg-white border border-gray-300 rounded w-full max-h-40 overflow-y-auto">
            {cityOptions.map((city, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleCitySelection(city.label)}
              >
                {city.label}
              </li>
            ))}
          </ul>
        )}

        {/* "No results found" should only display when dropdown is visible */}
        {!isLoading && showDropdown && inputValue && cityOptions.length === 0 && (
          <div className="absolute z-10 bg-white border border-gray-300 rounded w-full max-h-40 overflow-y-auto px-4 py-2 text-gray-500">
            No results found.
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default CityDropdown;
