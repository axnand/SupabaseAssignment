import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Import the ThemeContext
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';
import { NavigationMenuDemo } from './NavigationMenuDemo';
import { NavPhone } from './NavPhone';

const Navbar = () => {
  const { theme } = useContext(ThemeContext); // Use the ThemeContext to get the theme
  const [focusedNav, setFocusedNav] = useState('home');

  const handleFocus = (navItem) => {
    setFocusedNav(navItem);
  };

  const handleBlur = () => {
    setFocusedNav('');
  };

  return (
    
    <nav className={`navbar ${theme === 'dark' ? 'dark' : ''} sticky-nav`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16">
          <div className="flex justify-center">
            <div className="inline-flex items-center">
              <a href='https://anandmohan.vercel.app' target='blank'><img className="h-8 w-8" src={`${theme === 'dark' ? 'assets/logo.png' : 'assets/logodark.png'}`} alt="Logo" /></a>
            </div>
            </div>
            <div className='flex'>
            <div className="sm:hidden flex">
            <NavPhone />
            </div>
            

            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 ">
              <NavigationMenuDemo />
              
            </div>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
