import { useState, useRef, useEffect, useMemo } from 'react';
import { Link, NavLink } from 'react-router';
import { LuMenu, LuX } from "react-icons/lu";
import Logo from '../ui/Logo';
import { useTranslation, LanguageContext } from '../components/LanguageToggle';
import { useContext } from 'react';

export default function Header({ theme = 'light' }) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const t = useTranslation();

  const navItems = useMemo(() => [
    { label: t.design, path: '/design' },
    { label: t.blog, path: '/blog' },
    { label: t.about, path: '/about' },
  ], [t]);

  // Language toggle button component
  const LanguageToggleButton = () => (
    <button
      onClick={() => setLanguage(prev => prev === 'en' ? 'th' : 'en')}
      className={`
        px-3 py-1.5 rounded-lg
        font-medium text-sm
        transition-colors duration-200
        ${theme === 'light' 
          ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
          : 'bg-gray-800 hover:bg-gray-700 text-white'}
      `}
    >
      {language.toUpperCase()}
    </button>
  );

  return (
    <>
      <header className={`
        w-full z-50
        ${theme === 'light' ? 'bg-white border-gray-100' : 'bg-gray-900 border-gray-800 text-white'}
        border-b
      `} role="banner">
        <div className="h-12 px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => `${isActive ? 'font-bold' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
            {/* Add Language Toggle to Desktop Nav */}
            <LanguageToggleButton />
          </nav>

          {/* Menu Button - Hidden on medium and large screens */}
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageToggleButton />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <LuX size={30} /> : <LuMenu size={30} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`bg-white md:hidden absolute top-12 left-0 right-0 z-40 shadow-lg transform transition-transform duration-700 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <nav className="flex flex-col mt-[20vh] justify-start items-start h-[calc(100vh-3rem)]">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                py-2 px-4 w-full text-center text-xl
                ${isActive ? 'font-bold' : ''}
              `}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}