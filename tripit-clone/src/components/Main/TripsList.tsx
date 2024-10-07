import React from 'react';
import TripCard from './TripCard';

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
  return (
    <div>
      {trips.map((trip) => (
        <TripCard key={trip.id} {...trip} />
      ))}
    </div>
  );
};

export default TripsList;
