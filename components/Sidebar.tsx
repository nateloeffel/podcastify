"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export const Sidebar = () => {
	const session = useSession();

	return (
		<div className="bg-white h-screen w-96 pt-16 flex flex-col justify-between p-4">
			<div className="pt-5">
				{/* links */}
				<div className="mb-5">
					<Link href="/">Home</Link>
				</div>
				<div>
					<Link href="uploads">My Uploads</Link>
				</div>
			</div>
			
				<div className="flex items-center rounded-md border-2 border-slate-200 p-2 ">
					{/* Avatar + Email */}
					<Avatar className="mr-10">
						<AvatarImage src={session.data?.user?.image ?? ""} />
					</Avatar>

					<span>{session.data?.user?.email}</span>
				</div>
			
            
		</div>
	);
};
