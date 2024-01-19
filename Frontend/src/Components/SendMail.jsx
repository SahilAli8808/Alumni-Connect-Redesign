import React, { useState, useEffect } from 'react';
import Select from 'react-select';
// import { connect } from 'react-redux';

const SendMail = () => {
  const [countryList, setCountryList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [cityListState, setCityListState] = useState([]);
  const [yesNo, setYesNo] = useState(false);
  const [selectedCity, setSelectedCity] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              College Name
            </label>
            <Select
              required
              isMulti
              isSearchable
              placeholder="Select Colleges .."
              name="college"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Batch
            </label>
            <Select
              required
              isMulti
              isSearchable
              placeholder="Select which Batch .."
              name="year"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Branch
            </label>
            <Select
              required
              isMulti
              isSearchable
              placeholder="Select which Branch .."
              name="branch"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
              placeholder="Subject"
              name="subject"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Message"
              required
              name="message"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
