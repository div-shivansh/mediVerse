import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import docsignup from "@/models/docsignup";

export async function GET() {
    try {
        await connectDB()

        const doctors = await docsignup.find({}, "-password")
        return  NextResponse.json({ success: true, doctors })
    } catch (error) {
        console.error("Error fetching doctors:", error)
        return NextResponse.json(
            { success: false, message: "Failed to fetch doctors"},
            { status: 500}
        )
    }
}