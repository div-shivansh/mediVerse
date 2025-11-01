import { NextResponse } from "next/server";
import connectDB from "./lib/mongodb";
import Session from "./models/session";

export const config= {
    matcher: [
        "/doctor-dashboard/:path*",
        "/patient-dashboard/:path*",
        "/pharmacist-dashboard/:path*"
    ],
    runtime: "nodejs",
}

export async function middleware(req) {
    await connectDB()

    const token = req.cookies.get("sessionToken")?.value;
    const { pathname } = req.nextUrl;

    if (!token) {
        if (pathname.startsWith("/doctor-dashboard")) {
            return NextResponse.redirect(new URL("/doctor-login", req.url))
        } else if (pathname.startsWith("/patient-dashboard")) {
            return NextResponse.redirect(new URL("/patient-login", req.url))
        } else if (pathname.startsWith("/pharmacist-dashboard")) {
            return NextResponse.redirect(new URL("/pharmacist-login", req.url))
        }
       return NextResponse.redirect(new URL("/", req.url))
    }

    const session = await Session.findOne({ sessionToken: token })

    if (!session) {
        const res = NextResponse.redirect(new URL("/", req.url))
        res.cookies.delete("sessionToken")
        return res;
    }
    
    if (session.expires < new Date()) {
        await Session.deleteOne({ sessionToken: token });
        const res = NextResponse.redirect(new URL("/", req.url))
        res.cookies.delete("sessionToken")
        return res;
    }

    if (pathname.startsWith("/doctor-dashboard") && session.role !== "doctor") {
        return NextResponse.redirect(new URL("/unauthorized", req.url))
    }

    if (pathname.startsWith("/patient-dashboard") && session.role !== "patient") {
        return NextResponse.redirect(new URL("/unauthorized", req.url))
    }
    if (pathname.startsWith("/pharmacist-dashboard") && session.role !== "pharmacist") {
        return NextResponse.redirect(new URL("/unauthorized", req.url))
    }

    return NextResponse.next()
}