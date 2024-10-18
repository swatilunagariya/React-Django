
// Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import backgroundImage from '../assets/img/logou.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const navigate = useNavigate();

  const info = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify(info),
      });
      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage (assumed 'token' comes from API)
        localStorage.setItem('authToken', data.token);
        navigate('/'); // Redirect to home page
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
    <div className="relative z-10 max-w-lg w-full mx-4 sm:mx-auto">
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
        <div className="mb-6">
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
        <button
          type="submit"
          className="w-full bg-violet-700 text-white py-2 rounded-lg hover:bg-violet-800 transition"
        >
          Log In
        </button>

        {/* Register link */}
        <p className="text-center mt-4">
          Don't have an account? <Link to="/signup" className="text-violet-700 hover:underline">Register</Link>
        </p>
      </form>
    </div>
  </div>
  </div>
  );
};

export default Login;
