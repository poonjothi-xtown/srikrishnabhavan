import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo2.png';

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    // Scroll to top when route changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    const handleLinkClick = () => {
        closeSidebar();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navItems = (
        <>
            <li>
                <NavLink
                    to="/welcome"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                        isActive
                            ? "relative text-white font-semibold text-lg group border-b-2 border-yellow-300 pb-1"
                            : "relative text-white font-semibold text-lg group"
                    }
                >
                    Welcome
                    <span className="block h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                        isActive
                            ? "relative text-white font-semibold text-lg group border-b-2 border-yellow-300 pb-1"
                            : "relative text-white font-semibold text-lg group"
                    }
                >
                    About Us
                    <span className="block h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/order-now"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                        isActive
                            ? "relative text-white font-semibold text-lg group border-b-2 border-yellow-300 pb-1"
                            : "relative text-white font-semibold text-lg group"
                    }
                >
                    Order Now
                    <span className="block h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/contactus"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                        isActive
                            ? "relative text-white font-semibold text-lg group border-b-2 border-yellow-300 pb-1"
                            : "relative text-white font-semibold text-lg group"
                    }
                >
                    Contact Us
                    <span className="block h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </NavLink>
            </li>
        </>
    );

    return (
        <>
            {/* Navbar */}
            <nav className="bg-gradient-to-r from-emerald-600 to-lime-600 py-6 shadow-lg fixed w-full z-50">
                <div className="w-full px-[20px] flex justify-between items-center">
                    {/* Logo and Company Name */}
                    <div className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="sri krishana bhavan Logo"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <h1 className="text-3xl font-extrabold text-white tracking-wide">
                            SRI KRISHANA BHAVAN
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8">{navItems}</ul>

                    {/* Mobile Menu Icon */}
                    <button className="md:hidden text-white text-2xl" onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            <div
                onClick={closeSidebar}
                className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 w-64 h-full bg-gradient-to-r from-emerald-600 to-lime-600 z-50 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center px-6 py-4 border-b bg-gradient-to-r from-emerald-600 to-lime-600">
                    <h2 className="text-white text-lg font-bold">Menu</h2>
                    <button onClick={closeSidebar} className="text-white text-xl">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <ul className="flex flex-col gap-6 px-6 py-4">{navItems}</ul>
            </div>
        </>
    );
}

export default Navbar;
