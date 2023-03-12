import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { AuthProvider, useAuthRoute } from './hooks';
import { AppNav } from './components/ui/';

export default function App() {
  const { getRoutes } = useAuthRoute();

  return (
    <AuthProvider>
      <div className="App container-fluid">
        <AppNav />
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
