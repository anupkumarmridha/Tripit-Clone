import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { setField, setReceiveEmails, validateFields, resetForm } from '../../redux/onboardingSlice';
import InputField from '../ui/InputField';
import Button from '../ui/Button';

const Onboarding = () => {
  const dispatch: AppDispatch = useDispatch();
  
  const { firstName, lastName, dob, homeCity, receiveEmails, errors } = useSelector(
    (state: RootState) => state.onboarding
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setField({ field: e.target.name, value: e.target.value }));
  };

  const handleSubmit = () => {
    dispatch(validateFields());
    // Check for validation errors before submission
    if (!errors.firstName && !errors.lastName && !errors.dob && !errors.homeCity) {
      console.log('Form is valid. Submitting form...');
      dispatch(resetForm());
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Welcome Aboard</h1>
        <form onSubmit={(e) => e.preventDefault()} noValidate>
          <InputField
            label="First Name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            error={errors.firstName}
            required={true} 
          />
          <InputField
            label="Last Name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            error={errors.lastName}
            required={true} 
          />
          <InputField
            label="Date of Birth"
            type="text"
            name="dob"
            value={dob}
            onChange={handleChange}
            placeholder="mm/dd/yyyy"
            error={errors.dob}
            required={true} 
          />
          <InputField
            label="Home City"
            type="text"
            name="homeCity"
            value={homeCity}
            onChange={handleChange}
            placeholder="Enter Home City"
            error={errors.homeCity}
            required={true} 
          />
          <div className="flex items-center my-4">
            <input
              type="checkbox"
              id="receiveEmails"
              checked={receiveEmails}
              onChange={() => dispatch(setReceiveEmails(!receiveEmails))}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="receiveEmails" className="ml-2 text-sm text-gray-600">
              Receive emails about new features, product updates, and TripIt offers.
            </label>
          </div>
          <Button
            label="Continue"
            onClick={handleSubmit}
            variant="primary"
            className="mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default Onboarding;
