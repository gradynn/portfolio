"use client";

import Link from 'next/link';
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from 'react';

function MobileMenu({ onClose }) {
    return (
        <div className="absolute inset-0 w-screen h-screen bg-white z-50">
            <div className="flex justify-end px-10 py-5">
                <FiX onClick={onClose} className="text-4xl cursor-pointer" />
            </div>
            <div className="flex flex-col items-start justify-center mt-10 px-10">
                <Link onClick={onClose} href="/" className="text-4xl py-5">Home</Link> 
                <Link onClick={onClose} href="/about/" className="text-4xl py-5">About</Link>
                <Link onClick={onClose} href="/blog/" className="text-4xl py-5">Blog</Link>
                <Link onClick={onClose} href="/contact/" className="text-4xl py-5">Contact</Link>
            </div>
        </div> 
    )
}

function FullMenu() {
    return (
        <div className="flex items-center">
            <Link href="/about/" className="text-base pr-5">About</Link>
            <Link href="/blog/" className="text-base px-5">Blog</Link>
            <Link href="/contact/" className="text-base pl-5">Contact</Link>
        </div>
    )
}

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <div className="flex justify-between items-center px-10 py-5 w-full bg-white">
            <div className="flex items-center">
                <h1 className="text-4xl font-light">
                    <Link href="/">
                        Gradyn <span className="md:inline hidden">Nagle</span>
                    </Link>
                </h1>
            </div>
            <div className="md:block hidden">
                <FullMenu />
            </div>
            <div className="md:hidden block">
                <FiMenu onClick={() => setShowMobileMenu(!showMobileMenu)} className="text-4xl align-baseline" /> 
            </div>
            {showMobileMenu && (
                <MobileMenu onClose={() => setShowMobileMenu(!showMobileMenu)}/>
            )}
        </div>
    );
}