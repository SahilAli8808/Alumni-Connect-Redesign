import React from "react";
import { getLoggedIn } from "../services/authService";
import { Link } from "react-router-dom";
import NotLoggedIn from "./helper/NotLoggedIn";

function Jobs() {
  const loggedIn = getLoggedIn();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loggedIn ? (
        <h1 className="text-4xl font-bold mb-4">Jobs</h1>
      ) : (
       <NotLoggedIn text="Jobs" />
      )}
    </div>
  );
}

export default Jobs;
