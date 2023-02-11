import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { User } from "./modules/ServiceModule";
import { AppHeader, Landing, FAQ, Login, Register, Dashboard } from './modules/PageModule';
import { NotFound, BackBtn } from './modules/ComponentModule';

export default function App() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="App">
      <AppHeader />
      { path !== "/" && path !== "/dashboard" && <BackBtn /> }
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/faq" element={ <FAQ /> }></Route>
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}
