import React from 'react';

interface TravelerFilterProps {
  activeTravelerType: string;
  setActiveTravelerType: (type: string) => void;
}

const TravelerFilter: React.FC<TravelerFilterProps> = ({ activeTravelerType, setActiveTravelerType }) => {
  const travelerTypes = ["Traveler", "Non-Traveler", "All"];

  return (
    <div className="flex border border-primary rounded-md overflow-hidden">
      {travelerTypes.map((type, index) => (
        <button
          key={type}
          onClick={() => setActiveTravelerType(type)}
          className={`px-6 py-2 font-semibold transition-colors duration-300 ease-in-out focus:outline-none border-l border-r border-primary ${
            activeTravelerType === type
              ? "bg-primary text-white"
              : "text-secondary bg-white hover:bg-gray-100"
          } ${index === 0 ? "rounded-l-md border-l-0" : index === travelerTypes.length - 1 ? "rounded-r-md border-r-0" : ""}`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default TravelerFilter;