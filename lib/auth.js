import { cookies } from "next/headers";
import Session from "@/models/session";
import docsignup from "@/models/docsignup";
import patientsignup from "@/models/patientsignup";
import connectDB from "./mongodb";

export const getUserFromSession = async () => {
    await connectDB();
    const cookiestore = await cookies()
    const token = cookiestore.get("sessionToken")?.value
    if (!token) return null;

    const existingSession = await Session.findOne({ sessionToken: token})
    if (!existingSession) return null;

    const model = existingSession.role === "doctor" ? docsignup : patientsignup;
    const user = await model.findById(existingSession.userId)

    return {...user.toObject(), role: existingSession.role};
}