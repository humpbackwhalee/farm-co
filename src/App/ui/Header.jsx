import { useState, useMemo } from 'react';
import { Link, NavLink, useMatch } from 'react-router';
import { LuMenu, LuX } from "react-icons/lu";
import Logo from './Logo';
import OpenWeatherAPI from './OpenWeatherAPI';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = useMemo(() => [
    { label: 'Design', path: '/design' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
  ], []);

  return (
    <>
      {/* Fixed Header */}
      <header className="relative bg-white border-b border-gray-100 z-50">
        <div className="h-16 px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = useMatch(item.path);
              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={`text-xl ${isActive ? 'font-bold' : ''}`}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Menu Button - Mobile Only */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-emerald-900 sm:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <LuX className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div 
        className={`
          sm:hidden bg-white
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-y-16' : '-translate-y-full'}
          z-40 flex flex-col h-[50vh]
        `}
      >
        <nav className="flex-1 flex flex-col justify-center items-center py-8 space-y-8">
          {navItems.map((item) => {
            const isActive = useMatch(item.path);
            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={`
                  text-2xl sm:text-2xl md:text-3xl lg:text-4xl
                  ${isActive ? 'font-bold' : ''}
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
          <OpenWeatherAPI className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto"/>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16" />
    </>
  );
}