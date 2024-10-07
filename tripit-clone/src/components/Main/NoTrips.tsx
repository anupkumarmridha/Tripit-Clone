import React from 'react';

interface NoTripsProps {
  activeTab: string;
}

const NoTrips: React.FC<NoTripsProps> = ({ activeTab }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>No {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Trips</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Add a Trip
      </button>
    </div>
  );
};

export default NoTrips;
