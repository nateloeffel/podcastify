import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Podcastify",
	description: "The Podcast CMS you can rely on.",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);

	return (
		<html lang="en" className="light" >
			<body className={inter.className + " bg-slate-100 h-full"}>
				<SessionProvider>
					<NavBar />
					<div className="flex justify-center items-center pt-10">
						<main className="flex justify-center items-center bg-white w-full md:w-3/4 rounded-lg p-8">
							{children}
						</main>
					</div>
				</SessionProvider>
			</body>
		</html>
	);
}
