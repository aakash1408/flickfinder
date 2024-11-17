import { useDispatch, useSelector } from "react-redux"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice"
import { toggleView } from "../utils/finderSlice";

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
    const handleFlickFinder = () => {
        //toggle
        dispatch(toggleView())
    }
    
    return (
        <div className="flex items-center justify-between p-4 bg-black text-white shadow-md">
          {/* Logo */}
          <div>
            <img
              className="w-36 h-32 ml-5"
              src="https://r2.erweima.ai/i/2YQT53cZR2qH6NH4lG8CBg.png"
              alt="logo"
            />
          </div>
      
          {/* Navigation */}
          <div className="flex items-center space-x-10 mr-5">
            {/* Home Link */}
            <a href="/" className="hover:text-blue-400 font-medium">
              Home
            </a>
      
            {/* Buttons (Visible only if user is logged in) */}
            {user && (
              <div className="flex items-center space-x-4">
                <button onClick={handleFlickFinder} className="bg-white text-black px-5 py-2">Flick Finder</button>
                <button
                  className="font-bold text-white"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      );
      
}

export default Header