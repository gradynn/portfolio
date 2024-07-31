import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const workSans = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gradyn Nagle",
  description: "Portfolio",
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
  	return (
		<html lang="en">
	  		<body className={`{workSans.className} text-black`}>
				<Navbar />
				{children}
			</body>
		</html>
  	);
}
