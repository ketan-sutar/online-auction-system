import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../firebase";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email, password);
      await signInWithEmailAndPassword(auth,email,password);
      

      toast.loading("Wait for a second. Redirecting...")
      setTimeout(()=>{
        navigate("/main")
      },2000)
      
    } catch (err) {
      console.log(err);
      toast.error("Failed to create account!");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col justify-center items-center">
        <h1>ONLINE AUCTION SYSTEM</h1>
        <div className="bg-white shadow-md rounded-lg px-8 pb-8">
          <h2 className="text-2xl font-bold text-center mb-6">Sign in</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email"
                className="rounded-md w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font- medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password"
                className="rounded-md w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex  items-center justify-between">
              <p className="text-sm flex flex-row text-gray-600">
                Don't have an account?{" "}
                <Link to="/create" className="text-blue-500 hover:underline">
                  Create a free account
                </Link>
              </p>
            </div>

            <div className="btn flex flex-col items-center space-y-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center text-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 w-full"
              >
                Get Started
              </button>
              <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 w-full">
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
