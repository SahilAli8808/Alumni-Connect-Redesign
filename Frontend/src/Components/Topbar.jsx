import React from 'react';
import { FaHome, FaCalendar, FaBriefcase, FaNewspaper, FaEnvelope, FaUserTie, FaSearch, FaCommentDots, FaTicketAlt, FaEnvelopeOpenText, FaUserGraduate, FaSignInAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { getLoggedIn } from '../services/authService';
function Topbar() {
  const loggedIn = getLoggedIn();
  return (
    <div className="bg-slate-100 text-black p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h2 className="text-lg font-bold">Alumni Connect</h2>
      </div>
      <nav className="flex space-x-4 items-center">
        <Link to="/" className="text-sm flex items-center">
          <FaHome className="mr-1" /> Dashboard
        </Link>
        <Link to="/events" className="text-sm flex items-center">
          <FaCalendar className="mr-1" /> Events
        </Link>
        <Link to="/jobs" className="text-sm flex items-center">
          <FaBriefcase className="mr-1" /> Jobs
        </Link>
        <Link to="/news" className="text-sm flex items-center">
          <FaNewspaper className="mr-1" /> News
        </Link>
        <Link to="/letter" className="text-sm flex items-center">
          <FaEnvelope className="mr-1" /> Letter
        </Link>
        <Link to="/interview" className="text-sm flex items-center">
          <FaUserTie className="mr-1" /> Interview
        </Link>
        <Link to="/search-people" className="text-sm flex items-center">
          <FaSearch className="mr-1" /> Search People
        </Link>
      
        <Link to="/send-mail" className="text-sm flex items-center">
          <FaEnvelopeOpenText className="mr-1" /> Send Mail
        </Link>

        {loggedIn ? (
          // Render these links if the user is logged in
          <>
          <Link to="/logout" className="border
          border-black hover:bg-black hover:text-white px-4 py-2 rounded-md text-sm font-medium">
        
            Logout
        </Link>
          </>
        ) : (
       
          <>
          <Link to="/register" className="border
          border-black hover:bg-black hover:text-white px-4 py-2 rounded-md text-sm font-medium">
        
            Register
        </Link>
       
        <Link to="/login" className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium">
           Login
        </Link>
          </>
        )}
      
      </nav>
    </div>
  );
}

export default Topbar;
