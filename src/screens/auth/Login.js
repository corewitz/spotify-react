import React from "react";
import { loginEndPoint } from "../../spotify";
import spotifyLogo from "../../desktop-wallpaper-spotify-neon-icon-spotify-logo.jpg";
import "./login.css";

export default function Login() {
    return (
      <div className="login-page">
      <img 
        src={spotifyLogo}
        alt="logo-spotify"
        className="logo"
      />
        <a href={loginEndPoint}>
        <button className="login-btn">LOG IN</button>
        </a>
      </div>
    );
};


