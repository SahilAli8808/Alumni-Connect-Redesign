import React from 'react';
import { getLoggedIn } from '../services/authService';
import { Link } from 'react-router-dom';

function Event() {
  const loggedIn = getLoggedIn();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loggedIn ? (
        <h1 className="text-4xl font-bold mb-4">Event</h1>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Event</h1>
          <h1 className="text-4xl font-bold mb-4">You're Not Logged In</h1>
          <p className="text-gray-600 mb-4">Please log in to access this content.</p>
          <Link
      to="/login"
      className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium"
    >
      Login
    </Link>
        </div>
      )}
    </div>
  );
}

export default Event;
