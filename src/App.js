import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { localService, userService } from './modules/services';
import { AppHeader, Landing, Login, Register } from './modules/landingPages';
import { Dashboard, ResetPassword } from './modules/userPages';

export default function App() {
  return (
    <div className="App">
      <AppHeader />
      <Dashboard />
      {/* <Landing /> */}
    </div>
  );
}
