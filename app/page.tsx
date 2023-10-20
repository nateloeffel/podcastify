import { NotionPages } from "@/components/NotionPages";
import { Suspense } from "react";

export default function Home() {
	return (
		<div className=" flex flex-col items-center justify-center h-full w-full">
			<h1 className="text-xl font-semibold ">Welcome to Podcastify</h1>
			<h2 className="text-lg">Below is a list of your pages.</h2>

			<NotionPages />
		</div>
	);
}
