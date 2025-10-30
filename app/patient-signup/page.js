'use client'
import { React, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MoveLeft, UserPlus } from "lucide-react";


export default function PatientSignUp() {

  const router = useRouter()

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")
  const [city, setCity] = useState("")
  const [medical, setMedical] = useState("")
  const [password, setPassword] = useState("")
  const [confPassword, setConfPassword] = useState("")

  const submit = async (e) => {
    e.preventDefault()
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name, age, email, phone, gender, city, medical, password
    })

    const requstOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response = await fetch("/api/patientregister", requstOptions)
    const result = await response.json()
    if (result.success) {
      alert("Patient registered successfully")
      router.push("/patient-login")
    } else {
      alert("Error: " + result.message)
    }

  }


    return (
  <div className="block min-h-screen">
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-5">
      <div className="bg-white py-5 mt-20 px-10 rounded-2xl shadow-xl w-full max-w-xl border border-gray-200">
        <Link href={"/"} className="flex gap-2 items-center text-blue-600 cursor-pointer mb-5 text-sm font-medium">
          <MoveLeft /> Back
        </Link>
        <h2 className="text-4xl mb-2.5 text-center text-gray-800 font-bold">Patient Sign Up</h2>
        <p className="text-center text-gray-600 mb-10 text-lg">Create your account to book consultations</p>
        
        <form onSubmit= {submit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Full Name <span className="text-red-500">&#42;</span></label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" placeholder="Enter your full name" required />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Age <span className="text-red-500">&#42;</span></label>
              <input value={age} onChange={(e) => setAge(e.target.value)} type="number" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" placeholder="Enter your age" min="1" max="120" required />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Email Address </label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" placeholder="your.email@example.com" required />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Phone Number <span className="text-red-500">&#42;</span></label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" placeholder="+91 98765 43210" required />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Gender <span className="text-red-500">&#42;</span></label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">City <span className="text-red-500">&#42;</span></label>
              <input value={city} onChange={(e) => setCity(e.target.value)} type="text" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" placeholder="Enter your city" required />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Password <span className="text-red-500">&#42;</span></label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" placeholder="Create Password" required />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Confirm Password <span className="text-red-500">&#42;</span></label>
              <input value={confPassword} onChange={(e) => setConfPassword(e.target.value)} type="password" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" placeholder="Confirm Password" required />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-800">Medical History </label>
            <textarea value={medical} onChange={(e) => setMedical(e.target.value)} className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" rows="3" placeholder="Any existing medical conditions, allergies, or medications..."></textarea>
          </div>
          
          <div className="mb-6 text-center">
            <label className="flex items-center justify-center gap-2.5 cursor-pointer">
              <input type="checkbox" required />
              I agree to the <a href="#" className="text-blue-600">Terms & Conditions</a> and <a href="#" className="text-blue-600">Privacy Policy</a>
            </label>
          </div>
          
          <button type="submit" className="py-5 px-9 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 no-underline inline-flex items-center justify-center gap-2 text-lg relative overflow-hidden bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md hover:-translate-y-1 hover:shadow-xl w-full">
            <UserPlus /> Create Patient Account
          </button>
        </form>
        
        <div className="text-center mt-5">
          Already have an account? <Link href="/patient-login" className="text-blue-600">Login as Patient</Link>
        </div>
      </div>
    </div>
  </div>
)
}