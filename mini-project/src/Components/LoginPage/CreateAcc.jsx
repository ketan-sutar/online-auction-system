import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth,db} from "../firebase";
import { setDoc,doc } from "firebase/firestore";

const CreateAcc = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(fname, lname, email, password);
      await createUserWithEmailAndPassword(auth,email,password)
      const user=auth.currentUser;
      if(user){
        await setDoc(doc(db,"Users",user.uid),{
          fname:fname,
          lname:lname,
          email:email,
          password:password
        });
      }
      console.log(user)

      toast.success("Account created successfully!", {
        autoClose: 1000, 
        onClose: () => {
          const loadingToast = toast.loading("Wait for second Redirecting...");
          setTimeout(() => {
            toast.dismiss(loadingToast);
            navigate("/main");
          }, 1000); 
        },
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to create account!");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col justify-center items-center">
        <h1>ONLINE AUCTION SYSTEM</h1>

        <div className="bg-white shadow-md rounded-lg px-8 pb-8 w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
          <h2 className="text-2xl font-bold text-center mb-6">Sign up</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fname"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={fname}
                placeholder="First Name"
                onChange={(e) => setfname(e.target.value)}
                className="rounded-md w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="lname"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={lname}
                placeholder="Last Name"
                onChange={(e) => setlname(e.target.value)}
                className="rounded-md w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email Address"
                className="rounded-md w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password"
                className="rounded-md w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm flex flex-row text-gray-600">
                Already have an account?{" "}
                <Link to="/" className="text-blue-500 hover:underline">
                  Sign In
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

export default CreateAcc;
