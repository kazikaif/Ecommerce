import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import siginlogo from "./Images/siginlogo.png";
import "./App.css";
 
function Sigin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/signin', { name, email, password })
      .then((result) => {console.log("User Created:", result.data)
      navigate('/login')
      alert('Register Sucessfully')})
       .catch((err) => console.error("Error:", err));
  }

  return (
    <div className="lg">
      <form className="form2" onSubmit={handleSubmit}>
        <div className="head">User Registration</div>

        <section><img className="siginlogo" src={siginlogo} alt="logo" /></section>
        <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)} required />
        <input type="email" className="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className='l2'>Sign-In</button>
        <div className='sg2'>
          <section className='create'>Already Created -</section>
          <section className='si'>
            <Link to="/login">Login</Link>
          </section>
        </div>
      </form>
    </div>
  );
}

export default Sigin;
