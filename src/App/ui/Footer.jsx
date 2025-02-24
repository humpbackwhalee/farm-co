import React from 'react'
import { Link } from 'react-router'

import Logo from '../ui/Logo'

function Footer() {

    const linkData = [
        { name: "privacy", path: "/privacy-policy" },
        { name: "terms of use", path: "/terms-of-use" },
        { name: "security", path: "/security-policy" },
        { name: "cookie", path: "/cookie-policy" }
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className=' bg-slate-100' aria-label="Footer">
            <div className='sm:h-16 grid sm:grid-cols-3 items-center px-4 mx-4 space-y-2 sm:space-y-0'>
                <div className="flex flex-row space-x-2 text-sm text-slate-500 text-center order-2 sm:order-1">
                    {linkData.map((link, index) => (
                        <React.Fragment key={link.path}>
                            <Link to={link.path} className='hover:underline' aria-label={link.name}>
                                {link.name}
                            </Link>
                            {index < linkData.length - 1 && <div>|</div>}
                        </React.Fragment>
                    ))}
                </div>

                <div className='flex justify-center pt-2 sm:pt-0 order-1 sm:order-2'>
                    <Logo />
                </div>

                <div className='text-sm text-slate-500 text-center mb-2 sm:mb-0 sm:text-right order-3'>
                    &copy; {currentYear} garden. All rights reserved.
                </div>
            </div>

        </footer>
    );
}

export default Footer;