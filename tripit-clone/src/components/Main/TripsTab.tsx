import React, { useState } from 'react';
import TabNavigation from './TabNavigation';
import TravelerFilter from './TravelerFilter';
import TripsList from './TripsList';
import Pagination from './Pagination';

const TripsTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Upcoming Trips');
  const [activeTravelerType, setActiveTravelerType] = useState('Traveler');
  const [currentPage, setPage] = useState(1);

  const trips = [
    {
      id: 1,
      title: 'test',
      location: 'Kolkata, India',
      date: 'Oct 6 - 16, 2024',
      duration: '11 days',
      imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipMHvkB151icA3Pa0YFWpakcpCv_LplFa1gorz6j=w1080-h624-n-k-no',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Traveler Filter */}
      <div className="flex justify-between items-center py-4">
      <button className="flex items-center text-primary hover:text-secondary font-semibold">
        <span className="mr-2 text-lg">+</span> Add a Trip
      </button>
      <TravelerFilter activeTravelerType={activeTravelerType} setActiveTravelerType={setActiveTravelerType} />
    </div>
     
      {/* Trips List */}
      <TripsList trips={trips} />
      {/* Pagination */}
      <Pagination currentPage={currentPage} setPage={setPage} />
    </div>
  );
};

export default TripsTab;
