import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
  const [logout, setLogout] = useState(false);
  const navLogin = () => {
    if (logout) {
      return <Navigate to="/login" />;
    }
  };

  const handleClick = () => {
    sessionStorage.clear('token');
    setLogout(true);
  };

  return (
    <BrowserRouter>
      <header className="w-full bg-off-gray">
        <div className="flex justify-between py-2 px-6">
          <h1 className="text-2xl font-semibold text-off-white">Annual SDK Depositos</h1>
          <button
            onClick={handleClick}
            className="text-off-white px-2 py-1 border-2 border-off-orange rounded font-semibold text-base hover:bg-off-orange"
          >
            Logout
          </button>
        </div>
        <div className="w-full h-1 bg-off-orange"></div>
      </header>
      {navLogin()}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
