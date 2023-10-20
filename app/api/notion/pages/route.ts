import notion from "@/lib/NotionClient";

export async function GET(request: Request) {
	const data = await notion.databases.query({
		database_id: "1a57b0b38ba14b33a01bdcfd50d0ab1a",
	});

	return new Response(JSON.stringify(data));
}
