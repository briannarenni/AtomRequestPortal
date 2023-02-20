import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Navbar, NotFound, BackBtn } from './components/ui';
import { Landing, FAQ, Login, Register, Dashboard } from './pages';
import { AuthProvider } from './hooks/useAuth';

export default function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <BackBtn />
        <Routes>
          <Route path="/" element={ <Landing /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/faq" element={ <FAQ /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </div>
    </AuthProvider>
  );
}
