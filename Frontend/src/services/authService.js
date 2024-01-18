
import { useSelector } from "react-redux";

function getUserData(){
  const currectUser = useSelector(
        // iske andar state ki current value aati hai
        (state)=>{
            state.currectUser
        }
    )

    return currectUser
}

function getLoggedIn(){
    console.log("getLoggedIn")
  const loggedIn = useSelector(
        // iske andar state ki current value aati hai
        (state)=>{
            state.loggedIn
        }
    )

    return loggedIn
}




export {getUserData, getLoggedIn} //, getRole}