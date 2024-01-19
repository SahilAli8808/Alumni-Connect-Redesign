
import { Navigate } from "react-router-dom";
import { getUserData } from "../services/authService";
import { getLoggedIn} from "../services/authService";
function Home() {
  const loggedin = getLoggedIn()
  {!loggedin && <Navigate to="/login"/>}
  const {role, email, firstName} = getUserData();
  // console.log(data);
    return (
      <>
        {/* dashboard with data using tailwind */}
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="text-6xl font-bold">Dashboard</h1>
          <h2 className="text-2xl font-bold">Welcome to Dashboard</h2>
          <div className="flex flex-col itSems-center justify-center">
            <h3 className="text-xl font-bold">User Data</h3>
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-lg font-bold">Name: {firstName}</h4>
              <h4 className="text-lg font-bold">Email: {email}</h4>
              <h4 className="text-lg font-bold">Role: {role}</h4>
            </div>



        </div>
        

        </div>

      </>

    );
  }
  
  export default Home;
  