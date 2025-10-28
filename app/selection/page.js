import React from "react";
import Link from "next/link";
import { GraduationCap, MoveLeft, User } from "lucide-react";

export default function Selection() {
    return (
  <div className="block min-h-screen">
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-5">
      <div className="bg-white py-12 px-10 rounded-2xl shadow-xl w-full max-w-4xl border border-gray-200">
        <Link href="/">
        <button className="flex items-center gap-2 text-blue-600 cursor-pointer mb-5 text-sm font-medium">
          <MoveLeft /> Back to Home
        </button>
        </Link>
        <h2 className="text-4xl mb-2.5 text-center text-gray-800 font-bold">Choose Your Role</h2>
        <p className="text-center text-gray-600 mb-10 text-lg">Select how you want to use Healthcare Connect</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="bg-gray-50 py-10 px-8 rounded-2xl border-2 border-gray-200 text-center cursor-pointer transition-all duration-300 relative overflow-hidden hover:border-blue-600 hover:-translate-y-1 hover:shadow-lg before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-600 before:to-teal-500 before:-translate-x-full before:transition-transform before:duration-300 hover:before:translate-x-0">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-5">
              <User size={50} />
            </div>
            <h3 className="text-2xl text-gray-800 mb-4 font-bold">I'm a Patient</h3>
            <p className="text-gray-600 mb-5 leading-relaxed">Book consultations with verified doctors, manage health records, and get quality medical care from anywhere.</p>
            <div className="mt-5">
                <Link href="/patient-signup">
              <button className="py-3 px-6 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 no-underline inline-flex items-center gap-2 text-sm relative overflow-hidden bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md hover:-translate-y-1 hover:shadow-xl">
                Continue as Patient
              </button>
                </Link>
            </div>
          </div>
          
          <div className="bg-gray-50 py-10 px-8 rounded-2xl border-2 border-gray-200 text-center cursor-pointer transition-all duration-300 relative overflow-hidden hover:border-blue-600 hover:-translate-y-1 hover:shadow-lg before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-600 before:to-teal-500 before:-translate-x-full before:transition-transform before:duration-300 hover:before:translate-x-0">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-5">
              <GraduationCap size={50} />
            </div>
            <h3 className="text-2xl text-gray-800 mb-4 font-bold">I'm a Doctor</h3>
            <p className="text-gray-600 mb-5 leading-relaxed">Join our network of verified doctors and provide quality healthcare to patients across India online.</p>
            <div className="mt-5">
                <Link href="/doctor-signup">
              <button className="py-3 px-6 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 no-underline inline-flex items-center gap-2 text-sm relative overflow-hidden bg-gradient-to-r from-blue-500 to-green-400 text-white shadow-md hover:-translate-y-1 hover:shadow-xl">
                Continue as Doctor
              </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

}