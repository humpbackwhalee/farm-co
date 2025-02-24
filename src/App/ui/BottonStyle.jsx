import { Link } from 'react-router';

export const BottomMain = ({ to, text }) => {
    return (
        <Link
            to={to}
            className="px-4 py-2 sm:px-6 sm:py-3 font-comfortaa font-semibold text-white text-lg sm:text-xl bg-btn-primary hover:bg-btn-primary-hover rounded-lg transition-colors"
        >
            {text}
        </Link>
    )
}

export const BottomSecondary = ({ to, text }) => {
    return (
        <Link
            to={to}
            className="px-4 py-2 sm:px-6 sm:py-3 font-comfortaa text-white text-lg sm:text-xl bg-stone-400 hover:bg-stone-500 rounded-lg transition-colors"
        >
            {text}
        </Link>
    )
}

