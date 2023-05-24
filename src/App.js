import React from "react"; //{ useState, useEffect }
import './App.css';
import Home from './screens/home/Home.js'
//import Login from "../src/components/Login";

function App() {

  return (
  <div>
  <Home />
  </div>
  )

/*
  const [token, setToken] = useState("");

  useEffect (() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
    const _token = hash.split("&")[0].split("=")[1];
    window.localStorage.setItem("token", _token);
    setToken(_token);
    } else { 
      setToken(token)
    }
  }, []);
  return !token ? (
    <Login/>
  ) : (
    <div className="App">
      <header className="App-header">
        SPOTIFYYYYYYYYYY
      </header>
    </div>
  ); */
}

export default App;
