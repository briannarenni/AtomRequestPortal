import React, { useState, useContext, createContext } from 'react';
import { loginUser, registerUser, getUserDetails } from "./modules/ServiceModule";

const AuthContext = createContext();

export function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currUser, setCurrUser] = useState({});

  const validateLogin = (username, password) => {
    let response = loginUser(username, password);
    if (response === 200) {
      getUserDetails(username);
      setCurrUser(response);
      setIsLoggedIn(true);
    } else {
      return response;
    }
  }

  const validateRegister = (username, password) => {
    let response = registerUser(username, password);
    if (response === 200) {
      getUserDetails(username);
      setCurrUser(response);
      setIsLoggedIn(true);
    } else {
      return response;
    }
  }

  return (
    <AuthContext.Provider value={ { isLoggedIn, currUser, validateLogin, validateRegister } }>
      { props.children }
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

