import React from "react";
import Link from "next/link";

export default function DoctorLogin() {
    return (
  <div className="block min-h-screen">
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-5">
      <div className="bg-white py-12 px-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <button className="bg-none border-none text-blue-600 cursor-pointer mb-5 py-2.5 px-0 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-50">
          <i className="fas fa-arrow-left mr-2"></i> Back
        </button>
        <h2 className="text-4xl mb-2.5 text-center text-gray-800 font-bold">Doctor Login</h2>
        <p className="text-center text-gray-600 mb-10 text-lg">Access your doctor dashboard</p>
        
        <form>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-800">Medical License Number *</label>
            <input 
              type="text" 
              className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" 
              placeholder="Enter your Medical License Number" 
              required 
            />
            <div className="text-sm text-gray-500 mt-2">Format: DEGREE/STATE/NUMBER (e.g., MBBS/DL/12345)</div>
          </div>
          
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-800">Email Address *</label>
            <input 
              type="email" 
              className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" 
              placeholder="Enter your registered email" 
              required 
            />
          </div>
          
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-800">Phone Number *</label>
            <input 
              type="tel" 
              className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" 
              placeholder="Enter your phone number" 
              required 
            />
            <div className="text-sm text-gray-500 mt-2">We'll verify with your registered phone number</div>
          </div>
          
          <div className="flex justify-between mb-5">
            <a href="#" className="text-blue-600 no-underline text-sm">Forgot License Number?</a>
            <a href="#" className="text-blue-600 no-underline text-sm">Need Help?</a>
          </div>
          <Link href="/doctor-dashborad">
          <button type="submit" className="py-5 px-9 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 no-underline inline-flex items-center justify-center gap-2 text-lg relative overflow-hidden bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md hover:-translate-y-1 hover:shadow-xl w-full">
            <i className="fas fa-sign-in-alt"></i> Login & Verify
          </button>
          </Link>
        </form>
        
        <div className="text-center mt-5">
          Not registered yet? <a href="/doctor-signup" className="text-blue-600">Register as Doctor</a>
        </div>
      </div>
    </div>
  </div>
)
}