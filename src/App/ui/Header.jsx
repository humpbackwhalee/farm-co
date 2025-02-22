
import { useContext, useMemo, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { LuMenu, LuX } from 'react-icons/lu';
import { MdLanguage } from 'react-icons/md';
import { useTranslation, LanguageContext } from '../components/LanguageToggle';
import { useTheme } from '../components/ThemeContext';
import Logo from '../ui/Logo';
import ThemeToggle from '../components/ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const { theme } = useTheme();
  const t = useTranslation();

  // Handle menu closing animation
  const handleMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 700); // Match the duration-700 of the transition
  };

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
        setIsClosing(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const navItems = useMemo(() => [
    { label: t.design, path: '/design', ariaLabel: `${t.design} page` },
    { label: t.blog, path: '/blog', ariaLabel: `${t.blog} page` },
    { label: t.about, path: '/about', ariaLabel: `${t.about} page` },
  ], [t]);

  // Enhanced language toggle button with icon and label
  const LanguageToggleButton = () => (
    <button
      onClick={() => setLanguage(prev => prev === 'en' ? 'th' : 'en')}
      className={`
        px-3 py-1.5 rounded-lg
        font-medium text-sm
        transition-colors duration-200
        flex items-center gap-1.5
        ${theme === 'light'
          ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          : 'bg-gray-800 hover:bg-gray-700 text-white'}
      `}
      aria-label={`Change language to ${language === 'en' ? 'Thai' : 'English'}`}
    >
      <MdLanguage aria-hidden="true" />
      <span>{language.toUpperCase()}</span>
    </button>
  );

  // Get current menu state classes
  const menuStateClasses = isClosing
    ? 'opacity-0 -translate-y-full pointer-events-none'
    : isOpen
      ? 'opacity-100 translate-y-0 pointer-events-auto'
      : 'opacity-0 -translate-y-full pointer-events-none';

  return (
    <>
      <header
        className={`
          w-full z-50 sticky top-0
          ${theme === 'light' ? 'bg-white border-gray-100' : 'bg-gray-900 border-gray-800 text-white'}
          border-b transition-colors duration-300
        `}
        role="banner"
      >
        <div className="max-w-6xl mx-auto h-12 px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" aria-label="Home page">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => `
                  transition-colors duration-200 hover:opacity-80
                  ${isActive ? 'font-bold' : ''}
                `}
                aria-label={item.ariaLabel}
              >
                {item.label}
              </NavLink>
            ))}
            <LanguageToggleButton />
            <ThemeToggle />
          </nav>

          {/* Menu Button - Hidden on medium and large screens */}
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageToggleButton />
            <ThemeToggle />
            <button
              onClick={() => isOpen ? handleMenuClose() : setIsOpen(true)}
              className="p-1 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500 rounded"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <LuX size={28} /> : <LuMenu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`
          absolute top-12 left-0 right-0 z-40 shadow-lg 
          transform transition-all duration-700 ease-in-out md:hidden
          ${menuStateClasses}
          ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}
        `}
        aria-hidden={!isOpen}
      >
        <nav
          className="flex flex-col pt-8 justify-center items-center h-[calc(100vh-3rem)]"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={handleMenuClose}
              className={({ isActive }) => `
                py-4 px-4 w-full text-center text-xl
                transition-colors duration-200
                ${isActive ? 'font-bold' : ''}
                ${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-800'}
              `}
              aria-label={item.ariaLabel}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Overlay to capture clicks outside menu when open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={handleMenuClose}
          aria-hidden="true"
        />
      )}
    </>
  );
}