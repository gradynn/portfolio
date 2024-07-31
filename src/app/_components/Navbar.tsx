import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-10 py-5 w-full bg-white">
            <div className="flex items-center">
            <h1 className="text-4xl font-light">
                <Link href="/">Gradyn Nagle</Link>
            </h1>
            </div>
            <div className="flex items-center">
            <Link href="/about/" className="text-base px-5">About</Link>
            <Link href="/blog/" className="text-base px-5">Blog</Link>
            <Link href="/contact/" className="text-base px-5">Contact</Link>
            </div>
        </div>
    );
}