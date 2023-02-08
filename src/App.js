import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <Landing /> */}
      {/* <Login /> */}
      {/* <ResetPassword /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
