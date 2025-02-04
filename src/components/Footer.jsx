import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black dark:bg-gray-900 dark:text-white py-8 transition-colors">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center text-center md:text-left mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Tigran</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Front End Developer based in Armenia, specializing in web and software development.
            </p>
          </div>
        </div>

        <div
          className="border-t border-gray-300 dark:border-gray-600 pt-4 flex flex-col md:flex-row justify-between 
          items-center text-center md:text-left flex-wrap"
        >
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Tigran. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://www.facebook.com/TigranGS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/tigran-gevorgyan-88257211b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/TigranGev89"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
          </div>

          {/* Privacy & Terms Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
