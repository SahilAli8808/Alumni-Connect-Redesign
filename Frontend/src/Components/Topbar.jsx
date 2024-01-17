import React from 'react';
import { FaHome, FaCalendar, FaBriefcase, FaNewspaper, FaEnvelope, FaUserTie, FaSearch, FaCommentDots, FaTicketAlt, FaEnvelopeOpenText, FaUserGraduate, FaSignInAlt } from 'react-icons/fa';

function Topbar() {
  return (
    <div className="bg-slate-100 text-black p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h2 className="text-lg font-bold">Alumni Connect</h2>
      </div>
      <nav className="flex space-x-4 items-center">
        <a href="/" className="text-sm flex items-center">
          <FaHome className="mr-1" /> Dashboard
        </a>
        <a href="/events" className="text-sm flex items-center">
          <FaCalendar className="mr-1" /> Events
        </a>
        <a href="/jobs" className="text-sm flex items-center">
          <FaBriefcase className="mr-1" /> Jobs
        </a>
        <a href="/news" className="text-sm flex items-center">
          <FaNewspaper className="mr-1" /> News
        </a>
        <a href="/letter" className="text-sm flex items-center">
          <FaEnvelope className="mr-1" /> Letter
        </a>
        <a href="/interview" className="text-sm flex items-center">
          <FaUserTie className="mr-1" /> Interview
        </a>
        <a href="/search-people" className="text-sm flex items-center">
          <FaSearch className="mr-1" /> Search People
        </a>
        <a href="/chat" className="text-sm flex items-center">
          <FaCommentDots className="mr-1" /> Chat
        </a>
        <a href="/tickets" className="text-sm flex items-center">
          <FaTicketAlt className="mr-1" /> Tickets
        </a>
        <a href="/send-mail" className="text-sm flex items-center">
          <FaEnvelopeOpenText className="mr-1" /> Send Mail
        </a>
        <a href="/verify-alumni" className="text-sm flex items-center">
          <FaUserGraduate className="mr-1" /> Verify Alumni
        </a>
        <a href="/login" className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium">
           Login
        </a>
      </nav>
    </div>
  );
}

export default Topbar;
