import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    sessionStorage.clear('token');
    navigate('/annual-sdk-web/login');
  };

  return (
    <div>
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
      <Routes>
        <Route path="/annual-sdk-web/login" element={<Login />} />
        <Route path="/annual-sdk-web/" element={<Home />} />
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
