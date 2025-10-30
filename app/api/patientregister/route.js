import connectDB from "@/lib/mongodb";
import patientsignup from "@/models/patientsignup";

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

        const newPatient = await patientsignup.create({
            ...body
        })

        return Response.json({
            success: true,
            error: false,
            message: "Patient registered successfully",
            result: newPatient
        }, { status: 201})
    } catch (error) {
        console.error("Error registering patient:", error)
        return Response.json({
            success: false,
            error: true,
            message: error.message || "Internal Server Error",
            result: null
        }, {status: 500})
    }
}