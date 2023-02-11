import React, { useState, useContext, createContext } from 'react';
import { loginUser, registerUser, getUserDetails } from "./modules/ServiceModule";

const AuthContext = createContext();

export default function AuthProvider() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currUser, setCurrUser] = useState({});

  const validateLogin = () => { }

  const validateRegister = () => { }

  return (
    <div>AuthContext</div>
  )
}
