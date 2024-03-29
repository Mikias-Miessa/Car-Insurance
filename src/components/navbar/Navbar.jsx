'use client'
import { usePathname } from 'next/navigation'
import { useState  } from 'react';
import Link from 'next/link';
import {FaBars } from 'react-icons/fa'
import ProfileIcon from '../profileIcon/ProfileIcon';
import {  useDispatch, useSelector } from 'react-redux';
const navLinks = [
    {
        id: 1,
        name: "Home",
        linkTo: "/"
    },
    {
        id: 2,
        name: "About",
        linkTo: "/#about"
    },
    {
        id: 3,
        name: "Service",
        linkTo: "/#service"
    },
    // {
    //     id: 4,
    //     name: "Register",
    //     linkTo: "/register"
    // },
    {
        id: 5,
        name: "Contact",
        linkTo: "/#contact"
    },
]

const Navbar = () => {
    const { isAuthenticated} = useSelector((state) => state.auth);
    const pathname = usePathname()
    const [isMenuOpen, setMenuOpen] = useState(false);

    const isActiveLink = (linkTo) => {
        if (linkTo === "/") {
            return pathname === "/";
        } else {
            return pathname.startsWith(linkTo);
        }
    };
    
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
            <nav className="bg-sky-600 fixed top-0 w-full z-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/">
                                <p className="text-white font-bold text-2xl">Car Insurance</p>
                            </Link>
                        </div>
                        <div className='flex items-center'>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {navLinks.map((navLink) => (
                                        <div key={navLink.id}>
                                            <Link href={navLink.linkTo}>
                                                <p className={`text-gray-200 hover:text-white hover:underline px-3 py-2 rounded-md text-lg font-semibold transition duration-300 ${isActiveLink(navLink.linkTo) ? 'text-white underline' : ''}`}>
                                                    {navLink.name}
                                                </p>
                                            </Link>
                                        </div>
                                    ))}
                                {!isAuthenticated &&
                                     <Link href={'/register'}>
                                    <p className={'text-gray-200 hover:text-white hover:underline px-3 py-2 rounded-md text-lg font-semibold transition duration-300 '}>
                                                    Register
                                                </p>
                                </Link>
                                }
                               
                                </div>
                        </div>
                        {isAuthenticated &&
                        <div className='md:mx-0 mx-4'>
                                <ProfileIcon />
                            </div>
                        }
                            
                            <div className="-mr-2 flex md:hidden">
                                <FaBars className=" text-3xl rounded-md text-white"  onClick={toggleMenu} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((navLink) => (
                            <div key={navLink.id} onClick={toggleMenu} >
                                <Link href={navLink.linkTo}>
                                    <button className="text-gray-200 hover:text-white hover:underline block px-3 py-2 rounded-md text-lg font-semibold text-center">
                                            {navLink.name}
                                    </button>
                                </Link>
                            </div>
                        ))}
                    {
                        !isAuthenticated && 
                         <Link href={'/register'} onClick={toggleMenu}>
                                    <button className={'text-gray-200 hover:text-white hover:underline block px-3 py-2 rounded-md text-lg font-semibold text-center '}>
                                                    Register
                                                </button>
                                </Link>
                        }
                        
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;