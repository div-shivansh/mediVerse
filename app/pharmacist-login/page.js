"use client"
import {React, useState, useMemo} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, LogIn } from "lucide-react";
import { toast } from "react-toastify";

export default function DoctorLogin() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [touched, setTouched] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleBlur = (e) => {
    const {name} = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  const formData = {email, password }

  const errors = useMemo(() => {
    const newErrors = {}
    
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Please enter a valid password'
    }
    return newErrors
  }, [formData])

  const isFormValid = formData.email && formData.password && Object.keys(errors).length === 0

  const submit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({ email, password })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response = await fetch("/api/auth/pharmalogin", requestOptions)
    const result = await response.json()
    if (result.success) {
      toast.success("Pharmacist login successfully")
      router.push("/pharmacist-dashboard")
    } else {
      toast.error(result.message)
    }
    setIsLoading(false)
  }



    return (
  <div className="block min-h-screen">
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-5">
      <div className="bg-white py-5 px-10 rounded-2xl shadow-xl w-full max-w-md mt-20 border border-gray-200">
        <Link href={"/"} className="flex items-center gap-1 text-blue-600 cursor-pointer mb-5 text-sm font-medium">
          <ArrowLeft /> Back
        </Link>
        <h2 className="text-4xl mb-2.5 text-center text-gray-800 font-bold">Pharmacist Login</h2>
        <p className="text-center text-gray-600 mb-10 text-lg">Access your Pharmacist dashboard</p>
        
        <form onSubmit={submit} >
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-800">Email Address</label>
            <input 
            value={email} onChange={(e) => setEmail(e.target.value)} onBlur={handleBlur} label="Email" name="email"
              type="email" 
              className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" 
              placeholder="Enter your registered email" 
              required 
            />
            {errors.email && touched.email && <p className="px-2 text-sm text-red-500">{errors.email}</p>}
          </div>
          
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-800">Password</label>
            <input 
            value={password} onChange={(e) => setPassword(e.target.value)} onBlur={handleBlur} label="Password" name="password"
              type="password" 
              className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" 
              placeholder="Enter your Password" 
              required 
            />
            {errors.password && touched.password && <p className="px-2 text-sm text-red-500">{errors.password}</p>}
          </div>
          
          <div className="flex justify-between mb-5">
            <Link href="#" className="text-blue-600 no-underline text-sm">Forgot Password?</Link>
            <Link href="#" className="text-blue-600 no-underline text-sm">Need Help?</Link>
          </div>
          {isLoading ? (
            <div role="status" className="flex justify-center items-center">
                <svg aria-hidden="true" className="h-8 w-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
          ) : (
            <button type="submit" disabled={!isFormValid} className="py-5 px-9 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 no-underline inline-flex items-center justify-center gap-2 disabled:bg-gradient-to-r disabled:from-gray-700 disabled:to-neutral-400 disabled:cursor-no-drop text-lg relative overflow-hidden bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md hover:-translate-y-1 hover:shadow-xl w-full">
            <LogIn /> Login & Verify
          </button>
          )}
        </form>
        
        <div className="text-center mt-5">
          Not registered yet? <Link href="/pharmacist-signup" className="text-blue-600">Register as Pharmacist</Link>
        </div>
      </div>
    </div>
  </div>
)
}