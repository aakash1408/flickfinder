import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidateData } from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {
    const [IsSignIn, setSignIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const email = useRef(null)
    const password = useRef(null)
    const toggleSignIn = () => {
        setSignIn(!IsSignIn)
    }

    const validateData = () => {
        
        const message = checkValidateData(email.current.value,password.current.value)
        setErrorMessage(message)
        if(message) return

        if(IsSignIn){
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
            // Signed in 
                const user = userCredential.user;
                
            })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage)
            });


        }else{
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                
            })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage)
            });
        }

        
    }
    return(
        <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-black"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}>
    
            <Header></Header>
            <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
                <div className="opacity-85 bg-white/90 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">{IsSignIn ? "Sign In" : "Sign Up"}</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        {!IsSignIn && (
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
                            <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Your name"/>
                        </div>
                        )}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                            <input ref={email} type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Your email"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
                            <input ref={password} type="password" id="password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Your password"/>
                        </div>
                        {!IsSignIn && (
                        <div className="mb-6">
                            <label htmlFor="confirm-password" className="block text-gray-700 font-medium">Confirm Password</label>
                            <input type="password" id="confirm-password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Confirm password"/>
                        </div>
                        )}
                        <p className="text-red-500">{errorMessage}</p>
                        <button type="submit" onClick={validateData} className="w-full bg-gradient-to-r from-red-500 to-black text-white font-bold py-3 rounded-lg hover:from-red-600 hover:to-gray-800 transition duration-300">{IsSignIn ? "Sign In" : "Sign Up"}</button>
                        <p className = "mt-3 cursor-pointer" onClick={toggleSignIn}>{IsSignIn ?"New to the site! Sign Up here" :"Already a customer? Sign In Now"}</p>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Login