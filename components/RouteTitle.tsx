"use client";

import { RouteType } from "@/types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const titles: RouteType[] = [
	{
		route: "/",
		title: "Home",
	},
];

export const RouteTitle = () => {
	const pathname = usePathname();

	const title: string =
		titles.find((route) => route.route == pathname)?.title ?? "Podcastify";

	return <>{title}</>;
};
