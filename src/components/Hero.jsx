import React from 'react';
import HeroImage from '../assets/hero.png';
import DarkHeroImage from '../assets/hero-dark.png';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
		const { darkMode } = useTheme();
	
  return (
    <div className="bg-white mt-6 text-black dark:bg-black dark:text-white text-center py-16 transition-colors" id='home'>
      <img
        src={darkMode ? HeroImage : DarkHeroImage}
        alt="Tigran Gevorgyan"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Tigran Gevorgyan
        </span>
        , Front End Developer
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        
        <a
          href="https://drive.google.com/file/d/181LABEN0evJ6ilcB6ep7Jvvc2hYgCQEV/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-yellow-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full inline-block font-medium"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
