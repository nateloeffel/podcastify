"use client";

import { NotionPageType } from "@/types";
import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import { Spinner1 } from "./Spinner1";
import Link from "next/link";

export const NotionPages = () => {
	const [pages, setPages] = useState<NotionPageType[]>();
	const [loading, setLoading] = useState<boolean>(false);

	const getPages = async () => {
		setLoading(true);
		const response = await axios.get("api/notion/pages");
		const results = response.data.results;
		setPages(results);
		setLoading(false);
	};

	useEffect(() => {
		getPages();
	}, []);

	return loading ? (
		<Spinner1 />
	) : (
		<div className="flex flex-col items-center">
			<button onClick={getPages} className="font-bold">Refresh Pages</button>
			{pages &&
				pages.map((page) => {
					return (
						<Link href={`page/${page.id}`}><p key={page.id}>{page.id}</p></Link>
					);
				})}
		</div>
	);
};
