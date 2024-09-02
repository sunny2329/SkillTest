import React from 'react'
import { Button } from './ui/button'

function Navbar() {
    return (
        <>
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li>
                                <a>Branches</a>
                                <ul className="p-2 bg-black text-white">
                                    <li><a>Delhi</a></li>
                                    <li><a>Mumbai</a></li>
                                </ul>
                            </li>
                            <li>
                                <a>Services</a>
                                <ul className="p-2 bg-black text-white">
                                    <li><a>Bootcamps</a></li>
                                    <li><a>Offline Classes</a></li>
                                </ul>
                            </li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Skill Test</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[1.2rem]">
                        <li><a>Home</a></li>
                        <li>
                            <details>
                                <summary>Branches</summary>
                                <ul className="p-2 z-50 bg-black text-white">
                                    <li><a>Delhi</a></li>
                                    <li><a>Mumbai</a></li>
                                </ul>
                            </details>
                        </li>

                        <li><a>About Us</a></li>

                        <li className=''>
                            <details>
                                <summary>Services</summary>
                                <ul className="p-2 bg-black z-50 text-white">
                                    <li><a>Bootcamps</a></li>
                                    <li><a>Offline Classes</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Button asChild>
                        <a href="#">Login</a>
                    </Button>
                    <Button asChild>
                        <a href="#" className='ml-3'>SignUp</a>
                    </Button>

                </div>
            </div>
        </>
    )
}

export default Navbar
