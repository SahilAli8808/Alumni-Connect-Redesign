import React from 'react'
import { Link } from 'react-router-dom';
import { getLoggedIn } from '../../services/authService';
import { toast, ToastContainer } from 'react-toastify';
import noDataIllustration from '../../assets/img/no_data.svg';  
import { useEffect } from 'react';



function NotLoggedIn(props) {
    useEffect(() => {
        // If not logged in, show a toast

          toast.error('Please log in to access this page');
        
      }, []);
  return (
    <>
     
      <img src={noDataIllustration} alt="No Data Illustration" className="flex items-center h-20 w-20" />
      <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">You're Not Logged In</h1>
          <p className="text-gray-600 mb-4">Please log in to access our {props.text} Tab.</p>
          <Link
      to="/login"
      className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium"
    >
      Login
    </Link>
        </div>
    </>
  )
}

export default NotLoggedIn
