import React, { useState, useRef, useEffect } from "react";
import {Link} from 'react-router-dom';
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

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <div className="text-2xl font-bold text-green-600"> 🍴 FoodVerse</div>

                {/* 🌐 Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    <li className="hover:text-green-600 cursor-pointer">Home</li>
                    <li className="hover:text-green-600 cursor-pointer">Recipes</li>
                    <li className="hover:text-green-600 cursor-pointer">Community</li>
                    <li className="hover:text-green-600 cursor-pointer">About</li>
                    <li className="hover:text-green-600 cursor-pointer">Contact</li>
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
                className={`md:hidden bg-white border-t border-gray-200 shadow-md transition-all duration-500 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
                    <li className="hover:text-green-600 cursor-pointer">
                        <Link to='/home'>
                            Home
                        </Link>
                    </li>
                    <li className="hover:text-green-600 cursor-pointer">Recipes</li>
                    <li className="hover:text-green-600 cursor-pointer">Community</li>
                    <li className="hover:text-green-600 cursor-pointer">About</li>
                    <li className="hover:text-green-600 cursor-pointer">Contact</li>
                </ul>
            </div>
        </nav>
    );
}
