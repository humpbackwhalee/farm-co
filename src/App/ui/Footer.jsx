import { Link } from 'react-router'

import Logo from '../ui/Logo'

function Footer() {

    return (
        <footer className=' bg-slate-100'>
            <div className='sm:h-16 grid sm:grid-cols-3 items-center px-4 mx-4 space-y-2 sm:space-y-0'>
                <div className="flex flex-row space-x-2 text-sm text-slate-500 text-center order-2 sm:order-1">
                    <Link href="/privacy-policy" className='hover:underline'>Privacy</Link>
                    <div>|</div>
                    <Link href="/terms-of-use" className='hover:underline'>Terms of Use</Link>
                    <div>|</div>
                    <Link href="/security-policy" className='hover:underline'>Security</Link>
                    <div>|</div>
                    <Link href="/cookie-policy" className='hover:underline'>Cookies</Link>
                </div>

                <div className='flex justify-center pt-2 sm:pt-0 order-1 sm:order-2'>
                    <Logo />
                </div>

                <div className='text-sm text-slate-500 text-center mb-2 sm:mb-0 sm:text-right order-3'>
                    &copy; 2024 garden. All rights reserved.
                </div>
            </div>

        </footer>
    );
}

export default Footer;