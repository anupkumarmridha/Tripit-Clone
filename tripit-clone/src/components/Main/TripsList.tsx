import React from 'react';
import TripCard from './TripCard';
import NoTrips from './NoTrips';

interface Trip {
  id: number;
  title: string;
  location: string;
  date: string;
  duration: string;
  imageUrl: string;
}

interface TripsListProps {
  trips: Trip[];
}
const TripsList: React.FC<TripsListProps> = ({ trips }) => {
  if (trips.length === 0) {
    return <NoTrips activeTab="Upcoming Trips" />;
  }

  return (
    <div>
      <button className="mt-4 px-4 py-2 mb-3 bg-blue-500 text-white rounded">
        Add a Trip
      </button>
      {trips.map((trip) => (
        <TripCard key={trip.id} {...trip} />
      ))}
    </div>
  );
};

export default TripsList;
