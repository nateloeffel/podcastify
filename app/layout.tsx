import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Podcastify",
	description: "Next Generation Notion",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className + " bg-slate-100 h-full"}>
				<NavBar />
				<div className="flex justify-center items-center pt-10">
						<main className="flex justify-center items-center bg-white w-full md:w-3/4 rounded-lg p-8">
							{children}
						</main>
				</div>
			</body>
		</html>
	);
}
