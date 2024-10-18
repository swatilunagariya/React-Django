// import { Link } from 'react-router-dom';
// import Logo from '../assets/img/logo.svg';

// const Header = () => {
//   return (
//     <header className="py-3 mb-5 border-b">
//       <div className="container-fluid flex items-center justify-end">
//         {/* Logo section */}
//         <div className="flex items-center flex-grow">
//           <Link to='/'>
//             <img src={Logo} alt="Logo" className="w-25 mr-8 ml-2" />
//           </Link>
//         </div>

//         {/* Navigation links */}
//         <div className="container flex items-center gap-6">
//           <Link to='/' className="ml-50px hover:text-violet-900 transition ml-9">Home</Link>
//           <Link to='/about' className="hover:text-violet-900 transition">About</Link>
//           <Link to='/contact' className="hover:text-violet-900 transition">Contact</Link>
//           <Link to='/login' className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition">
//             Log in
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// Header.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); // Check if user is logged in
  }, []);


  return (
    <nav>
      <ul>
        {!isLoggedIn ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        ) : (
          <>
        
          <header className="py-3 mb-5 border-b">
            <div className="container-fluid flex items-center justify-end">
              {/* Logo section */}
              <div className="flex items-center flex-grow">
              <li> <Link to='/'>
                  <img src={Logo} alt="Logo" className="w-25 mr-8 ml-2" />
                </Link> </li>
              </div>

              {/* Navigation links */}
              <div className="container flex items-center gap-6">
              <li> <Link to='/' className="ml-50px hover:text-violet-900 transition ml-9">Home</Link> </li>
              <li> <Link to='/about' className="hover:text-violet-900 transition">About</Link> </li>
              <li> <Link to='/contact' className="hover:text-violet-900 transition">Contact</Link> </li>
              <li>  <Link to='/logout' className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition">Logout</Link> </li>
              </div>
            </div>
          </header>
          {/* <li><button onClick={handleLogout}>Logout</button></li> */}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
