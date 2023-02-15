import React, { useState, useEffect, useContext, createContext } from 'react';

const AuthContext = createContext();
const local = localStorage;

export function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(local.getItem('isLoggedIn')) || null);
  const [currUser, setCurrUser] = useState(JSON.parse(local.getItem('currUser')) || {});

  useEffect(() => {
    local.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    local.setItem("currUser", JSON.stringify(currUser));
  }, [isLoggedIn, currUser])

  return (
    <AuthContext.Provider value={ { isLoggedIn, setIsLoggedIn, currUser, setCurrUser } }>
      { props.children }
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

