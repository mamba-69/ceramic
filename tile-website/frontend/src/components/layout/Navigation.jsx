import React, { useState } from "react";
import Link from "next/link";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-semibold">
                    <h1>TileHub</h1>
                </div>
                <ul className={`flex gap-6 ${isMenuOpen ? "block" : "hidden"} md:flex`}>
                    <li>
                        <Link href="/" className="hover:bg-gray-700 px-4 py-2 rounded">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" className="hover:bg-gray-700 px-4 py-2 rounded">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:bg-gray-700 px-4 py-2 rounded">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:bg-gray-700 px-4 py-2 rounded">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/support" className="hover:bg-gray-700 px-4 py-2 rounded">
                            Support

