import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './index.css'; // Keep your existing styles

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Logging in with:', emailOrPhone, password);
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleGoogleSignIn = () => {
    console.log('Signing in with Google');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button onClick={handleLogin} className="w-full bg-green-500 text-white p-2 rounded cursor-pointer">
          Login
        </button>
        <p className="text-blue-500 cursor-pointer" onClick={handleSignUp}>
          Sign up
        </p>
        <div className="flex items-center my-6">
          <div className="flex-grow h-0.5 bg-gray-300"></div>
          <span className="mx-4 text-gray-700">OR</span>
          <div className="flex-grow h-0.5 bg-gray-300"></div>
        </div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
