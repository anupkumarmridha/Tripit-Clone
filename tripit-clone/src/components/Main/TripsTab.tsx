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
      imageUrl: 'https://yourimageurl.com/image.jpg',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Traveler Filter */}
      <TravelerFilter
        activeTravelerType={activeTravelerType}
        setActiveTravelerType={setActiveTravelerType}
      />
      {/* Trips List */}
      <TripsList trips={trips} />
      {/* Pagination */}
      <Pagination currentPage={currentPage} setPage={setPage} />
    </div>
  );
};

export default TripsTab;
