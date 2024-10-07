import React from 'react';

interface TravelerFilterProps {
  activeTravelerType: string;
  setActiveTravelerType: (type: string) => void;
}

const TravelerFilter: React.FC<TravelerFilterProps> = ({ activeTravelerType, setActiveTravelerType }) => {
  const travelerTypes = ["Traveler", "Non-Traveler", "All"];

  return (
    <div className="flex space-x-4 mb-4">
      {travelerTypes.map((type) => (
        <button
          key={type}
          onClick={() => setActiveTravelerType(type)}
          className={`px-4 py-2 rounded ${
            activeTravelerType === type
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default TravelerFilter;
