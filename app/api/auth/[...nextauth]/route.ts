import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions } from 'next-auth';
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		DiscordProvider({
			clientId: process.env.DISCORD_ID ?? "",
			clientSecret: process.env.DISCORD_SECRET ?? "",
			authorization: { params: { scope: "identify email guilds" } },
		}),
	],
	callbacks: {

		async session({ session, user }) {
			// console.log(session)
			if (session) {
				return {
					...session,
					user: {
						...session.user,
						id: user.id
					}
				}
			}
			return session
		},
	}
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
