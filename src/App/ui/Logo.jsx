import { Link } from 'react-router';

export default function Logo() {
    return (
        <Link to='/'
            className='font-jost text-3xl font-light tracking-wider'
            onClick={() => window.scrollTo(0, 0)}
            aria-label="Home">
            garden
        </Link>
    )
}