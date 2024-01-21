import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../Components/Loader";

function Login() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: selectedRole,
  });
  const dispatch = useDispatch();
  // Options for the role dropdown
  const roleOptions = [
    { value: "alumni", label: "Alumni" },
    { value: "faculty", label: "Faculty" },
    { value: "admin", label: "Admin" },
    { value: "college", label: "College" },
  ];
  const navigate = useNavigate();

  // Handle role selection
  const handleRoleChange = (selectedOption) => {
    setSelectedRole(selectedOption);
    console.log(selectedOption);
  };
  const userRole = selectedRole?.value;
  // console.log(userRole)

  var role = userRole;
  console.log(role);
  var userData = {
    email: user.email,
    password: user.password,
    role: role,
  };
  // Handle form submission
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedRole) {
      toast.error("Please select a role");
      return;
    }
    setLoading(true);
    const url = "http://localhost:8080/auth/login";
    try {
      const response = await axios.post(url, userData);
      console.log("Axios Response:", response);
      console.log("Axios Data in store:", response.data);
      const payload = {
        ...(selectedRole.value === "alumni"
          ? response.data.alumni
          : response.data.admin),
        role: selectedRole.value,
      };

      dispatch(login(payload));
      toast.success("Login Successful");

      setLoading(false);
      navigate("/dashboard");
    } catch (err) {
      setLoading(false);
      console.log("Handle error here:", err);
      if (err.response) {
        toast.error(err.response.data.message || err.message);
      } else {
        toast.error(err.message + "! Database server is down.");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center mb-28 py-2">
        <div className="flex flex-col justify-center items-center">
          <h2 className="mt-5 text-center text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
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
                onChange={handleChange}
                value={user.email}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                // value =
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
                autoComplete="current-password"
                onChange={handleChange}
                value={user.password}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            {/* role dropdown stylish with icons and good looking*/}

            {/* role dropdown code goes here */}
            <div>
              <label htmlFor="role" className="sr-only">
                Role
              </label>
              <Select
                // required
                id="role"
                name="role"
                options={roleOptions}
                onChange={handleRoleChange}
                value={selectedRole}
                placeholder="Select your role"
                className="mt-2 text-sm text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              // onSubmit={handleSubmit}
              className={`${
                loading && "hover:cursor-wait"
              } group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              {loading ? <Loader text={"Please Wait.."} /> : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
