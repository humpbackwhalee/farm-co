import { useState, useMemo } from 'react';
import { Link, NavLink, useMatch } from 'react-router';
import { LuMenu, LuX } from "react-icons/lu";
import Logo from './Logo';

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
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
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
          sm:hidden fixed left-0 right-0 bg-white
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-y-16' : '-translate-y-full'}
          z-40
        `}
      >
        <nav className="h-[50vh] flex flex-col justify-center items-center py-8 space-y-8">
          {navItems.map((item) => {
            const isActive = useMatch(item.path);
            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={`
                  text-xl
                  ${isActive ? 'font-bold' : ''}
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16" />
    </>
  );
}