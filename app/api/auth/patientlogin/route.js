import connectDB from "@/lib/mongodb";
import patientsignup from "@/models/patientsignup";
import session from "@/models/session";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import crypto from "crypto";

export async function POST(req) {
    try {
        await connectDB();
        const { email, password } = await req.json()
        
        const user = await patientsignup.findOne({ email})
        if (!user) return Response.json({ message: "Doctor not found"}, { status: 404})

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return Response.json({ message: "Invalid credentials"}, { status: 401})
        
        const sessionToken = crypto.randomBytes(32).toString("hex")
        await session.create({ userId: user._id, role: "patient", sessionToken})

        ;(await cookies()).set("sessionToken", sessionToken, {
            httpOnly: true,
            sesure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 7 * 24 * 60 * 60,
        })

        return Response.json({ success: true, message: "Login successful"})
    } catch (error) {
        return Response.json({ success: false, message: error.message}, { status: 500})
    }
}