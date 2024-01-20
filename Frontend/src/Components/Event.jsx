import React, { useEffect } from 'react';
import { getLoggedIn } from '../services/authService';
import { Link } from 'react-router-dom';
import NotLoggedIn from './NotLoggedIn';
import { ToastContainer, toast } from 'react-toastify';
import noDataIllustration from '../assets/img/no_data.svg';  // Replace with the actual path

function Event() {
  const loggedIn = getLoggedIn();

  useEffect(() => {
    // If not logged in, show a toast
    if (!loggedIn) {
      toast.error('Please log in to access this page');
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loggedIn ? (
        <h1 className="text-4xl font-bold mb-4">Event</h1>
      ) : (
        <>
          <img src={noDataIllustration} alt="No Data Illustration" className="mt-4 h-20 w-20" />
          <NotLoggedIn text="Event" />
        </>
      )}
    </div>
  );
}

export default Event;
