import { useContext } from 'react';
import { LanguageContext } from '../components/LanguageContext';
import { useTheme } from '../components/ThemeContext';

const LanguageToggleButton = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const { theme } = useTheme();

    return (
        <button
            onClick={() => setLanguage(prev => prev === 'th' ? 'en' : 'th')}
            className={`duration-200 transition-color flex items-center p-2 rounded-lg font-medium text-sm 
                ${theme === 'light'
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    : 'bg-gray-800 hover:bg-gray-700 text-white'}
                `}
            aria-label={`Change language to ${language === 'en' ? 'Thai' : 'English'}`}
        >
            <span>{language.toUpperCase()}</span>
        </button>
    );
}

export default LanguageToggleButton;

