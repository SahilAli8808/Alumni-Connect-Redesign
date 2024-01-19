import React from 'react';
import { FaHome, FaCalendar, FaBriefcase, FaNewspaper, FaEnvelope, FaUserTie, FaSearch, FaCommentDots, FaTicketAlt, FaEnvelopeOpenText, FaUserGraduate, FaSignInAlt, FaUpload, FaMeetup, FaVideo } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLoggedIn } from '../services/authService';
import { logout } from '../features/authSlice';
function Topbar() {
  const loggedIn = getLoggedIn();
  const dispatch = useDispatch();
  return (
    <div className="bg-slate-100 text-black p-4 flex justify-between items-center">
      <div className="flex items-center">
  <span> <FaUserTie className="mr-1 h-6 w-8" /></span>
  <h2 className="text-2xl font-extrabold text-gray-800">
  {/* icon here */}
  Alumni Connect</h2>
</div>

      <nav className="flex space-x-4 font-semibold  items-center">
       {loggedIn ? (
        <>
        <Link to="/dashboard" className="text-sm flex items-center">
          <FaHome className="mr-1" /> Dashboard
        </Link>
        </>
       ): (
        <>
        <Link to="/home" className="text-sm flex items-center">
          <FaHome className="mr-1" /> Home
        </Link>
        </>
       )}
      
        <Link to="/events" className="text-sm font-semibold  flex items-center">
          <FaCalendar className="mr-1" /> Events
        </Link>
        <Link to="/jobs" className="text-sm font-semibold  flex items-center">
          <FaBriefcase className="mr-1" /> Jobs
        </Link>
        <Link to="/newsletter" className="text-sm font-semibold  flex items-center">
          <FaNewspaper className="mr-1" /> Newsletters
        </Link>
        <Link to="/meeting" className="text-sm font-semibold  flex items-center">
          <FaVideo className="mr-1" /> Meeting
        </Link>
        <Link to="/bulk-upload" className="text-sm font-semibold  flex items-center">
          <FaUpload className="mr-1" /> Bulk Import
        </Link>
        {/* <Link to="/interview" className="text-sm flex items-center">
          <FaUserTie className="mr-1" /> Interview
        </Link> */}
        <Link to="/search-people" className="text-sm font-semibold flex items-center">
          <FaSearch className="mr-1" /> Search Alumni
        </Link>
      
        <Link to="/send-mail" className="text-sm font-semibold  flex items-center">
          <FaEnvelopeOpenText className="mr-1" /> Send Mail
        </Link>

        {loggedIn ? (
  // Render these links if the user is logged in
  <>
    <NavLink
      onClick={() => {
        dispatch(logout());
      }}
      className="border border-black hover:bg-black hover:text-white px-4 py-2 rounded-md text-sm font-medium"
    >
      Logout
    </NavLink>
  </>
) : (
  <>
    <Link
      to="/register"
      className="border border-black hover:bg-black hover:text-white px-4 py-2 rounded-md text-sm font-medium"
    >
      Register
    </Link>

    <Link
      to="/login"
      className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium"
    >
      Login
    </Link>
  </>
)}

      
      </nav>
    </div>
  );
}

export default Topbar;
