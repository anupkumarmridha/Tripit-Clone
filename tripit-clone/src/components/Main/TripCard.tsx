import React from 'react';
import { FaLink, FaEdit, FaEllipsisH } from 'react-icons/fa';

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
    <div className="flex justify-between items-start p-6 bg-white shadow-md rounded-lg mb-6 border border-gray-200">
      <div className="flex-1 mr-6">
        <h3 className="text-xl font-semibold text-primary mb-1">{title}</h3>
        <p className="text-md text-gray-700 mb-1">{location}</p>
        <p className="text-sm text-gray-500 mb-4">{date} ({duration})</p>
        <button className="flex items-center text-sm font-medium  text-primary">
          <span className="bg-primary rounded-full p-2 mr-2">
            <FaLink className="text-white mx-auto" />
          </span>
          Manage Sharing
        </button>

        <div className="py-2 flex items-center space-x-4 text-primary">


          <button className="flex items-center text-sm font-medium">
            <FaEdit className="mr-1" /> Edit Trip Info
          </button>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium ">
              <span className="bg-primary rounded-full p-2 mr-2">
                <FaEllipsisH className="mx-auto text-white" />
              </span>
              More Options <span className="ml-1">▼</span>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg p-2 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-200">
              <ul className="text-left">
                <li className="py-1 px-3 hover:bg-gray-100 cursor-pointer">Print Trip</li>
                <li className="py-1 px-3 hover:bg-gray-100 cursor-pointer">Merge Trip</li>
                <li className="py-1 px-3 hover:bg-gray-100 cursor-pointer">Delete Trip</li>
                <li className="py-1 px-3 hover:bg-gray-100 cursor-pointer">Export trip to calendar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src={imageUrl} alt={title} className="w-40 h-28 rounded-lg object-cover" />
    </div>
  );
};

export default TripCard;