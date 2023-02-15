import React, { useState, useContext, createContext } from 'react';

const AuthContext = createContext();

export function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [currUser, setCurrUser] = useState({});

  return (
    <AuthContext.Provider value={ { isLoggedIn, setIsLoggedIn, currUser, setCurrUser } }>
      { props.children }
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

