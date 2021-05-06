import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import jwt from "jsonwebtoken";
import { Routes } from "./components/nav-routes/Routes";
import Navbar from "./components/nav-routes/Navbar";
import AlertSnackbar from "./components/auth/AlertSnackbar";

import "./App.css";

import UserContext from "./context/UserContext";
import useLocalStorage from "./hooks/useLocalStorage";
import WaveServer from "./api/waveServer";

export const TOKEN_STORAGE_ID = "waveServer-token";

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [alert, setAlert] = useState("");
  const history = useHistory();

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
      return { success: false, errors: err };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
    setAlert({
      reset: () => setAlert(""),
      message: `Successfully Logged out`,
      severity: "success",
    });
    history.push("/");
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
      {alert && <AlertSnackbar {...alert} />}
    </div>
  );
}

export default App;
