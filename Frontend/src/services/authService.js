
import { useSelector } from "react-redux";

function getUserData(){
  return useSelector((state)=>state.currentUser) 
}

function getLoggedIn(){
 
  const loggedIn = useSelector((state)=>{return state.loggedIn})
    console.log("Logged in?",loggedIn)

    return loggedIn
}




export {getUserData, getLoggedIn} //, getRole}