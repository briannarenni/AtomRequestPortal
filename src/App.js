import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';
import AppHeader from "./components/AppHeader";
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div className="App">
      <Landing />
      {/* <AppHeader /> */ }
      {/* <Dashboard /> */ }
      {/* <Login /> */ }
      {/* <ResetPassword /> */ }
      {/* <Register /> */ }
    </div>
  );
}
