import React, { useState } from "react";
import "./SignIn.css";
import { ToastContainer, toast } from "react-toastify";
import signinImg from "../../images/undraw_sign_in_re_o58h.svg";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Login Successful");
      navigate("/home");
    } else {
      setError("Invalid email or password");
      alert("Invalid email or password");
    }
  };

  return (
    <div className="sign-in">
      <ToastContainer />
      <div className="signin-container">
        <div className="signin-left">
          <img src={signinImg} alt="Sign In" />
        </div>
        <div className="signin-right">
          <h2>USER LOGIN</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="btn">
            Login
          </button>
          <h3>
            Don't have an account? <Link to={"/signup"}>Sign up here</Link>
          </h3>
        </div>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignIn;
