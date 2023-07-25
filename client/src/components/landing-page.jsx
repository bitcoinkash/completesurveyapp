import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const LandingPage = ({ loggedIn }) => {
  const buttonStyle = {
    backgroundColor: "#5457e9",
    color: "#fcfcfc",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    textDecoration: "none",
    marginRight: "10px",
    cursor: "pointer",
  };

  return (
    <div>
      <Header />

      {/* Content section */}
      <section>
        <h1>Welcome to Our Survey App</h1>
        {/* Conditionally render the button or link based on the loggedIn prop */}
        {loggedIn ? (
          <Link to="/forms">
            <button style={buttonStyle}>Go to Forms</button>
          </Link>
        ) : (
          <Link to="/signUp" style={buttonStyle}>
            Sign Up
          </Link>
        )}
        {/* Add more content as needed */}
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
