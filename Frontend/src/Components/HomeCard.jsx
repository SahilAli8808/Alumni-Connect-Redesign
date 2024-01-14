import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import the CSS file for styles
import 'react-toastify/dist/ReactToastify.css';
const Maihuntoast = () => {
  toast("Mai Hun Normal Toast",{theme: "dark"});
//   toast.success("Success Notification", {
//     position: toast.POSITION.TOP_RIGHT
//   });
};

function HomeCard() {
  useEffect(() => {
    // Maihuntoast();
    console.log("screen mounted")
  }, []);

  return (
    <>
      <h2> Hello World! I am Card</h2>
      <button onClick={Maihuntoast}>Click Me </button>
      <ToastContainer />
    </>
  );
}

export default HomeCard;
