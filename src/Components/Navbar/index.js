// Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="lg:bg-white lg:p-4 lg:fixed lg:w-full lg:z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <img
              src="https://aws.astrotalk.com/assets/images/astrotalk-header-logo.webp"
              alt="logo"
              className="w-24"
            />
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-gray-300 mr-3"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="#FFFFFF"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="#222222"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`lg:flex ${isMenuOpen ? "block" : "hidden"} items-center`}
        >
          <NavLink to="/">SPECIAL OFFER</NavLink>
          <NavLink to="/">EXPERTISE</NavLink>
          <NavLink to="/">WELCOME</NavLink>
          <NavLink to="/">BLOG</NavLink>
          <NavLink to="/">AMENITIES</NavLink>
          <NavLink to="/">VISIT ME</NavLink>
          <NavLink to="/">AVAILABILITY</NavLink>
          <NavLink to="/">GET IN TOUCH</NavLink>
        </div>
      </div>

      {/* Overlay for small and medium screens */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Navbar content for small and medium screens */}
      <div
        className={`lg:hidden absolute top-0 left-0 w-full ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="bg-gray-800 p-4">
          <NavLink to="/">SPECIAL OFFER</NavLink>
          <NavLink to="/">EXPERTISE</NavLink>
          <NavLink to="/">WELCOME</NavLink>
          <NavLink to="/">BLOG</NavLink>
          <NavLink to="/">AMENITIES</NavLink>
          <NavLink to="/">VISIT ME</NavLink>
          <NavLink to="/">AVAILABILITY</NavLink>
          <NavLink to="/">GET IN TOUCH</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <a
      href={to}
      className="text-gray-950 hover:text-[#DC9814] px-3 py-2 rounded-md text-sm font-medium block"
    >
      {children}
    </a>
  );
};

export default Navbar;
