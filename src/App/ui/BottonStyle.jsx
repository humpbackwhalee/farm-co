import { Link } from 'react-router';

export const BottomMain = ({ to, text }) => {
    return (
        <Link
            to={to}
            onClick={() => window.scrollTo(0, 0)}
            className="px-4 py-2 sm:px-6 sm:py-3 font-comfortaa text-white text-lg sm:text-xl bg-btn_main hover:bg-btn_main-hover rounded-lg transition-colors"
        >
            {text}
        </Link>
    )
}

export const BottomSecondary = ({ to, text }) => {
    return (
        <Link
            to={to}
            onClick={() => window.scrollTo(0, 0)}
            className="px-4 py-2 sm:px-6 sm:py-3 font-comfortaa text-white text-lg sm:text-xl bg-btn_secondary hover:bg-btn_secondary-hover rounded-lg transition-colors"
        >
            {text}
        </Link>
    )
}

