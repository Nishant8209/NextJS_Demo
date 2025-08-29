"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const pathname = usePathname();
    // Apply dark class to <html>
    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold text-blue-600 dark:text-white">
                        MySite
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-100">
                        <Link href="/" className={`hover:text-blue-600 dark:hover:text-blue-400 ${pathname === "/" ? "font-semibold text-blue-600 dark:text-blue-400" : ""}`}>Home</Link>
                        <Link href="/services" className={`hover:text-blue-600 dark:hover:text-blue-400 ${pathname === "/services" ? "font-semibold text-blue-600 dark:text-blue-400" : ""}`}>Services</Link>
                        <Link href="/about" className={`hover:text-blue-600 dark:hover:text-blue-400 ${pathname === "/about" ? "font-semibold text-blue-600 dark:text-blue-400" : ""}`}>About</Link>
                        <Link href="/contact" className={`hover:text-blue-600 dark:hover:text-blue-400 ${pathname === "/contact" ? "font-semibold text-blue-600 dark:text-blue-400" : ""}`}>Contact</Link>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center space-x-4">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="text-gray-800 dark:text-gray-200 focus:outline-none"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? "🌙" : "☀️"}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 pt-2 space-y-2 text-gray-800 dark:text-gray-100">
                    <Link href="/" className="block hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                    <Link href="/services" className="block hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
                    <Link href="/about" className="block hover:text-blue-600 dark:hover:text-blue-400">About</Link>
                    <Link href="/contact" className="block hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
                </div>
            )}
        </nav>
    );
}
