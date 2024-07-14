import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const Main = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      // console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        // console.log(docSnap.data())
      } else {
        console.log("User not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <h1>Main page</h1>
      </div>
      <h2>Profile</h2>
      <br />
      <br />
      {userDetails ? (
        <>
          <h3>Welcome {userDetails.firstName} 🙏🙏</h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.fname}</p>
            <p>Last Name: {userDetails.lname}</p>
          </div>
        </>
      ) : (
        <p>Loading user details...</p>
      )}
      <br />
      <br />
      <br />
      <br />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Main;
