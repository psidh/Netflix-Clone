import React from 'react';
import Login from './Login';
import Navbar from './Navbar';
export default function Home() {
  return (
    <div
      className='bg-cover bg-center h-screen bg-opacity-50 relative'
      style={{ backgroundImage: `url('/bg.jpg')` }}
    >
      <Navbar />
      <div className='p-24 flex justify-center h-screen items-center'>
        <Login />
      </div>
    </div>
  );
}
