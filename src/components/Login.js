import React from "react";
import { loginEndPoint } from "./spotify";

export default function Login() {
    return (
      <div>
        <a href={loginEndPoint}>
        <button>LOG IN</button>
        </a>
      </div>
    )
};