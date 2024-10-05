import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, setHomeCity, setEmailError, setPasswordError, setCityError, resetForm } from '../../redux/authSlice';
import { RootState } from '../../redux/store';
import Button from '../ui/Button';
import InputField from '../ui/InputField';
import CityDropdown from '../ui/CityDropdown';
import { useCityAutocomplete } from '../../hooks/useCityAutocomplete';
import { validateEmail, validatePassword, validateCity } from '../../utils/validateAuth';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/logo-tripit.svg';
import OAuthButtons from './OAuthButtons';
import { useSignup, useLogin } from '../../hooks/useAuth';  

const Auth: React.FC<{ isLogin: boolean }> = ({ isLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password, homeCity, emailError, passwordError, cityError } = useSelector((state: RootState) => state.auth);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // Get city options from the API
  const { data: cityOptions, isLoading } = useCityAutocomplete(inputValue);

  // Use the custom hooks for signup and login
  const signupMutation = useSignup();
  const loginMutation = useLogin();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    dispatch(setHomeCity(value));
    setShowDropdown(true);
  };

  const handleCitySelect = (city: string) => {
    setInputValue(city);
    dispatch(setHomeCity(city));
    setShowDropdown(false);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  const handleValidation = () => {
    let isValid = true;

    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);
    const cityValidationError = validateCity(homeCity);

    dispatch(setEmailError(emailValidationError));
    dispatch(setPasswordError(passwordValidationError));
    dispatch(setCityError(cityValidationError));

    if (emailValidationError || passwordValidationError || (!isLogin && cityValidationError)) {
      isValid = false;
    }

    return isValid;
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (handleValidation()) {
  //     if (isLogin) {
  //       loginMutation.mutate({ email, password });
  //     } else {
  //       signupMutation.mutate({ email, password, homeCity });
  //     }
  //   }
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleValidation()) {
      console.log('Form is valid. Submitting data...');
      
      if (isLogin) {
        console.log('Attempting to log in with:', { email, password });
        loginMutation.mutate(
          { email, password },
          {
            onSuccess: (data) => {
              console.log('Login successful. Token received:', data);
              dispatch(resetForm());// Clear the form after successful login
       
              
            },
            onError: (error) => {
              console.error('Login failed:', error);
            },
          }
        );
      } else {
        console.log('Attempting to sign up with:', { email, password, homeCity });
        signupMutation.mutate(
          { email, password, homeCity },
          {
            onSuccess: (data) => {
              console.log('Signup successful. Token received:', data);
            
              dispatch(resetForm());// Clear the form after successful signup
              setInputValue('');  // Clear local state
              navigate('/app/onboarding');
            },
            onError: (error) => {
              console.error('Signup failed:', error);
            },
          }
        );
      }
    } else {
      console.log('Form is invalid.');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <div className='text-center'>
        <img src={logo} alt="Logo" className="w-32 mx-auto mb-6" />
      </div>
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
              cityOptions={cityOptions || []}
              onCitySelect={handleCitySelect}
              hideDropdown={hideDropdown}
              showDropdown={showDropdown}
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
          disabled={!isLogin && !agreedToTerms} 
        />
      </form>

      <OAuthButtons />
      <p className="mt-6 text-center text-gray-600">
        <Link
          to={isLogin ? '/account/create' : '/account/login'}
          className="font-semibold text-primary hover:text-secondary"
        >
          {isLogin ? "Don't have an account?" : 'Already a TripIt user? Sign In'}
        </Link>
      </p>
    </div>
  );
};

export default Auth;
