import React from 'react';

interface Trip {
  id: number;
  title: string;
  location: string;
  date: string;
  duration: string;
  imageUrl: string;
}

const TripCard: React.FC<Trip> = ({ title, location, date, duration, imageUrl }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mb-4 border border-gray-200">
      <div>
        <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
        <p className="text-gray-700">{location}</p>
        <p className="text-gray-500">{date} ({duration})</p>
        <div className="flex items-center space-x-4 mt-2 text-blue-600">
          <button className="text-sm flex items-center">
            <i className="material-icons mr-1">link</i>
          </button>
          <button className="text-sm flex items-center">
            <i className="material-icons mr-1">edit</i>
          </button>
          <button className="text-sm flex items-center">
            <i className="material-icons mr-1">more</i>
          </button>
        </div>
      </div>
      <img src={imageUrl} alt={title} className="w-48 h-32 rounded-lg object-cover" />
    </div>
  );
};

export default TripCard;
