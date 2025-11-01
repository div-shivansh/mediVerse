import { cookies } from "next/headers";
import Session from "@/models/session";
import docsignup from "@/models/docsignup";
import pharmasignup from "@/models/pharmasignup";
import patientsignup from "@/models/patientsignup";
import connectDB from "./mongodb";

export const getUserFromSession = async () => {
    await connectDB();

    const cookiestore = await cookies()
    const token = cookiestore.get("sessionToken")?.value
    if (!token) return null;

    const existingSession = await Session.findOne({ sessionToken: token})
    if (!existingSession) return null;

    let model;
    switch (existingSession.role) {
        case "doctor": model = docsignup;
        break;
        case "patient": model = patientsignup;
        break;
        case "pharmacist": model = pharmasignup;
        break;
        default:
            return null; 
    }

    const user = await model.findById(existingSession.userId);
    if (!user) return null;

    return {...user.toObject(), role: existingSession.role};
}