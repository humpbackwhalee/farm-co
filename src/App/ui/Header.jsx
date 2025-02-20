import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useMatch } from 'react-router';
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
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-full mx-auto 
        px-4 
        sm:px-6 sm:max-w-[640px] 
        md:px-8 md:max-w-[768px] 
        lg:px-12 lg:max-w-[1024px] 
        xl:max-w-[1280px] 
        2xl:max-w-[1920px]"
      >
        <div className="flex justify-between items-center 
          min-h-[3.5rem] 
          sm:min-h-[4rem] 
          md:min-h-[5rem] 
          lg:min-h-[6rem]"
        >
          {/* Logo with hover effect */}
          <Link 
            to="/" 
            className="hover:opacity-80 transition-all duration-200 ease-in-out
              scale-90
              sm:scale-95
              md:scale-100
              lg:scale-105"
          >
            <Logo />
          </Link>

          {/* Weather Widget with fade-in */}
          <div className="hidden sm:block transition-opacity duration-300 ease-in-out">
            <OpenWeatherAPI />
          </div>

          {/* Navigation */}
          <div ref={navRef} className="relative">
            {/* Mobile Menu Button with improved interaction */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="inline-flex items-center justify-center 
                p-2 rounded-md 
                text-emerald-900 
                sm:hidden 
                hover:bg-emerald-50 
                active:bg-emerald-100
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-expanded={isOpen}
              aria-controls="main-navigation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <LuX className="h-5 w-5 transform rotate-0 transition-transform duration-200" />
              ) : (
                <LuMenu className="h-5 w-5 transform rotate-0 transition-transform duration-200" />
              )}
            </button>

            {/* Desktop/Tablet Navigation with improved interactions */}
            <nav className="hidden sm:flex font-comfortaa items-center
              space-x-3 
              sm:space-x-4 
              md:space-x-6 
              lg:space-x-8"
            >
              {navItems.map((item) => {
                const isActive = useMatch(item.path);
                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={`
                      relative rounded-md 
                      transition-all duration-200 ease-in-out
                      group
                      px-2 py-1.5 
                      sm:px-2.5 sm:py-2 sm:text-sm
                      md:px-3 md:py-2 md:text-base
                      lg:px-4 lg:py-2.5 lg:text-lg
                      ${isActive 
                        ? "text-emerald-900 font-bold" 
                        : "text-gray-700 hover:text-emerald-900"
                      }`
                    }
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 
                      transition-all duration-200 ease-in-out
                      group-hover:w-full
                      ${isActive ? 'w-full' : ''}`} 
                    />
                  </NavLink>
                );
              })}
            </nav>

            {/* Mobile Navigation with improved animations */}
            <div
              className={`${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              } sm:hidden fixed inset-0 z-50 bg-gray-800/25 backdrop-blur-sm
              transition-opacity duration-200 ease-in-out`}
              onClick={() => setIsOpen(false)}
            >
              <div 
                className={`fixed inset-y-0 right-0 w-full max-w-[320px] bg-white shadow-xl
                  transform transition-transform duration-300 ease-in-out
                  ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Mobile Header with improved spacing */}
                <div className="flex items-center justify-between h-14 px-4 border-b border-gray-100">
                  <Link 
                    to="/" 
                    onClick={() => setIsOpen(false)}
                    className="hover:opacity-80 transition-all duration-200"
                  >
                    <Logo />
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-md 
                      text-gray-500 
                      hover:text-gray-600 hover:bg-gray-50
                      active:bg-gray-100
                      transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <LuX className="h-5 w-5" />
                  </button>
                </div>

                <div className="px-4 py-3 border-b border-gray-100">
                  <OpenWeatherAPI />
                </div>

                {/* Mobile Navigation Links with improved interactions */}
                <nav className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => {
                    const isActive = useMatch(item.path);
                    return (
                      <NavLink
                        key={item.label}
                        to={item.path}
                        className={`
                          block px-3 py-2.5 rounded-md 
                          text-base 
                          transition-all duration-200 ease-in-out
                          transform hover:translate-x-1
                          ${isActive 
                            ? "bg-emerald-50 text-emerald-900 font-bold" 
                            : "text-gray-700 hover:bg-gray-50/50 hover:text-emerald-900"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}