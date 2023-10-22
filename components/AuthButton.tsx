"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const AuthButton = () => {
	const { data: session } = useSession();
	const router = useRouter();
	if (session) {
		return (
			<>
				<Button onClick={() => signOut()}>Sign Out</Button>
			</>
		);
	}
	return (
		<>
			<Button onClick={() => signIn()}>Sign In</Button>
		</>
	);
};
