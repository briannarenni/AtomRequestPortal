import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './hooks';
import { appRoutes } from './data/';
import { AppNav } from './components/ui';
import { BackBtn } from './components/btn/';

export default function App() {
  return (
    <AuthProvider>
      <div className="App container-fluid">
        <AppNav />
        <BackBtn />
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
        </Routes>
      </div>
    </AuthProvider>
  );
}
