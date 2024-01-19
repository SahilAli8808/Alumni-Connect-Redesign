import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-slate-100 text-black p-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">Alumni Connect</h2>
          <p className="text-sm">Connecting alumni worldwide</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
      <hr className="my-4 border-gray-200" />
      <div className="text-center text-sm">
        <p>&copy; 2024 Alumni Connect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
