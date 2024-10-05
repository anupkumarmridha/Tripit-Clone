import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, setHomeCity, setEmailError, setPasswordError, setCityError } from '../../redux/authSlice';
import { RootState } from '../../redux/store';
import Button from '../ui/Button';
import InputField from '../../components/ui/InputField';
import CityDropdown from '../../components/ui/CityDropdown';
import { useCityAutocomplete } from '../../hooks/useCityAutocomplete'; // Custom hook
import { validateEmail, validatePassword, validateCity } from '../../utils/validateAuth';
import { Link } from 'react-router-dom';

const Auth: React.FC<{ isLogin: boolean }> = ({ isLogin }) => {
  const dispatch = useDispatch();
  const { email, password, homeCity, emailError, passwordError, cityError } = useSelector((state: RootState) => state.auth);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [inputValue, setInputValue] = useState('');

  // Get city options from the API
  const { data: cityOptions, isLoading } = useCityAutocomplete(inputValue);

  const [filteredOptions, setFilteredOptions] = useState(cityOptions || []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    dispatch(setHomeCity(value));
    setFilteredOptions(cityOptions || []); // Update options as user types
  };

  const handleCitySelect = (city: string) => {
    setInputValue(city);
    dispatch(setHomeCity(city));
    clearOptions(); // Clear the options after selection
  };

  const clearOptions = () => {
    setFilteredOptions([]); // Clear options to collapse the dropdown
  };

  const handleValidation = () => {
    let isValid = true;

    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);
    const cityValidationError = validateCity(homeCity);

    dispatch(setEmailError(emailValidationError));
    dispatch(setPasswordError(passwordValidationError));
    dispatch(setCityError(cityValidationError));

    if (emailValidationError || passwordValidationError || cityValidationError) {
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleValidation()) {
      // Handle form submission
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-semibold text-gray-700 mb-6">
        {isLogin ? 'Sign In' : 'Sign Up'}
      </h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          placeholder="Enter your email"
          error={emailError}
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
          placeholder="Enter your password"
          error={passwordError}
        />

        {!isLogin && (
          <>
            <CityDropdown
              inputValue={inputValue}
              onInputChange={handleInputChange}
              isLoading={isLoading}
              cityOptions={filteredOptions || []}
              onCitySelect={handleCitySelect}
              clearOptions={clearOptions}  // Pass clearOptions function
              error={cityError}
            />

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={() => setAgreedToTerms(!agreedToTerms)}
                className="mr-2 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I accept the TripIt{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  User Agreement
                </a>{' '}
                and have read the{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  Privacy Statement
                </a>.
              </label>
            </div>
          </>
        )}

        <Button
          type="submit"
          label={isLogin ? 'Sign In' : 'Create an Account'}
          variant="primary"
          className="w-full mt-6"
          disabled={!isLogin && !agreedToTerms} // Disable button if terms are not agreed during sign-up
        />
      </form>

      <p className="mt-6 text-center text-gray-600">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <Link
          to={isLogin ? '/account/create' : '/account/login'}
          className="text-blue-500 hover:underline"
        >
          {isLogin ? 'Create one' : 'Sign In'}
        </Link>
      </p>
      <div className="mt-6 flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <Button variant="secondary" label="Google" />
          <Button variant="secondary" label="Facebook" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
