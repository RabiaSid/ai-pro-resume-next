import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "media/assets/logo_resume.webp";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    // const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        {
            name: "Services",
            submenu: [
                { name: "Web Development", path: "/services/web-development" },
                { name: "Mobile Apps", path: "/services/mobile-apps" },
                { name: "SEO Optimization", path: "/services/seo" }
            ]
        },
        { name: "Pricing", path: "/pricing" },
        { name: "Contact", path: "/contact" },
        {
            name: "Login", path: "/login",
            className: "text-indigo-600 border border-transparent hover:bg-indigo-100 hover:text-indigo-700"
        },
        {
            name: "Signup", path: "/register",
            className: "text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white mt-1 md:mt-0 md:ml-1"
        }
    ];

    return (
        <nav className="bg-white py-2 md:py-4 shadow-md">
            <div className="container px-4 mx-auto flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex ">
                    <Image src={Logo} alt="Logo" width={150} height={40} className="logo py-2" />
                </Link>

                {/* Mobile Menu Toggle */}
                <button onClick={toggleMenu} className="md:hidden p-2 text-gray-700">
                    {menuOpen ? '✖' : '☰'}
                </button>

                {/* Menu Items */}
                <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-5 md:p-0 transition-all duration-300 
                    ${menuOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-4`}>

                    {menuItems.map((item, index) => (
                        <div key={index} className="relative group">
                            {/* Regular Menu Item */}
                            {!item.submenu ? (
                                <Link href={item.path} className={`block p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:primaryBlue hover:text-gray-700 transition-colors duration-300 ${item.className || ""}`}>
                                    {item.name}
                                </Link>
                            ) : (
                                /* Dropdown Menu */
                                <div>
                                    <button
                                        // onClick={toggleSubmenu}
                                        className=" p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 flex items-center"
                                    >
                                        {item.name} ▼
                                    </button>

                                    <div className={`absolute left-0 mt-1 w-48 bg-white border rounded-lg shadow-md transition-all duration-300 
                                        ${submenuOpen ? "block" : "hidden"} md:group-hover:block`}>
                                        {item.submenu.map((sub, subIndex) => (
                                            <Link key={subIndex} href={sub.path} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
