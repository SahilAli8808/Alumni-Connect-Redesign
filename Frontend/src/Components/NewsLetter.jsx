import React from "react";
import { getLoggedIn } from "../services/authService";
import { Link } from "react-router-dom";

function Newsletter() {
  const loggedIn = getLoggedIn();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loggedIn ? (
        <div>
          <h1 className="text-4xl font-bold mb-4">Newsletter</h1>
          {/* Add your newsletter content here */}
          <p className="text-gray-600 mb-4">
            Stay up-to-date with our latest news and updates!
          </p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">You're Not Logged In</h1>
          <p className="text-gray-600 mb-4">
            Please log in to access our newsletter.
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
}

export default Newsletter;
