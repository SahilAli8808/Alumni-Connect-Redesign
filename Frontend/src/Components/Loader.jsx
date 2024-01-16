import React from 'react';
import Spinner from '../assets/img/Spinner.svg'
const Loader = ({ text }) => {
  return (
    <div className="flex flex-row">
      <img
        src={Spinner} // Replace with the actual path to your spinner SVG
        alt="Loading..."
        className="mr-1 mt-1"
        style={{ width: '30px', height: '30px' }} // Adjust the size as needed
      />
      {text}...
    </div>
  );
};

export default Loader;
