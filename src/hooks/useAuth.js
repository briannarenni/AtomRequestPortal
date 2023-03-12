import React, { useReducer, useMemo, useEffect, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  currUser: JSON.parse(localStorage.getItem('currUser')) || {}
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_IS_LOGGED_IN':
      return { ...state, isLoggedIn: action.payload };
    case 'SET_CURR_USER':
      return { ...state, currUser: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

export function AuthProvider(props) {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const isManager = useMemo(() => state.currUser.role === 'manager', [state.currUser.role]);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(state.isLoggedIn));
  }, [state.isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('currUser', JSON.stringify(state.currUser));
  }, [state.currUser]);

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currUser');
    dispatch({ type: 'SET_IS_LOGGED_IN', payload: false });
    dispatch({ type: 'SET_CURR_USER', payload: {} });
    navigate('/AtomRequestPortal');
  };

  return (
    <AuthContext.Provider value={{ ...state, isManager, logout, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
