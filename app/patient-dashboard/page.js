import React from "react";

export default function PatientDashboard() {
    return (
  <div className="block min-h-screen">
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="bg-white shadow-md py-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2.5 text-blue-600 font-bold text-xl">
              <i className="fas fa-heartbeat text-2xl text-teal-500"></i>
              <span>Healthcare Connect</span>
            </div>
            <div>
              <button className="py-3 px-6 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 no-underline inline-flex items-center gap-2 text-sm relative overflow-hidden bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5">
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl text-gray-800 mb-4 font-bold">Find Your Perfect Doctor</h1>
            <p className="text-gray-600 text-lg">Browse through our network of 8000+ NMC-verified doctors across 60+ specializations</p>
          </div>
        </div>
      </div>
      
      <div className="py-10">
        <div className="max-w-6xl mx-auto px-5">
          <div className="bg-white py-10 px-8 rounded-2xl shadow-md mb-10">
            <h3 className="text-2xl text-gray-800 mb-6 font-bold">Search Doctors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
              <input type="text" className="py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-600" placeholder="Search by name or specialization..." />
              <select className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600">
                <option value="">All Specializations</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Neurology">Neurology</option>
                <option value="Gynecology">Gynecology</option>
              </select>
              <select className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600">
                <option value="">All Degrees</option>
                <option value="MBBS">MBBS</option>
                <option value="MD">MD</option>
                <option value="BDS">BDS</option>
                <option value="BAMS">BAMS</option>
              </select>
              <button className="py-3.5 px-5 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md hover:-translate-y-1 hover:shadow-xl h-[54px]">
                <i className="fas fa-search"></i> Search
              </button>
            </div>
          </div>
          
          <div className="bg-white py-8 px-8 rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-gray-800 font-bold text-xl">Available Doctors</h3>
              <span className="text-gray-600">Showing all doctors</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
              {/* Doctor Card Example */}
              <div className="bg-white border border-gray-200 rounded-2xl py-8 px-6 transition-all duration-300 cursor-pointer relative overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-blue-600 before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-600 before:to-teal-500 before:-translate-x-full before:transition-transform before:duration-300 hover:before:translate-x-0">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-15 h-15 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-2xl text-white flex-shrink-0">
                    👨‍⚕️
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Rajesh Kumar</h3>
                    <p className="text-gray-600 text-sm mb-2">Cardiology</p>
                    <p className="text-gray-600 text-sm">15 years experience</p>
                  </div>
                  <div className="inline-flex items-center gap-1 bg-green-100/60 text-green-800 py-1.5 px-3 rounded-md text-xs font-semibold">
                    <i className="fas fa-check-circle"></i>
                    NMC Verified
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <i className="fas fa-hospital text-blue-600 w-4"></i>
                    <span>AIIMS Delhi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <i className="fas fa-map-marker-alt text-blue-600 w-4"></i>
                    <span>Delhi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <i className="fas fa-language text-blue-600 w-4"></i>
                    <span>Hindi, English</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <i className="fas fa-clock text-blue-600 w-4"></i>
                    <span>Today 2:00 PM</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="text-orange-400">★★★★★</div>
                  <span className="font-semibold text-gray-800">4.8</span>
                  <span className="text-gray-600 text-sm">(156 reviews)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-green-600">₹800</div>
                  <button className="py-3 px-6 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 no-underline inline-flex items-center gap-2 text-sm relative overflow-hidden bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md hover:-translate-y-1 hover:shadow-xl">
                    <i className="fas fa-calendar-plus"></i> Book Now
                  </button>
                </div>
              </div>
              
              {/* Additional doctor cards would follow the same pattern */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}