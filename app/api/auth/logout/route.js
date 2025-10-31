import { cookies } from "next/headers";
import Session from "@/models/session";
import connectDB from "@/lib/mongodb";

export async function POST() {
    await connectDB()

    const cookieStore = cookies()
    const sessionToken = cookieStore.get("sessionToken")?.value;

    if (sessionToken) {
        await Session.deleteOne({ sessionToken})
    }

    const response = Response.json({ success: true, message: "Logged out successfully"})
    response.cookies.delete("sessionToken")

    return response;
}