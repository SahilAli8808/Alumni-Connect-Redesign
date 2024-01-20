import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { getLoggedIn } from '../services/authService';
import NotLoggedIn from './helper/NotLoggedIn';

const BulkUpload = () => {
  const loggedIn = getLoggedIn();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    
    if (selectedFile) {
      console.log('File uploaded:', selectedFile);
    
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div className="max-w-md my-20 mx-auto p-6">
      {loggedIn ? (
        <div>
        <form onClick={handleUpload} encType='multipart/form-data' >
        <h2 className="text-2xl font-bold mb-4 text-center">Bulk Import Alumni to Register </h2>
        <div className="mb-4 ">
        <label htmlFor="fileInput" className="block text-sm font-medium text-gray-600">
          Choose a file
        </label>
        <input
          id="fileInput"
          type="file"
          accept=".csv, .xlsx, .xls"
          className="mt-1 p-2 border w-full border-gray-300 rounded-md"
          onChange={handleFileChange}
        />
      </div>

      {selectedFile && (
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Selected File:</h4>
          <p className="text-gray-600">{selectedFile.name}</p>
        </div>
      )}

      <button
        className=" w-full flex items-center justify-center  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        type='submit'
        // onClick={handleUpload}
      >
      <FaUpload className="inline-block mr-2 mt-1" />
        Upload

      </button>
    </form>
      
    </div>
  ) : (
    <NotLoggedIn text="Bulk Import"/>
  )}
  </div>
  );
};

export default BulkUpload;
