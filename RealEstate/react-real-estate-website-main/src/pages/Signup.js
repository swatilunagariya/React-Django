import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/img/logou.jpg';
const Signup = () => {
  const [username,setname1] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const info={
    name:username,
    email:email,
    password:password,
}

  const handlesubmit=async(e)=>{
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8000/api/signup/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
          },
          body: JSON.stringify(info),
        });
        const data = await response.json();
        if(data.name===info.name){
            // navigate('/home')
            navigate('/login')
          }
        } 
        catch (error) {
            console.error('Error:', error);
        }
    }

    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        const getCsrfToken = async () => {
          const response = await fetch('/get-csrf-token/');
          const data = await response.json();
          setCsrfToken(data.csrfToken);
        };
        getCsrfToken();
      }, []);

  return (
    <div 
    className="relative bg-cover bg-center  flex items-center justify-center" 
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="flex justify-center items-center min-h-screen">
    <div className="relative z-10 max-w-lg w-full mx-4 sm:mx-auto">
      <form 
        onSubmit={handlesubmit} 
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setname1(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-violet-600"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-violet-600"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-violet-600"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-violet-600"
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-violet-700 text-white py-2 rounded-lg hover:bg-violet-800 transition"
        >
          Sign Up
        </button>

        {/* Login link */}
        <p className="text-center mt-4">
          Already have an account? <Link to="/login" className="text-violet-700 hover:underline">Log In</Link>
        </p>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Signup;
