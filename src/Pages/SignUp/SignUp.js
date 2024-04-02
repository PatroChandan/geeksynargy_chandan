import React, { useState } from "react";
import "./SignUp.css";
import signupImg from "../../images/undraw_sign_up_ln1s.svg";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const handleSignup = () => {
    const user = {
      name,
      password,
      email,
      phone,
      profession,
    };

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const isExistingEmail = existingUsers.some((user) => user.email === email);
    const isExistingName = existingUsers.some((user) => user.name === name);
    const isExistingPhone = existingUsers.some((user) => user.phone === phone);

    if (isExistingEmail || isExistingName || isExistingPhone) {
      alert("User already exists");
    } else {
      const updatedUsers = [...existingUsers, user];

      localStorage.setItem("users", JSON.stringify(updatedUsers));

      alert("Registered Successful");

      setName("");
      setPassword("");
      setEmail("");
      setPhone("");
      setProfession("");
    }
  };

  return (
    <div className="sign-up">
      <ToastContainer />
      <div className="signup-container">
        <div className="signup-left">
          <img src={signupImg} alt="Sign Up" />
        </div>
        <div className="signup-right">
          <h2>USER SIGNUP</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input"
          />
          <select
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            className="select"
          >
            <option value="">Select Profession</option>
            <option value="Engineer">Engineer</option>
            <option value="Doctor">Doctor</option>
            <option value="Teacher">Teacher</option>
          </select>
          <button onClick={handleSignup} className="btn">
            Sign Up
          </button>
          <h3>
            Already have an account? <Link to={"/signin"}>Login here.</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
