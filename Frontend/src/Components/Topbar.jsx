import React, { useState } from 'react';
import { FaHome, FaCalendar, FaBriefcase, FaNewspaper, FaEnvelope, FaUserTie, FaSearch, FaCommentDots, FaTicketAlt, FaEnvelopeOpenText, FaUserGraduate, FaSignInAlt, FaUpload, FaMeetup, FaVideo, FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLoggedIn } from '../services/authService';
import { logout } from '../features/authSlice';
import Dropdown from './helper/Dropdown';

function Topbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const loggedIn = getLoggedIn();
  const dispatch = useDispatch();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-slate-100 text-black p-4 flex flex-col lg:flex-row justify-between items-center">
      <div className="flex items-center mb-4 lg:mb-0">
        <span> <FaUserTie className="mr-1 h-6 w-8" /></span>
        <h2 className="text-2xl font-extrabold text-gray-800">
          Alumni Connect
        </h2>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </div>

      <nav className={`lg:flex lg:flex-row lg:space-x-4 font-semibold items-center ${isMobileMenuOpen ? 'flex flex-col' : 'hidden'}`}>
        {loggedIn ? (
          <>
            <Link to="/dashboard" className="text-sm flex items-center">
              <FaHome className="mr-1" /> Dashboard
            </Link>
          </>
        ) : (
          <>
            <Link to="/home" className="text-sm flex items-center">
              <FaHome className="mr-1" /> Home
            </Link>
          </>
        )}

        <Link to="/events" className="text-sm font-semibold flex items-center">
          <FaCalendar className="mr-1" /> Events
        </Link>
        <Link to="/jobs" className="text-sm font-semibold flex items-center">
          <FaBriefcase className="mr-1" /> Jobs
        </Link>
        {/* <Link to="/newsletter" className="text-sm font-semibold flex items-center">
          <FaNewspaper className="mr-1" /> Newsletters
        </Link> */}
        <Dropdown />
        <Link to="/meeting" className="text-sm font-semibold flex items-center">
          <FaVideo className="mr-1" /> Meeting
        </Link>
        <Link to="/bulk-upload" className="text-sm font-semibold flex items-center">
          <FaUpload className="mr-1" /> Bulk Import
        </Link>
        <Link to="/search-people" className="text-sm font-semibold flex items-center">
          <FaSearch className="mr-1" /> Search Alumni
        </Link>

        <Link to="/send-mail" className="text-sm font-semibold flex items-center">
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
              className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium mt-2 lg:mt-0"
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
