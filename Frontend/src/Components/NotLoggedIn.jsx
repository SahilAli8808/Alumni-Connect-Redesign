import React from 'react'
import { Link } from 'react-router-dom';

function NotLoggedIn(props) {
  return (
    <>
      <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">You're Not Logged In</h1>
          <p className="text-gray-600 mb-4">Please log in to access our {props.text} Tab.</p>
          <Link
      to="/login"
      className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium"
    >
      Login
    </Link>
        </div>
    </>
  )
}

export default NotLoggedIn
