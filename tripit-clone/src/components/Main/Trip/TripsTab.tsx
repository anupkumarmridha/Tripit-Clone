import React, { useState } from 'react';
import TabNavigation from './TabNavigation';
import TravelerFilter from './TravelerFilter';
import TripsList from './TripsList';
import Pagination from './Pagination';
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useAllTrips } from '../../../hooks/useTrip';
import { ClipLoader } from 'react-spinners';

const TripsTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Upcoming Trips');
  const [activeTravelerType, setActiveTravelerType] = useState('Traveler');
  const [currentPage, setPage] = useState(1);

  const { data: tripStates, isLoading, isError, error } = useAllTrips();

  // Transform TripState[] to Trip[]
  const trips = tripStates?.map((tripState) => ({
    id: tripState._id, 
    title: tripState.tripName,
    location: tripState.destination,
    date: `${tripState.startDate} - ${tripState.endDate}`,
    duration: calculateTripDuration(tripState.startDate, tripState.endDate),
    imageUrl: tripState.imagePreview,
  })) || [];

  return (
    <div className="container mx-auto p-4">
      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Traveler Filter */}
      <div className="flex justify-between items-center py-4">
        <Link to={"/app/trip/create"} className="flex items-center text-primary hover:text-secondary font-semibold">
          <span className="mr-2 text-2xl"><IoIosAddCircleOutline /></span> Add a Trip
        </Link>
        <TravelerFilter activeTravelerType={activeTravelerType} setActiveTravelerType={setActiveTravelerType} />
      </div>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="flex justify-center items-center my-4">
          <ClipLoader size={50} color={"#123abc"} />
        </div>
      )}

      {/* Error Message */}
      {isError && (
        <div className="text-red-500 text-center my-4">
          {error instanceof Error ? error.message : 'Failed to fetch trips.'}
        </div>
      )}

      {/* Trips List */}
      {!isLoading && !isError && trips && (
        <TripsList trips={trips} />
      )}

      {/* Pagination */}
      <Pagination currentPage={currentPage} setPage={setPage} />
    </div>
  );
};

// Helper function to calculate trip duration
const calculateTripDuration = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const duration = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return `${duration} days`;
};

export default TripsTab;
