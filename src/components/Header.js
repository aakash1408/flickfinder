import { useDispatch, useSelector } from "react-redux"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice"

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
          }).catch((error) => {
            navigate(".error")
          });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const {uid, email, displayName} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName}))
              navigate("/browse")
            } else {
              // User is signed out
              dispatch(removeUser())
              navigate("/")
            }
        });
    }, [])
    return(
        <div className="flex items-center justify-between p-4 bg-black text-white shadow-md">
            <div>
            <img className="w-36 h-32 ml-5" src="https://r2.erweima.ai/i/2YQT53cZR2qH6NH4lG8CBg.png" alt="logo"></img>
            </div>
            <ul class="flex space-x-20 mr-3 p-10">
                <li>
                    <a href="" class="hover:text-blue-400 font-medium">Home</a>
                </li>
                <li>
                    <a href="#" class="hover:text-blue-400 font-medium">About</a>
                </li>
                <li>
                    <a href="#" class="hover:text-blue-400 font-medium">Contact</a>
                </li>
                {user && ( 
                <button className="font-bold text-white" onClick={handleSignOut}>Sign Out</button>
                )}
            </ul>

            
        </div>
        
    )
}

export default Header