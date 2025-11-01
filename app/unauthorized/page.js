"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function UnauthorizedPage() {
    const router = useRouter()
    const [countdown, setCountdown] = useState(5)

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => Math.max(prev - 1, 0))
            }, 1000)
            return () => clearInterval(timer)
        }, []);

        useEffect(() => {
            if (countdown === 0) {
                router.push("/")
            }
        }, [countdown, router])

    return(
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50">
      <h1 className="text-3xl font-bold text-red-600 mb-2">
        🚫 Unauthorized Access
      </h1>
      <p className="text-gray-700 mb-4">
        You are not allowed on this page. Redirecting you to the homepage in{" "}
        <span className="font-semibold">{countdown}</span> seconds...
      </p>
      <button
        onClick={() => router.push("/")}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Go Now
      </button>
    </div>
    )
}