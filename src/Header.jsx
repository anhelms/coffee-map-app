import React, { useState } from "react";
import DemoAccount from './DemoAccount';
import axios from "axios";


const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Header() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

    return (
        <nav className="navbar">
        <a className="navbar-brand" href="#">
            <img src="/images/coffee-map.png" width="30" height="30" className="d-inline-block align-top" alt="globe with coffee ping"/>
            Coffee Maps
        </a>
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <DemoAccount />
                <input type="text" placeholder="email" name="email"/>
                <input type="text" placeholder="password" name="password"/>
                <button className="log" type="submit">Login</button>
                <button className="log" type="button" onClick={handleClick}>Logout</button>
            </form>
        </div>
        </nav>
    )
}