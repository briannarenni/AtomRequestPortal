import React, { useState, useEffect, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext();

export function AuthProvider(props) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')) || null);
  const [currUser, setCurrUser] = useState(JSON.parse(localStorage.getItem('currUser')) || {});

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    localStorage.setItem('currUser', JSON.stringify(currUser));
  }, [isLoggedIn, currUser]);

  const redirection = (params) => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/dashboard');
    }
  }

  return (
    <AuthContext.Provider value={ { isLoggedIn, setIsLoggedIn, currUser, setCurrUser, redirection } }>
      { props.children }
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

