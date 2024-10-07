import React from 'react';
import ProfileCard from '../../components/Main/Profile/ProfileCard';
import { useProfile } from '../../hooks/useUser'; 
import Navbar from '../../components/Main/Navbar';

const ProfilePage: React.FC = () => {
  const { data: profile, isLoading, isError, error } = useProfile();

  if (isLoading) {
    return <p className="text-center">Loading profile...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Error loading profile: {error?.message}</p>;
  }

  if (!profile) {
    return <p className="text-center">No profile data available</p>;
  }

  return (
    <div>

   
    <Navbar/>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ProfileCard
        email={profile.email}
        homeCity={profile.homeCity}
        onboardingDetails={profile.onboardingDetails}
      />
    </div>
    </div>
  );
};

export default ProfilePage;
