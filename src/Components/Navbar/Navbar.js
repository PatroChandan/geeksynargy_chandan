import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();

  const handleCompanyInfo = () => {
    navigate("/companyinfo");
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>hoblist</h2>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="li" onClick={handleLogout}>
            Log out
          </li>
          <li className="li">Sign Up</li>
          <li className="li" onClick={handleCompanyInfo}>
            Company Info
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
