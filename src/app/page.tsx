"use client"

import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';

import VideoBackground from "./_components/VideoBackground/VideoBackground";

const headlines = [
	"Fullstack Engineer",
	"Tech Hobbyist",
	"Software Enthusiast",
	"Continuous Learner"
];

export default function Home() {
	return (
		<main className="flex justify-start items-center min-h-screen">
			<VideoBackground />
			<div className="flex flex-col justify-center p-10 text-4xl h-screen">
				<span className="white"><Typewriter words={headlines} cursor={true} cursorBlinking={true} loop={false} /></span>
				<div className="w-[100px] border-b border-2 border-black mt-10"></div>
				<Link href="/about">
					<button className="w-[175px] text-2xl bg-black border-1 my-3 text-white px-5 py-2 rounded-xl hover:bg-blue-900">
						About Me
					</button>
				</Link>
			</div>
		</main>
	);
}
