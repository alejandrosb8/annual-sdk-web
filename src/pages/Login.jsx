import React, { Component } from 'react';
import LoginTab from '../components/LoginTab';

export default function Login() {
  return (
    <main className="grid place-items-center gap-y-6">
      <h1 className="mt-24 text-4xl font-bold">Login</h1>
      <LoginTab />
    </main>
  );
}
