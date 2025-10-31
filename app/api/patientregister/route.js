import connectDB from "@/lib/mongodb";
import patientsignup from "@/models/patientsignup";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        await connectDB()
        const body = await req.json()

        if (!body.email || !body.name || !body.password || !body.age || !body.phone || !body.gender || !body.city) {
            return Response.json({
                success: false,
                error: true,
                message: "Required fields are missing",
                result: null
            }, {status: 400})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(body.password, salt)

        const newPatient = await patientsignup.create({
            ...body,
            password: hashedPassword
        })

        return Response.json({
            success: true,
            error: false,
            message: "Patient registered successfully",
            result: newPatient
        }, { status: 201})
    } catch (error) {
        console.error("Error registering patient:", error)

        if (error.code === 11000){
            return Response.json({
                success: false,
                error: true,
                message: "Patient with this email already exists",
                result: null
            }, {status: 409})
        }
        return Response.json({
            success: false,
            error: true,
            message: error.message || "Internal Server Error",
            result: null
        }, {status: 500})
    }
}