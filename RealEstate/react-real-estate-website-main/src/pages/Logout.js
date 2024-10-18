// // Logout.js
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Clear the auth token from localStorage
//     localStorage.removeItem('authToken');

//     // Redirect the user to the login page after logout
//     navigate('/login');
//   }, [navigate]);

//   return null; // Optionally, you could show a message like "Logging out..." if you want
// };

// export default Logout;
// Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/img/logou.jpg';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the auth token from localStorage
    localStorage.removeItem('authToken');

    // Redirect the user to the login page after logout
    setTimeout(() => {
      navigate('/login');
    }, 2000);  // Optional delay for displaying the background while logging out
  }, [navigate]);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Replace with the correct path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', // Adjust text color based on image contrast
        fontSize: '24px',
        fontWeight: 'bold',
      }}
    >
      Logging out...
    </div>
  );
};

export default Logout;
