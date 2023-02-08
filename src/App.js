import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ResetPassword from './components/ResetPassword/ResetPassword';


function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <ResetPassword /> */}
      <Register />
    </div>
  );
}

export default App;
