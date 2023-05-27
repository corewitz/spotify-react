import React from "react";
import { loginEndPoint } from "../../../spotify";
import "./login.css";

export default function Login() {
    return (
      <div className="login-page">
      <img 
        src=""
        alt="logo-spotify"
        className="logo"
      />
        <a href={loginEndPoint}>
        <button className="login-btn">LOG IN</button>
        </a>
      </div>
    );
};


//check video at 5 min 6 sec