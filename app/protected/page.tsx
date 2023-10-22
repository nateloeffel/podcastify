import { useSession } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {

    const session = await getServerSession(authOptions);

	if (!session || !session.user) {
		redirect("/api/auth/signin");
	} else {
		console.log(session);
	}

	return (
		<div>
			<p>You can only be seeing this if you're logged in!</p>
		</div>
	);
}
