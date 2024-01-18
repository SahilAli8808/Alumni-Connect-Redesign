import React from 'react';
import Spinner from '../assets/img/Spinner.svg'
const Loader = ({ text }) => {
  return (
    <div className="flex flex-row">
      {/* <img
        // src={Spinner} 

        alt="Loading..."
        className="mr-1 mt-1 "
        style={{ width: '30px', height: '30px' }} // Adjust the size as needed
      /> */}
      {/* animate spin loader */}
      <div className="flex items-center">
  <div className="animate-spin rounded-full h-5 w-5 border-t-4 border-b-4 border-white"></div>
  {text && <span className="ml-2 text-white">{text}...</span>}
</div>

      {/* {text}... */}
    </div>
  );
};

export default Loader;
