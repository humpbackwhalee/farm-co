import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LuMenu, LuX } from "react-icons/lu";
import Logo from './Logo';
import OpenWeatherAPI from './OpenWeatherAPI';

export default function Header() {
  const navItems = [
    { label: 'Design', path: '/design' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          {/* Weather Widget - Hidden on mobile */}
          <div className="hidden md:block">
            <OpenWeatherAPI />
          </div>

          {/* Navigation */}
          <div ref={navRef} className="relative">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-900 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
              aria-expanded={isOpen}
              aria-controls="main-navigation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <LuX className="block h-6 w-6" />
              ) : (
                <LuMenu className="block h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 font-comfortaa">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? "text-emerald-900 font-bold" 
                        : "text-gray-700 hover:text-emerald-900"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Navigation */}
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } md:hidden fixed inset-0 z-50 bg-gray-800 bg-opacity-25 backdrop-blur-sm`}
              onClick={() => setIsOpen(false)}
            >
              <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-100">
                  <Link 
                    to="/" 
                    onClick={() => setIsOpen(false)}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Logo />
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <LuX className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Weather Widget */}
                <div className="px-4 py-3 border-b border-gray-100">
                  <OpenWeatherAPI />
                </div>

                <nav className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      className={({ isActive }) => 
                        `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                          isActive 
                            ? "bg-emerald-50 text-emerald-900 font-bold" 
                            : "text-gray-700 hover:bg-gray-50 hover:text-emerald-900"
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}