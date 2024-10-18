// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import PropertyDetails from './pages/PropertyDetails';
// import Signup from './pages/Signup';
// import Contact from './pages/Contact';
// import About from './pages/About';
// const App = () => {
//   return (<div className="max-w-[1440px] mx-auto bg-white">
//     <Header />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/property/:id" element={<PropertyDetails />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//     <Footer />
//   </div>)
// };

// export default App;
// App.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import PropertyDetails from './pages/PropertyDetails';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import About from './pages/About';
import Logout from './pages/Logout';

// PrivateRoute component to protect routes
const PrivateRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem('authToken'); // Check if user is logged in
  return isLoggedIn ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected routes */}
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/contact" element={<PrivateRoute element={<Contact />} />} />
        <Route path="/about" element={<PrivateRoute element={<About />} />} />
        <Route path="/property/:id" element={<PrivateRoute element={<PropertyDetails />} />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
