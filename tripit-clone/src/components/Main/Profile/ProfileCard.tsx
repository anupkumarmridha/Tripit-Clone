import React from 'react';

interface ProfileCardProps {
  email: string;
  homeCity: string;
  onboardingDetails: {
    firstName: string;
    lastName: string;
    dob: string;
    receiveEmails: boolean;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ email, homeCity, onboardingDetails }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-md lg:max-w-lg">
      <div className="flex items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-indigo-600">
        <img
          className="w-24 h-24 rounded-full object-cover border-4 border-white"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
      </div>
      <div className="p-6">
        <h2 className="text-center text-xl font-semibold text-gray-800">
          {onboardingDetails.firstName} {onboardingDetails.lastName}
        </h2>
        <p className="text-center text-gray-600 mb-4">{email}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Home City:</span>
          <span className="text-gray-900">{homeCity}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Date of Birth:</span>
          <span className="text-gray-900">{onboardingDetails.dob}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Receive Emails:</span>
          <span className="text-gray-900">
            {onboardingDetails.receiveEmails ? 'Yes' : 'No'}
          </span>
        </div>
        <div className="flex justify-center">
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-md hover:bg-indigo-700 transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
