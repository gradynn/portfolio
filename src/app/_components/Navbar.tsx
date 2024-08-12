"use client";

import Link from 'next/link';
import { FiMenu, FiX } from "react-icons/fi";
import React, { useState } from 'react';

function MobileMenu({ onClose, activePage, setActivePage }: { onClose: () => void, activePage: string,  setActivePage: () => void  }) {
    const handleClick = (p: string) => {
        setActivePage(p);
        onClose();
    }
    
    return (
        <div className="absolute inset-0 w-screen h-screen bg-white z-50">
            <div className="flex justify-end px-10 py-5">
                <FiX onClick={onClose} className="text-4xl cursor-pointer" />
            </div>
            <div className="flex flex-col items-start justify-center mt-10 px-10">
                <Link 
                    onClick={() => handleClick("")} 
                    href="/" 
                    className={`text-4xl py-5 ${activePage == "" ? "text-blue-500" : ""}`}
                >
                    Home
                </Link> 
                <Link 
                    onClick={() => handleClick("About")}
                    href="/about/"
                    className={`text-4xl py-5 ${activePage == "About" ? "text-blue-500" : ""}`}
                >
                    About
                </Link>
                <Link 
                    onClick={() => handleClick("Blog")}
                    href="/blog/" 
                    className={`text-4xl py-5 ${activePage == "Blog" ? "text-blue-500" : ""}`}
                >
                    Blog
                </Link>
                <Link 
                    onClick={() => handleClick("Contact")}
                    href="/contact/"
                    className={`text-4xl py-5 ${activePage == "Contact" ? "text-blue-500" : ""}`}
                >
                    Contact
                </Link>
            </div>
        </div> 
    )
}

function FullMenu({ activePage, setActivePage }: { activePage: string, setActivePage: () => void }) {
    const handleClick = (p: string) => {
        setActivePage(p);
    }
    
    return (
        <div className="flex items-center">
            <Link 
                onClick={() => handleClick("About")}
                href="/about/"
                className={`text-base pr-5 ${activePage == "About" ? "text-blue-500" : ""}`}
            >
                About
            </Link>
            <Link 
                onClick={() => handleClick("Blog")}
                href="/blog/" 
                className={`text-base px-5 ${activePage == "Blog" ? "text-blue-500" : ""}`}
            >
                Blog
            </Link>
            <Link 
                onClick={() => handleClick("Contact")}
                href="/contact/"
                className={`text-base pl-5 ${activePage == "Contact" ? "text-blue-500" : ""}`}
            >
                Contact
            </Link>
        </div>
    )
}

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
    const [activePage, setActivePage] = useState<string>("");

    return (
        <div className="flex justify-between items-center px-10 py-5 w-full bg-white">
            <div className="flex items-center">
                <h1 className="text-4xl font-light">
                    <Link onClick={() => setActivePage("")} href="/">
                        Gradyn <span className="md:inline hidden">Nagle</span>
                    </Link>
                </h1>
            </div>
            <div className="md:block hidden">
                <FullMenu activePage={activePage} setActivePage={setActivePage}/>
            </div>
            <div className="md:hidden block">
                <FiMenu onClick={() => setShowMobileMenu(!showMobileMenu)} className="text-4xl align-baseline" /> 
            </div>
            {showMobileMenu && (
                <MobileMenu onClose={() => setShowMobileMenu(!showMobileMenu)} activePage={activePage} setActivePage={setActivePage}/>
            )}
        </div>
    );
}