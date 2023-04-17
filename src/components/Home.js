import React from "react";
import img from "../components/images/hexaware-logo.jpg";

// import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";

const Home = () => {
  // const [authenticated, setauthenticated] = useState(null);
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //     setauthenticated(loggedInUser);
  //   }
  // }, []);
  // if (!authenticated) {
  // return <Navigate replace to="/login" />;
  // Redirect
  // } else {
  return (
    <div>
      <h1>WELCOME TO TECH LOGIN</h1>
      <div className="home-details">
        <img src={img} alt="name" width={100} />
        <h3>
          <b>Name:</b>Ani Kumar Reddy
        </h3>
        <h5>
          <b>Designation:</b>Sr. Software Engineer
        </h5>
        <h5>
          <b>Phone:</b>+91 8790743708
        </h5>
        <h5>
          <b>Email:</b>Anil@gmail.com
        </h5>
        <h5>
          <b>Location:</b>Chennai
        </h5>
      </div>
    </div>
  );
};

export default Home;
