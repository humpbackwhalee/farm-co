import React from 'react';
import { useTheme } from './ThemeContext';
import { LuSun, LuMoon } from 'react-icons/lu';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            className={`
                p-2 rounded-lg flex items-center gap-2
                transition-colors duration-200
                ${isDark
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}
            `}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        >
            {isDark ? (
                <LuSun size={18} className="text-yellow-300" />
            ) : (
                <LuMoon size={18} />
            )}
        </button>
    );
};

export default ThemeToggle;