import React from 'react';
import TripCard from './TripCard';
import NoTrips from './NoTrips';
import { Trip } from '../../../types/types';

interface TripsListProps {
  trips: Trip[];
}
const TripsList: React.FC<TripsListProps> = ({ trips }) => {
  if (trips.length === 0) {
    return <NoTrips activeTab="Upcoming Trips" />;
  }

  return (
    <div>
  
      {trips.map((trip) => (
        <TripCard key={trip.id} {...trip} />
      ))}
    </div>
  );
};

export default TripsList;
