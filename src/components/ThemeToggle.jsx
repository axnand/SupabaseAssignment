import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="  px-3 py-2  text-sm font-medium"
    >
      <img className={`h-8 w-8 rounded-full p-1`} src={`${theme === 'light' ? 'assets/brightness.png' : 'assets/night-mode.png'}`} />
    </button>
  );
};

export default ThemeToggle;
