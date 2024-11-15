import { useState } from "react"
import Header from "./Header"

const Login = () => {
    const [IsSignIn, setSignIn] = useState(false)
    const toggleSignIn = () => {
        setSignIn(!IsSignIn)
    }
    return(
        <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-black"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')" }}>
    
            <Header></Header>
            <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
                <div className="bg-white/90 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">{IsSignIn ? "Sign In" : "Sign Up"}</h2>
                    <form>
                        {!IsSignIn && (
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
                            <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Your name"/>
                        </div>
                        )}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                            <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Your email"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
                            <input type="password" id="password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Your password"/>
                        </div>
                        {!IsSignIn && (
                        <div className="mb-6">
                            <label htmlFor="confirm-password" className="block text-gray-700 font-medium">Confirm Password</label>
                            <input type="password" id="confirm-password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Confirm password"/>
                        </div>
                        )}
                        <button type="submit" className="w-full bg-gradient-to-r from-red-500 to-black text-white font-bold py-3 rounded-lg hover:from-red-600 hover:to-gray-800 transition duration-300">{IsSignIn ? "Sign In" : "Sign Up"}</button>
                        <p className = "mt-3 cursor-pointer" onClick={toggleSignIn}>{IsSignIn ?"" :"Already a customer? Sign In Now"}</p>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Login