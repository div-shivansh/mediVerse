import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import Session from "@/models/session";
import connectDB from "@/lib/mongodb";

export async function POST() {
    await connectDB()

    const cookieStore = await cookies()
    const sessionToken = cookieStore.get("sessionToken")?.value;

    if (sessionToken) {
        await Session.deleteOne({ sessionToken})
    }

    const res = NextResponse.json({ success: true, message: "Logged out successfully"})
     res.cookies.set("sessionToken", "", {
    path: "/",
    expires: new Date(0),
  });

    return res;
}