import connectDB from "@/lib/mongodb";
import docsignup from "@/models/docsignup";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();

        if (!body.email || !body.name || !body.license || !body.password || !body.degree || !body.specialization || !body.experience || !body.fees || !body.phone || !body.location) {
            return Response.json({
                success: false,
                error: true,
                message: "Required feilds are missing",
                result: null
            }, {status: 400})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(body.password, salt);

        const newDoc = await docsignup.create({
            ...body,
            password: hashedPassword
        })

        return Response.json({
            success: true,
            error: false,
            message: "Doctor registered successfully",
            result: newDoc
        }, {status: 201})
    } catch (error) {
        console.error("Error registering doctor:", error);

        if (error.code === 11000) {
            return Response.json({
                success: false,
                error: true,
                message: "Doctor with this email or license already exists",
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