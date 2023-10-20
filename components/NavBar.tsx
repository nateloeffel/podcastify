import Link from "next/link";
import { RouteTitle } from "./RouteTitle";

export const NavBar = () => {


	return (
		<>
			<nav className="flex h-16 justify-between items-center sticky top-0 p-5 w-full bg-white shadow-sm">
				<h1>Podcastify</h1>
                <h1 className="text-xl font-semibold "><RouteTitle /></h1>
                <div>
                    <Link href="http://localhost:3000">Home</Link>
                </div>
				
			</nav>
		</>
	);
};
