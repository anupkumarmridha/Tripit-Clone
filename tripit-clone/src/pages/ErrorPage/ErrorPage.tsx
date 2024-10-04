import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
            <p className="text-xl text-gray-700 mb-8">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
            Go back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;