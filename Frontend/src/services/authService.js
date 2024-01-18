
import { useSelector } from "react-redux";

function getUserData(){
  const currectUser = useSelector(
        // iske andar state ki current value aati hai
        (state)=>{
            state.currectUser
        }
    )
console.log(currectUser)
    return currectUser
}

function getLoggedIn(){
 
  const loggedIn = useSelector(
        // iske andar state ki current value aati hai
        (state)=>{
            state.loggedIn
        }
    )
    console.log(loggedIn)

    return loggedIn
}




export {getUserData, getLoggedIn} //, getRole}