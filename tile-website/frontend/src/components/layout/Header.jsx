// frontend/src/components/layout/Header.tsx
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">Tile Website</Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6 text-white text-lg">
            <li>
              <Link href="/">
                <a className="hover:text-gray-400 transition duration-300">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <a className="hover:text-gray-400 transition duration-300">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <a className="hover:text-gray-400 transition duration-300">Support</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:text-gray-400 transition duration-300">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/auth/login">
                <a className="hover:text-gray-400 transition duration-300">Login</a>
              </Link>
            </li>
            <li>
              <Link href="/auth/register">
                <a className="hover:text-gray-400 transition duration-300">Register</a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 p-4">
          <ul className="space-y-4 text-white text-lg">
            <li>
              <Link href="/">
                <a className="hover:text-gray-400 transition duration-300">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <a className="hover:text-gray-400 transition duration-300">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <a className="hover:text-gray-400 transition duration-300">Support</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:text-gray-400 transition duration-300">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/auth/login">
                <a className="hover:text-gray-400 transition duration-300">Login</a>
              </Link>
            </li>
            <li>
              <Link href="/auth/register">
                <a className="hover:text-gray-400 transition duration-300">Register</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
