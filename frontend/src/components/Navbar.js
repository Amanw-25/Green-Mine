import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';
import { 
  Home, 
  Calculator, 
  LineChart, 
  BarChart3, 
  LogOut, 
  Menu, 
  X 
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const firebase = useFirebase();
  const loggedIn = firebase.isLoggedIn;

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-green-400 bg-clip-text text-transparent">
                Green Mine
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleNav}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-500 hover:bg-gray-100 transition duration-150"
            >
              {isNavOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <div className="flex space-x-8">
              <NavLink to="/" icon={<Home className="w-4 h-4" />} text="Home" />
              <NavLink to="/calculation" icon={<Calculator className="w-4 h-4" />} text="Calculation" />
              <NavLink to="/estimate" icon={<LineChart className="w-4 h-4" />} text="Estimate" />
              <NavLink to="/view" icon={<BarChart3 className="w-4 h-4" />} text="Display" />
            </div>

            {/* Auth Section */}
            <div className="flex items-center space-x-4">
              {!loggedIn ? (
                <Link
                  to="/login"
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 text-white font-medium hover:shadow-lg hover:scale-105 transition duration-300"
                >
                  Login
                </Link>
              ) : (
                <div className="relative">
                  <button
                    onClick={handleClick}
                    className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-emerald-500 hover:ring-4 transition duration-300"
                  >
                    <img
                      src="/assets/profile.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </button>
                  
                  {/* Profile Dropdown */}
                  {isMenuOpen && (
                    <div
                      ref={menuRef}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 transform opacity-100 scale-100 transition-all duration-200"
                    >
                      <Link
                        to="/"
                        onClick={firebase.handleLogout}
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-500 transition duration-150"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isNavOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" text="Home" />
            <MobileNavLink to="/calculation" text="Calculation" />
            <MobileNavLink to="/estimate" text="Estimate" />
            <MobileNavLink to="/view" text="Display" />
            
            {!loggedIn && (
              <Link
                to="/login"
                className="block w-full text-center px-4 py-2 rounded-md text-emerald-500 border-2 border-emerald-500 hover:bg-emerald-500 hover:text-white transition duration-150"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Helper Components
const NavLink = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-gray-700 hover:text-emerald-500 transition duration-150"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const MobileNavLink = ({ to, text }) => (
  <Link
    to={to}
    className="block px-3 py-2 rounded-md text-gray-700 hover:text-emerald-500 hover:bg-gray-100 transition duration-150"
  >
    {text}
  </Link>
);

export default Navbar;