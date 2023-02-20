import React, { useState, useEffect, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')) || false);
  const [currUser, setCurrUser] = useState(JSON.parse(localStorage.getItem('currUser')) || {});
  const [isManager, setIsManager] = useState(currUser.role) || false;
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    localStorage.setItem('currUser', JSON.stringify(currUser));
    if (currUser.role === 'manager') {
      setIsManager(true);
    } else {
      setIsManager(false);
    }
  }, [isLoggedIn, currUser])

  const logout = () => {
    setIsLoggedIn(false);
    setCurrUser({});
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currUser');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={ { isLoggedIn, setIsLoggedIn, currUser, setCurrUser, isManager, logout } }>
      { props.children }
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
