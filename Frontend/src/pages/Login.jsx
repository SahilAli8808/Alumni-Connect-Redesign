import 'react-toastify/dist/ReactToastify.css';
import { LockClosedIcon, KeyIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Select from 'react-select';

function Login() {
    const [selectedRole, setSelectedRole] = useState(null);
    // Options for the role dropdown
  const roleOptions = [
    { value: 'alumni', label: 'Alumni' },
    { value: 'faculty', label: 'Faculty' },
    { value: 'admin', label: 'Admin' },
    { value: 'college', label: 'College' }
  ];

  // Handle role selection
  const handleRoleChange = (selectedOption) => {
    setSelectedRole(selectedOption);
  };
  return (
    <>
    
      <div className="flex flex-col items-center  min-h-screen py-2">
        <div className="flex flex-col justify-center items-center">
          <h2 className="mt-5 text-center text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="space-y-6" >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>     

              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />

            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            {/* role dropdown stylish with icons and good looking*/}

            {/* role dropdown code goes here */}
            <div>
            <label htmlFor="role" className="sr-only">Role</label>
            <Select
              id="role"
              name="role"
              options={roleOptions}
              value={selectedRole}
              onChange={handleRoleChange}
              placeholder="Select your role"
              className="mt-2 text-sm text-gray-900"
            />
          </div>

            

            
           
            </div>

    
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span> */}
              Sign in
            </button>
          </div>

        </form>
      </div>
    </>
  );

}

export default Login;
