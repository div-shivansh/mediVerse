import connectDB from "@/lib/mongodb";
import pharmasignup from "@/models/pharmasignup";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();

        if (!body.email || !body.name || !body.license || !body.password || !body.store || !body.city || !body.pincode || !body.location || !body.account || !body.ifscCode || !body.phone) {
            return Response.json({
                success: false,
                error: true,
                message: "Required feilds are missing",
                result: null
            }, {status: 400})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(body.password, salt);

        const newPharma = await pharmasignup.create({
            ...body,
            password: hashedPassword
        })

        return Response.json({
            success: true,
            error: false,
            message: "Pharmacist registered successfully",
            result: newPharma
        }, {status: 201})
    } catch (error) {
        console.error("Error registering Pharmacist:", error);

        if (error.code === 11000) {
            return Response.json({
                success: false,
                error: true,
                message: "Pharmacist with this email or license already exists",
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