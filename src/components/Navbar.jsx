// src/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Alias Link to avoid conflict


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 shadow-md backdrop-blur-sm py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-[5%] flex items-center justify-between">
        {/* Logo (Left) */}
        <div className="flex-shrink-0">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-blue-600 hover:text-blue-800 cursor-pointer transition-colors duration-300"
          >
            IMRAN CODE'S
          </ScrollLink>
        </div>
        

        {/* Mobile Menu Button (Hamburger) - Visible on small screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links (Right, on large screens) */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } lg:flex absolute lg:static top-full right-0 w-full lg:w-auto
            bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 lg:translate-y-0 lg:opacity-100'}
            lg:transition-none lg:transform-none`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 items-center lg:items-center p-4 lg:p-0">
            {['home', 'about', 'skills', 'services', 'my-work', 'contact-me'].map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  spy={true} // यह प्रोप react-scroll को एक्टिव लिंक ट्रैक करने के लिए कहता है
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active-link" // जब यह लिंक एक्टिव होगा तो यह क्लास लागू होगी
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-2 py-2 text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors duration-200"
                >
                  {section.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;