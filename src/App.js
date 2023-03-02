import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthProvider, useAuthRoute } from './hooks';
import { AppNav } from './components/ui';
import { BackBtn } from './components/btn/';

export default function App() {
  const { getRoutes } = useAuthRoute();

  return (
    <AuthProvider>
      <div className="App container-fluid">
        <AppNav />
        <BackBtn />
        <Routes>
          {getRoutes().map(({ path, element }) => (
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
