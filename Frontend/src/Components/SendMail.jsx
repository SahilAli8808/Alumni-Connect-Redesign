import React, { useState, useEffect } from 'react';
import { FaForward, FaShare } from 'react-icons/fa';
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
        <div className="px-8 pt-6 pb-8 mb-4">
        <h2 className="my-3 text-center text-2xl font-semibold text-gray-900">
  Send Mail to Students
</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
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
            <label className="block text-gray-700 text-sm font-semibold mb-2">
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
            <label className="block text-gray-700 text-sm font-semibold mb-2">
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
            <label className="block text-gray-700 text-sm font-semibold mb-2">
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
            <label className="block text-gray-700 text-sm font-semibold mb-2">
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

          <div className="flex items-center justify-center">
           <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
               Send Mail
              <FaShare className="inline-block ml-2 mt-1" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
