import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./App.css";
import loginlogo from "./Images/loginlogo.png";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !password) {
      alert("Please fill all fields.");
      return;
    }

    axios
      .post("http://localhost:3001/login", { name, password })
      .then((result) => {
        if (result.data === "Success") {
  alert("Login Successfully");
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("Username", name);  
  navigate("/");
}
else {
          alert("User Not Register");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Login failed: Server error");
      });
  };

  return (
    <div className="lg">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <img className="loginlogo" src={loginlogo} alt="Login Logo" />
        </div>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <div className="link">
          <a href="#">Forgot Password?</a>
        </div>
        <button className="l" type="submit">
          Login
        </button>
        <div className="sg">
          <section className="create">Create an Account -</section>
          <section className="si">
            <Link to="/signin">Sign in</Link>
          </section>
        </div>
      </form>
    </div>
  );
}

export default Login;
