import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AppHeader, Landing, FAQ, Login, Register, Dashboard } from './modules/PageModule';
import { NotFound, BackBtn } from './modules/ComponentModule';
import { AuthProvider } from './AuthContext';

export default function App() {

  return (
    <AuthProvider>
      <div className="App">
        <AppHeader />
        <BackBtn />
        <Routes>
          <Route path="/" element={ <Landing /> } />
          <Route path="/faq" element={ <FAQ /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </div>
    </AuthProvider>
  );
}
