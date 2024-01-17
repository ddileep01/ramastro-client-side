import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <div className="bg-white p-8 rounded-lg shadow-md">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Capgemini_201x_logo.svg/2560px-Capgemini_201x_logo.svg.png" className="mb-2" alt="logo" height={120} width={120}></img>
        <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
        <p className='text-gray-400'>Don’t have an account? <span className="text-center text-blue-500 cursor-pointer mt-2 font-semibold" onClick={handleSignUp}>Sign up.</span></p>
        <div className='flex mt-4 mb-4'>
          <div className='mr-2'>
            <label>Email</label>
            <input
              required
              type="text"
              placeholder="name@example.com"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
          <div className='ml-2'>
            <label>Password</label>
            <input
              required
              type="password"
              placeholder="........"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-white p-3 rounded cursor-pointer hover:bg-green-600 focus:outline-none"
        >
          Login
        </button>
        <p className="text-center text-blue-500 cursor-pointer mt-2" onClick={handleSignUp}>
          Sign up
        </p>
        <div className="flex items-center my-6">
          <div className="flex-grow h-0.5 bg-gray-300"></div>
          <span className="mx-4 text-gray-700">or</span>
          <div className="flex-grow h-0.5 bg-gray-300"></div>
        </div>
        <button
          className="w-full bg-blue-500 text-white p-3 rounded cursor-pointer hover:bg-blue-600 focus:outline-none"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
