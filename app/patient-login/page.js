import React from "react";

export default function PatientLogin() {
    return (
  <div className="block min-h-screen">
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-5">
      <div className="bg-white py-12 px-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <button className="bg-none border-none text-blue-600 cursor-pointer mb-5 py-2.5 px-0 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-50">
          <i className="fas fa-arrow-left mr-2"></i> Back
        </button>
        
        {/* Tab Headers */}
        <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
          <button className="flex-1 py-3 px-4 text-center rounded-md transition-all duration-300 bg-blue-600 text-white font-semibold shadow-sm">
            Login
          </button>
          <button className="flex-1 py-3 px-4 text-center rounded-md transition-all duration-300 text-gray-600 hover:text-gray-800 font-semibold">
            Sign Up
          </button>
        </div>
        
        <h2 className="text-4xl mb-2.5 text-center text-gray-800 font-bold">Patient Login</h2>
        <p className="text-center text-gray-600 mb-10 text-lg">Welcome back! Access your health portal</p>
        
        <form>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-800">Email Address *</label>
            <input 
              type="email" 
              className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" 
              placeholder="Enter your email address" 
              required 
            />
          </div>
          
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-800">Password *</label>
            <div className="relative">
              <input 
                type="password" 
                className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)] pr-12" 
                placeholder="Enter your password" 
                required 
              />
              <button 
                type="button" 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                <i className="fas fa-eye"></i>
              </button>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 no-underline text-sm font-medium hover:text-blue-700 transition-colors duration-300">
              Forgot Password?
            </a>
          </div>
          
          <button type="submit" className="py-5 px-9 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 no-underline inline-flex items-center justify-center gap-2 text-lg relative overflow-hidden bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md hover:-translate-y-1 hover:shadow-xl w-full">
            <i className="fas fa-sign-in-alt"></i> Login to Portal
          </button>
        </form>
        
        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        
        {/* Social Login Options */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 py-3.5 px-4 border-2 border-gray-200 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
            <i className="fab fa-google text-red-500 text-lg"></i>
            Continue with Google
          </button>
          
          <button className="w-full flex items-center justify-center gap-3 py-3.5 px-4 border-2 border-gray-200 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
            <i className="fab fa-facebook text-blue-600 text-lg"></i>
            Continue with Facebook
          </button>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-2">Don't have an account?</p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
            Create Patient Account
          </button>
        </div>
        
        {/* Security Notice */}
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start gap-3">
            <i className="fas fa-shield-alt text-green-600 text-lg mt-0.5"></i>
            <div>
              <h4 className="text-green-800 font-semibold text-sm mb-1">Secure Login</h4>
              <p className="text-green-700 text-xs">Your data is protected with 256-bit SSL encryption and HIPAA compliance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}