import React, { useState, useRef } from 'react';
import { FaAngleDown, FaExternalLinkSquareAlt, FaUniversity } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option) => {
    // Handle the click on each option
    console.log(`Clicked on option: ${option}`);
    // Add further logic as needed
    closeDropdown();
  };

  const handleMouseEnter = () => {
    openDropdown();
  };

  const handleMouseLeave = () => {
    const isHovered = dropdownRef.current.matches(':hover');
    if (!isHovered) {
      closeDropdown();
    }
  };

  return (
    <div className="relative inline-block text-left" onMouseEnter={handleMouseEnter} >
      <div>
        <button
          type="button"
          className="text-sm font-semibold flex items-center focus:outline-none"
        >
        <FaUniversity className="mr-1" />
          <span>University</span>
          <FaAngleDown className="mr-1 mt-1" />
        </button>

        {isOpen && (
          <div
            ref={dropdownRef}
            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu"
              // onMouseLeave={handleMouseLeave}
              >
                <Link
            to="/newsletter"
            className="block w-full px-4  py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          >
           News & Notices
          </Link>
              <Link
            to="/feedback"
            className="block w-full px-4  py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          >
            Feedback
          </Link>
              <Link
            to="/"
            className="block w-full px-4  py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          >
            Ak Aur Option here
          </Link>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
