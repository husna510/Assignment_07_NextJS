import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-cyan-950 to-cyan-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
       
        <div className="text-lg font-bold">
          <Link href="/">
            <p className="hover:text-lime-600 hover:text-xl text-slate-100 transition-colors duration-300">Data Fetching</p>
          </Link>
        </div>

        
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <p className="hover:text-lime-600 hover:underline hover:font-bold text-white">Home</p>
          </Link>
          <Link href="/clientSide">
            <p className="hover:text-lime-600 hover:underline hover:font-bold text-white">Client Side</p>
          </Link>
          <Link href="/serverSide">
            <p className="hover:text-lime-600 hover:underline hover:font-bold text-white">Server Side</p>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label="Toggle Menu"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

    
      <div
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } flex-col space-y-4 px-6 pb-4 md:hidden`}
      >
        <Link href="/">
          <p className="hover:text-lime-600 hover:underline hover:font-bold text-white">Home</p>
        </Link>
        <Link href="/clientSide">
          <p className="hover:text-lime-600 hover:underline hover:font-bold text-white">Client Side</p>
        </Link>
        <Link href="/serverSide">
          <p className="hover:text-lime-600 hover:underline hover:font-bold text-white">Server Side</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
