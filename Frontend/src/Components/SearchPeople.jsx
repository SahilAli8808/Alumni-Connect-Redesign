import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { getLoggedIn } from "../services/authService";
import { Link } from "react-router-dom";

const SearchPeople = () => {
  const loggedIn = getLoggedIn();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Add logic to handle the search
    // Replace the following line with your actual search logic
    // In this example, just setting some dummy data
    setSearchResults([
      { id: 1, name: 'Sahil Ali', role: 'Alumni' },
      { id: 2, name: 'Uncle Ben', role: 'Faculty' },
    ]);
  };

  return (
    <div className="max-w-md mx-auto my-2 p-6 ">
      {loggedIn ? (
        <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Advanced Search to Alumni</h2>

      <div className="mb-4">
        <label htmlFor="searchInput" className="block text-sm font-medium text-gray-600">
          Search by name, role, etc.
        </label>
        <input
          id="searchInput"
          type="text"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          placeholder="Enter search query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="batch" className="block text-sm font-medium text-gray-600">
            Select Batch
          </label>
          <input
            id="batch"
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter Batch"
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-600">
            Select Year
          </label>
          <input
            id="year"
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter Year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="branch" className="block text-sm font-medium text-gray-600">
          Select Branch
        </label>
        <input
          id="branch"
          type="text"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          placeholder="Enter Branch"
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
        />
      </div>

      <button
         className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleSearch}
      >
      <FaSearch className="inline-block mr-2 mt-1" />
        Search
      </button>

      {searchResults.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-2">Search Results:</h4>
          <ul>
            {searchResults.map((person) => (
              <li key={person.id} className="text-gray-600">
                {person.name} - {person.role}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ) : (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">You're Not Logged In</h1>
      <p className="text-gray-600 mb-4">
        Please log in to access our search tab.
      </p>
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
};

export default SearchPeople;
