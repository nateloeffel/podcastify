import Link from "next/link";
import { RouteTitle } from "./RouteTitle";
import { AuthButton } from "./AuthButton";

export const NavBar = () => {



	return (
		<>
			<nav className="flex h-16 justify-between items-center sticky top-0 p-5 w-full bg-white shadow-sm">
				<h1>Podcastify</h1>
                <div className="flex justify-center items-center">
                    <Link href="http://localhost:3000" className="p-4">Home</Link>
					<AuthButton/>
                </div>
				
			</nav>
		</>
	);
};
