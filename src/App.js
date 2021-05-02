// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import { Routes } from "./components/nav-routes/Routes";
import "./App.css";

import UserContext from "./context/UserContext";

import useLocalStorage from "./hooks/useLocalStorage";
import WaveServer from "./api/waveServer";
import Navbar from "./components/nav-routes/Navbar";

export const TOKEN_STORAGE_ID = "waveServer-token";

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(() => {
    const getCurrentUser = async () => {
      // console.log("token", token);
      if (token) {
        try {
          let { username } = jwt.decode(token);
          WaveServer.token = token;
          let currentUser = await WaveServer.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    };
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);
  // console.log(currentUser);

  const login = async (loginData) => {
    try {
      let newToken = await WaveServer.login(loginData);
      setToken(newToken);
      return { success: true };
    } catch (err) {
      return { success: false, err };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  };
  return (
    <div className="App">
      <UserContext.Provider
        value={{ currentUser, setCurrentUser, login, logout, setToken, token }}
      >
        <Navbar />
        <Routes />
        {infoLoaded}
      </UserContext.Provider>
    </div>
  );
}

export default App;
