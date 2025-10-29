import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "../../utils/Theme/DarkModeToggle";
import profile_img from "../../assets/food.png";

export default function Navigation_bar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    // ✅ Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // ✅ Function to close dropdown when a menu item is clicked
    const handleMenuItemClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-green-100 dark:bg-gray-900 shadow-md fixed w-full  top-0 left-0 h-17  md:h-16 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-green-600">🍴 FoodieMedia</div>

                {/* 🌐 Desktop Menu */}
                <ul className="hidden md:flex md:items-center md:justify-center space-x-8 font-medium">
                    <li className="hover:text-green-600 cursor-pointer flex items-center justify-center">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="hover:text-green-600 cursor-pointer flex items-center justify-center">
                        <Link to="/recipe-post">Recipes</Link>
                    </li>
                    <li className="hover:text-green-600 cursor-pointer flex items-center justify-center">
                        <Link to="/community">Community</Link>
                    </li>
                    <li className="hover:text-green-600 cursor-pointer flex items-center justify-center">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="hover:text-green-600 cursor-pointer flex items-center justify-center">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="flex items-center justify-center">
                        <DarkModeToggle />
                    </li>

                    <li className="hover:text-green-600 bg-red-400 w-8 h-8 rounded-full cursor-pointer flex items-center justify-center">
                        <Link to={'/login'}>
                            <img
                                src={profile_img}
                                className="rounded-full object-cover h-8 w-8"
                                alt=""
                            />
                        </Link>
                    </li>
                </ul>

                {/* 📱 Mobile Menu Button */}
                <button
                    ref={buttonRef}
                    className="md:hidden text-3xl text-gray-700 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* 📋 Mobile Dropdown */}
            <div
                ref={menuRef}
                className={`md:hidden fixed w-full bg-green-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-900 shadow-md transition-all duration-500 ${isOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <ul className="flex flex-col items-center space-y-4 py-4 font-medium">
                    <li
                        className="hover:text-green-600 cursor-pointer"
                        onClick={handleMenuItemClick}
                    >
                        <Link to="/login">Profile</Link>
                    </li>
                    <li
                        className="hover:text-green-600 cursor-pointer"
                        onClick={handleMenuItemClick}
                    >
                        <Link to="/home">Home</Link>
                    </li>
                    <li
                        className="hover:text-green-600 cursor-pointer"
                        onClick={handleMenuItemClick}
                    >
                        <Link to="/recipe-post">Recipe</Link>
                    </li>
                    <li
                        className="hover:text-green-600 cursor-pointer"
                        onClick={handleMenuItemClick}
                    >
                        <Link to="/community">Community</Link>
                    </li>
                    <li
                        className="hover:text-green-600 cursor-pointer"
                        onClick={handleMenuItemClick}
                    >
                        <Link to="/about">About</Link>
                    </li>
                    <li
                        className="hover:text-green-600 cursor-pointer"
                        onClick={handleMenuItemClick}
                    >
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li onClick={handleMenuItemClick}>
                        <DarkModeToggle />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
