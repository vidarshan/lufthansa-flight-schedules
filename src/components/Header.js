import React from 'react';
import logo from '../images/logo.png';

const Header = () => {



    const toggleNavigationBar = () => {
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        })
    }

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>

                            <a href="#!" className="flex items-center py-4 px-2">
                                <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                                <span className="font-semibold text-gray-500 text-lg">Lufthansa Schedules</span>
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center" onClick={() => toggleNavigationBar()}>
                        <button className="outline-none mobile-menu-button" >
                            <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="hidden mobile-menu">
                <ul className="">
                    <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
                    <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
                    <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
                    <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
                </ul>
            </div>


            {/* 
            {btn.addEventListener("click", () => {
                menu.classList.toggle("hidden");
            })}; */}

        </nav>
    )
}

export default Header