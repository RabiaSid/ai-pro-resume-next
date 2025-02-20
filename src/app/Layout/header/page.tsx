import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "media/assets/logo_resume.webp";
import styles from "./header.module.css"
import { BiCaretDown, BiSolidUser, BiUserCircle } from 'react-icons/bi';

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
            className: "text-black border border-transparent hover:bg-transparent hover:text-primaryBlue",
            leftIcon: <BiUserCircle
                className="text-lg text-[#00bfab] hover:text-[#0072b1]"
                size={36}
            />
        },
        {
            path: "/register",
            className: "border border-transparent hover:bg-transparent ",
            leftIcon: <button
                className={"flex items-center border-l gap-2 pl-2"}
            // ref={menuRef}
            // onClick={() => setIsDropOpen(!isDropOpen)}
            >
                <BiSolidUser className="bg-[#0072b1] text-white rounded-full p-1 text-2xl " />

                <BiCaretDown
                    className="text-[#616161] text-md"
                    size={20}
                />
            </button>
        },
        {
            path: "/register",
            className: "border border-transparent hover:bg-transparent ",
            leftIcon: <button
                className={"flex items-center border-l gap-2 pl-2"}
            // ref={menuRef}
            // onClick={() => setIsDropOpen(!isDropOpen)}
            >
                <BiSolidUser className="bg-[#0072b1] text-white rounded-full p-1 text-2xl " />

                <BiCaretDown
                    className="text-[#616161] text-md"
                    size={20}
                />
            </button>
        },
        {
            path: "/register",
            className: "border border-transparent hover:bg-transparent ",
            leftIcon: <button
                className={"flex items-center border-l gap-2 pl-2"}
            // ref={menuRef}
            // onClick={() => setIsDropOpen(!isDropOpen)}
            >
                <BiSolidUser className="bg-[#0072b1] text-white rounded-full p-1 text-2xl " />

                <BiCaretDown
                    className="text-[#616161] text-md"
                    size={20}
                />
            </button>
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
                                <Link href={item.path} className={`flex items-center gap-2 px-3 py-2 lg:px-4 md:mx-2  text-gray-600 rounded hover:bg-primaryBlue hover:text-white transition-colors duration-300 ${item.className || ""}`}>
                                    {item.leftIcon}  <span className={styles.navFont}>{item.name}</span>
                                </Link>
                            ) : (
                                /* Dropdown Menu */
                                <div>
                                    <button
                                        // onClick={toggleSubmenu}
                                        onMouseEnter={() => setSubmenuOpen(true)}
                                        onMouseLeave={() => setSubmenuOpen(false)}
                                        className={`px-3 py-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-primaryBlue hover:text-white transition-colors duration-300 flex items-center`}
                                    >
                                        <span className={styles.navFont}>{item.name} ▼</span>
                                    </button>

                                    <div className={`absolute left-0 mt-1 w-48 bg-white border transition-all duration-300 overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl 
                                        ${submenuOpen ? "block" : "hidden"} md:group-hover:block`}>
                                        {item.submenu.map((sub, subIndex) => (
                                            <Link key={subIndex} href={sub.path} className="block px-4 py-4 hover:border-l-4 transition border-primaryGreen text-gray-700 hover:bg-primaryBlue hover:text-white">
                                                <span className={styles.navFontSubmenu}>{sub.name}</span>
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
