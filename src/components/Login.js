import { useState } from "react"
import Header from "./Header"

function Login() {
  const[signIn,setSignIn]= useState(true);

  const toggleSignIn =()=>{
    setSignIn(!signIn);
  }

  return (
    <div>
        <Header/>
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg" alt=""/>
        </div>
        <form className="absolute w-3/12 my-32 px-9 pt-12 pb-20 bg-black bg-opacity-80 mx-auto left-0 right-0 rounded text-white">
            <h1 className="pb-7 font-bold text-3xl">{signIn?"Sign Up":"Sign In"}</h1>
            <input type="text" placeholder="Email Address" className="px-6 py-2 my-3 w-full bg-gray-700" ></input>
            {signIn && <input type="text" placeholder="Full Name" className="px-6 py-2 my-3 w-full bg-gray-700" ></input>}
            <input type="password" placeholder="Password" className="px-6 py-2 my-3 w-full bg-gray-700" ></input>
            <button className="bg-red-700 border-0 w-full py-2 mt-6 mb-5 rounded">{signIn?"Sign Up":"Sign In"}</button>
            <p onClick={toggleSignIn} className="mt-8">
            {signIn ? "Already registered?":"New to Netflix?" }{" "}
            <span className="hover:underline cursor-pointer">
              {signIn ? "Sign In" : "Sign Up"}
            </span>
      </p>
        </form> 
    </div>
  )
}

export default Login