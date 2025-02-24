
import { useMemo, useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { LuMenu, LuX } from 'react-icons/lu';
import { useTranslation } from '../components/LanguageContext';
import LanguageToggleButton from '../components/LanguageToggleButton';
import { useTheme } from '../components/ThemeContext';
import ThemeToggle from '../components/ThemeToggleButton';
import Logo from '../ui/Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const t = useTranslation();

  const navItems = useMemo(() => [
    { label: t.design, path: '/design', ariaLabel: `${t.design} page` },
    { label: t.blog, path: '/blog', ariaLabel: `${t.blog} page` },
    { label: t.about, path: '/about', ariaLabel: `${t.about} page` },
  ], [t]);

  return (
    <>
      <header
        className={`w-full h-16 px-2 sm:px-4 flex justify-between items-center z-30 
          ${isOpen
            ? 'fixed top-0 z-30'
            : ' '}
          ${theme === 'light'
            ? 'bg-white'
            : 'bg-gray-900 text-white'
          }
        `}
        role="banner"
      >
        {/* Logo */}
        <div onClick={() => setIsOpen(false)}>
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className={'hidden sm:flex flex-row justify-center items-center gap-4'}>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `font-comfortaa ${isActive ? 'font-bold' : ''}`}
              role='navigation'
              aria-label='Main navigation'
            >
              {item.label}
            </NavLink>
          ))}

          {/* Language and Theme Toggle */}
          <LanguageToggleButton />
          <ThemeToggle />
        </nav>

        {/* Menu Button - Hidden on Desktop and shown on Mobile */}
        <div className='sm:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='py-2 text-3xl'
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </header >

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-16 left-0 right-0 z-50 bg-white overflow-hidden transition-all duration-650 ease-in-out 
          ${isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0"
          }`}
      >
        <nav className="h-screen pb-[30vh] flex flex-col justify-center items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              onClick={() => setIsOpen(false)}
              key={item.label}
              to={item.path}
              className={({ isActive }) => `font-comfortaa text-3xl ${isActive ? "font-bold" : ""}`}
              role="navigation"
              aria-label="Main navigation"
            >
              {item.label}
            </NavLink>
          ))}

          {/* Language and Theme Toggle */}
          <div className='flex flex-row justify-center items-center gap-2'>
            <LanguageToggleButton />
            <ThemeToggle />
          </div>
        </nav>
      </div >
    </>
  );
}