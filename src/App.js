import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './hooks';
import { AppNav, NotFound } from './components/ui';
import { BackBtn } from './components/btn/';
import { Landing, FAQ, Login, Register, Dashboard } from './pages';

export default function App() {
  return (
    <AuthProvider>
      <div className="App container-fluid">
        <AppNav />
        <BackBtn />
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/faq"
            element={<FAQ />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}
