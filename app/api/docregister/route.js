import connectDB from "@/lib/mongodb";
import docsignup from "@/models/docsignup";

export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();

        if (!body.email || !body.name || !body.license || !body.degree || !body.specialization || !body.experience || !body.fees || !body.phone || !body.location) {
            return Response.json({
                success: false,
                error: true,
                message: "Required feilds are missing",
                result: null
            }, {status: 400})
        }

        const newDoc = await docsignup.create({
            ...body
        })

        return Response.json({
            success: true,
            error: false,
            message: "Doctor registered successfully",
            result: newDoc
        }, {status: 201})
    } catch (error) {
        console.error("Error registering doctor:", error);
        return Response.json({
            success: false,
            error: true,
            message: error.message || "Internal Server Error",
            result: null
        }, {status: 500})
    }
}