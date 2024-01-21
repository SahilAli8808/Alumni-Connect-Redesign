import "react-toastify/dist/ReactToastify.css";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import axios from "axios";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";

function Register() {
  const [selectedDegree, setSelectedDegree] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    startYear: "",
    endYear: "",
    degree: "",
    branch: "",
    rollNumber: "",
    firstName: "",
    lastName: "",
    role: "",
  });

  const navigate = useNavigate();

  const roleOptions = [{ value: "alumni", label: "Alumni" }];

  const degreeOptions = [
    { value: "bachelor", label: "Bachelor" },
    { value: "master", label: "Master" },
    { value: "phd", label: "PhD" },
  ];

  const handleDegreeChange = (selectedOption) => {
    setSelectedDegree(selectedOption);
    setFormData({ ...formData, degree: selectedOption.value });
  };

  const handleRoleChange = (selectedOption) => {
    setSelectedRole(selectedOption);
    setFormData({ ...formData, role: selectedOption.value });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    

    try {
      const response = await axios.post(
        "http://localhost:8080/register/user",
        formData
      );
      console.log("inside POST request " + response.data.status);
      const { status, data } = response.data;

      if (status === "success") {
        toast.success("Registration successful!");
        navigate("/login");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error during registration:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center mb-12">
        <h2 className="my-3 text-center text-gray-900">Create your account</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="start-year" className="sr-only">
                Start Year
              </label>
              <input
                id="start-year"
                name="startYear"
                type="text"
                autoComplete="off"
                required
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Start Year"
              />
            </div>
            <div>
              <label htmlFor="end-year" className="sr-only">
                End Year
              </label>
              <input
                id="end-year"
                name="endYear"
                type="text"
                autoComplete="off"
                required
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="End Year"
              />
            </div>
            <div>
              <label htmlFor="degree" className="sr-only">
                Degree
              </label>
              <Select
                id="degree"
                name="degree"
                options={degreeOptions}
                value={selectedDegree}
                onChange={handleDegreeChange}
                placeholder="Select your degree"
                className="mt-2 text-sm text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="branch" className="sr-only">
                Branch
              </label>
              <input
                id="branch"
                name="branch"
                type="text"
                autoComplete="off"
                required
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Branch"
              />
            </div>
            <div>
              <label htmlFor="roll-number" className="sr-only">
                Roll Number
              </label>
              <input
                id="roll-number"
                name="rollNumber"
                type="text"
                autoComplete="off"
                required
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Roll Number"
              />
            </div>
            <div>
              <label htmlFor="first-name" className="sr-only">
                First Name
              </label>
              <input
                id="first-name"
                name="firstName"
                type="text"
                autoComplete="off"
                required
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="sr-only">
                Last Name
              </label>
              <input
                id="last-name"
                name="lastName"
                type="text"
                autoComplete="off"
                required
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label htmlFor="degree" className="sr-only">
                Role
              </label>
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
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {/* <AcademicCapIcon
                className="h-5 w-5 text-white group-hover:text-indigo-400"
                aria-hidden="true"
              /> */}
              {loading ?<Loader text="Please Wait"/> : "Register"
                }
              
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
