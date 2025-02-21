import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "media/assets/logo_resume.webp";
import styles from "./header.module.css"
import { menuItems, menuIconItems } from './data';
import { BiCaretDown, BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [submenu, setSubmenu] = useState<{ [key: number]: boolean }>({});
    const [isMobile, setIsMobile] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };


    const toggleSubmenu = (index: number) => {
        setSubmenuOpen(!submenuOpen)
        setSubmenu((prev) => {
            const newState: { [key: number]: boolean } = {};
            Object.keys(prev).forEach((key) => {
                newState[Number(key)] = false;
            });
            return { ...newState, [index]: !prev[index] };
        });
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setSubmenu({});
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <nav className="bg-white py-2 md:py-4 shadow-md sticky top-0 ">
            <div className="container md:px-4 mx-auto flex items-center justify-between ">

                {/* Logo */}
                <Link href="/" className="flex ">
                    <Image src={Logo} alt="Logo" width={150} height={40} className="logo py-2" />
                </Link>

                <div className='md:hidden flex items-center '>
                    {menuIconItems.map((item, index) => (
                        <div key={index} className="relative group ">
                            {/* Regular Menu Item */}
                            {!item.submenu ? (
                                <Link href={item.path} className={`flex items-center py-2  
                                text-gray-600 rounded hover:bg-primaryBlue hover:text-primaryBlue
                                 transition-colors duration-300  ${item.className || ""}`}>
                                    {item.leftIcon}  <span className={styles.navFont}>{item.name}</span>
                                </Link>
                            ) : (
                                /* Dropdown Menu */
                                <div ref={modalRef} className=''>
                                    <button
                                        onClick={() => toggleSubmenu(index)}
                                        className={`py-2 text-gray-600 rounded  hover:text-primaryBlue transition-colors duration-300 flex items-center gap-2`}
                                    >
                                        {item.leftIcon}  <span className={styles.navFont}>{item.name} </span>
                                    </button>

                                    <div className={`absolute left-0 mt-1 w-48 bg-white border transition-all duration-300 overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl 
                                        ${submenu[index] ? "block" : "hidden"} md:group-hover:block`}>
                                        {submenuOpen && item.submenu.map((sub, subIndex) => (
                                            <Link key={subIndex} href={sub.path} className="block px-4 py-4 hover:border-l-4 transition border-primaryGreen text-gray-700 hover:bg-primaryBlue hover:text-white">
                                                <span className={styles.navFontSubmenu}>{sub.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Mobile Menu Toggle */}
                    <button onClick={toggleMenu} className="md:hidden p-2 text-gray-700">
                        {menuOpen ? (
                            <AiOutlineClose size={40} className="text-red-600" />
                        ) : (
                            <BiMenu size={40} className="text-gray-700" />
                        )}
                    </button>
                </div>

                <div className={`absolute md:static  top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-5 md:p-0 transition-all duration-300 
                    ${menuOpen || !isMobile ? "block " : "hidden"} md:flex md:items-center md:space-x-4 `}>
                    <div className={`flex md:items-center  flex-col md:flex-row divide-y-2 md:divide-y-0 ${isMobile && "max-h-[550px] overflow-y-auto overflow-x-hidden"} `}>
                        {menuItems.map((item, index) => (
                            <div key={index} className={`relative group `}>

                                {/* Regular Menu Item */}
                                {!item.submenu ? (
                                    <Link href={item.path} className={`flex items-center  gap-2 px-4 py-4 lg:px-4 md:mx-2  text-gray-600 rounded md:hover:bg-primaryBlue md:hover:text-white transition-colors duration-300 ${item.className || ""}`}>
                                        <span className={styles.navFont}>{item.name}</span>
                                    </Link>
                                ) : (
                                    /* Dropdown Menu */

                                    <div ref={modalRef} className={item.className || ""}>
                                        <button
                                            onClick={() => toggleSubmenu(index)}
                                            className={`px-3 py-4 lg:px-4 md:mx-2 w-full text-gray-600 rounded md:hover:bg-primaryBlue  md:hover:text-white transition-colors duration-300 flex items-center justify-between`}
                                        >
                                            <span className={styles.navFont}>{item.name} </span>
                                            <BiCaretDown
                                                className={`mt-1 ${submenuOpen && submenu[index] ? "transform rotate-180" : ""
                                                    }`}
                                                size={24}
                                            />
                                        </button>

                                        <div className={`md:absolute divide-y-2 md:divide-y-0 md:left-0 md:mt-1 text-center md:text-start w-[90%] mx-auto md:w-48  md:bg-white md:border transition-all duration-300 overflow-hidden md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl 
                                        ${submenuOpen === true && submenu[index] ? "block" : "hidden"} md:group-hover:block`}
                                            onMouseEnter={() => setSubmenuOpen(true)}
                                            onMouseLeave={() => setSubmenuOpen(false)}
                                        >
                                            {item.submenu.map((sub, subIndex) => (
                                                <Link key={subIndex} href={sub.path} className="block px-4 py-4 md:hover:border-l-4 transition md:border-primaryGreen text-gray-700 md:hover:bg-primaryBlue md:hover:text-white">
                                                    <span className={styles.navFontSubmenu}>{sub.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        {menuIconItems.map((item, index) => (
                            <div key={index} className="relative group hidden md:block">
                                {/* Regular Menu Item */}
                                {!item.submenu ? (
                                    <Link href={item.path} className={`flex items-center py-2  
                                text-gray-600 rounded hover:bg-primaryBlue hover:text-primaryBlue
                                 transition-colors duration-300  ${item.className || ""}`}>
                                        {item.leftIcon}  <span className={styles.navFont}>{item.name}</span>
                                    </Link>
                                ) : (
                                    /* Dropdown Menu */
                                    <div ref={modalRef} className=''>
                                        <button
                                            onClick={() => toggleSubmenu(index)}
                                            className={`py-2 text-gray-600 rounded hover:text-primaryBlue transition-colors duration-300 flex items-center gap-2`}
                                        >
                                            {item.leftIcon}  <span className={styles.navFont}>{item.name} </span>
                                            <BiCaretDown
                                                className={`mt-1 ${submenuOpen && submenu[index] ? "transform rotate-180" : ""
                                                    }`}
                                                size={24}
                                            />
                                        </button>

                                        <div className={`absolute left-0 mt-1 w-48 bg-white border transition-all duration-300 overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl 
                                        ${submenuOpen === true && submenu[index] ? "block" : "hidden"} md:group-hover:block divide-y-2 `}
                                            onMouseEnter={() => setSubmenuOpen(true)}
                                            onMouseLeave={() => setSubmenuOpen(false)}>
                                            {item.submenu.map((sub, subIndex) => (
                                                <Link key={subIndex} href={sub.path} className="flex flex-col px-1 py-2 transition  text-gray-700 ">
                                                    <span className={`${styles.navFontSubmenu} hover:bg-primaryBlue hover:text-white rounded-lg p-2`}>{sub.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </nav>
    );
}
