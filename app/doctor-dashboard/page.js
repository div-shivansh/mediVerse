"use client"
import { ArrowRight, HeartPulse, LogOut, Video, CalendarDays, CalendarFold, ArrowUp, IndianRupee, Star, Users, CheckCircle2, Edit2, Edit, CalendarPlus2, ClipboardPlus, ChartColumnIncreasing, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import {React, useState } from "react";
import { toast } from "react-toastify";

export default function DoctorDashboard() {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    try {
      setIsLoading(true)
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (res.ok) {
        toast.success("You have been logged out successfully!");
        router.push("/")
      } else {
        toast.error("Logout failed. Try again!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong during logout.");
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="block min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b border-gray-200 sticky top-23 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-800">MedVix</h1>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Doctor Portal</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="hidden sm:block">
                  <div className="font-semibold text-gray-800">Dr. Rajesh Kumar</div>
                  <div className="text-sm text-gray-500">Cardiology</div>
                </div>
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
                <button onClick={handleLogout} className="py-2.5 px-4 border-none flex items-center justify-center gap-1 rounded-lg cursor-pointer font-medium transition-all duration-300 text-sm bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white">
                  <LogOut />Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r mt-20 from-blue-600 to-teal-500 text-white rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">Welcome back, Dr. Rajesh Kumar!</h2>
              <p className="text-blue-100 mb-4 md:mb-0">Today is Saturday, November 01, 2025. You have 8 appointments scheduled.</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-white/20 hover:bg-white/30 flex items-center gap-2 backdrop-blur-sm cursor-pointer text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-white/30">
                <CalendarDays />Set Availability
              </button>
              <button className="bg-white text-blue-600 flex items-center gap-2 hover:bg-gray-50 cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                <Video />Start Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <CalendarFold size={32} className="text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-gray-800">8</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-2">Today&apos;s Appointments</h3>
            <div className="text-xs text-green-600 flex items-center gap-1 font-medium">
              <ArrowUp size={20} />+12% from yesterday
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <Users size={32} className="text-teal-600" />
              </div>
              <span className="text-2xl font-bold text-gray-800">156</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-2">Total Patients</h3>
            <div className="text-xs text-green-600 flex items-center gap-1 font-medium">
              <ArrowUp size={20} />+8% this month
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Star size={32} className="text-green-600" />
              </div>
              <span className="text-2xl font-bold text-gray-800">4.8</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-2">Average Rating</h3>
            <div className="text-xs text-green-600 flex items-center gap-1 font-medium">
              <ArrowUp size={20} />+0.2 this week
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <IndianRupee size={32} className="text-orange-600" />
              </div>
              <span className="text-2xl font-bold text-gray-800">₹24,500</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-2">This Month&apos;s Earnings</h3>
            <div className="text-xs text-green-600 flex items-center gap-1 font-medium">
              <ArrowUp size={20} />+15% from last month
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Schedule */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Today&apos;s Schedule</h3>
                <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2 cursor-pointer font-medium">
                  <CalendarDays />View All
                </button>
              </div>

              <div className="space-y-4">
                {/* Appointment Card */}
                <div className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">10:30</div>
                    <div className="text-xs text-blue-500">AM</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                    P
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Priya Sharma</div>
                    <div className="text-sm text-gray-500">Age 29 • Female • First Visit</div>
                    <div className="text-sm text-gray-600 mt-1">Chest pain and shortness of breath</div>
                  </div>
                  <div className="text-right">
                    <button className="mt-2 bg-blue-600 cursor-pointer text-white flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-300">
                      <Video />Join
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-600">11:15</div>
                    <div className="text-xs text-gray-500">AM</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Rajesh Patel</div>
                    <div className="text-sm text-gray-500">Age 45 • Male • Follow-up</div>
                    <div className="text-sm text-gray-600 mt-1">Hypertension follow-up checkup</div>
                  </div>
                  <div className="text-right">
                    <button className="mt-2 bg-gray-400 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                      Scheduled
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-600">2:00</div>
                    <div className="text-xs text-gray-500">PM</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Sunita Gupta</div>
                    <div className="text-sm text-gray-500">Age 38 • Female • Regular</div>
                    <div className="text-sm text-gray-600 mt-1">Diabetes management consultation</div>
                  </div>
                  <div className="text-right">
                    <button className="mt-2 bg-gray-400 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                      Scheduled
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="text-blue-600 hover:text-blue-700 flex items-center justify-center w-full gap-2 cursor-pointer font-medium">
                  View All 8 Appointments <ArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions & Profile */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Profile Summary</h3>
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  👨‍⚕️
                </div>
                <div className="font-bold text-gray-800">Dr. Rajesh Kumar</div>
                <div className="text-gray-500 text-sm">Cardiology • 15 years exp</div>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="text-orange-400">★★★★★</div>
                  <span className="text-gray-600 text-sm">4.8 (156 reviews)</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">License:</span>
                  <span className="font-semibold">MBBS/DL/12345</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hospital:</span>
                  <span className="font-semibold">AIIMS Delhi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Consultation Fee:</span>
                  <span className="font-semibold text-green-600">₹800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="bg-green-100 text-green-800 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium">
                    <CheckCircle2 size={20} />Online
                  </span>
                </div>
              </div>

              <button className="w-full mt-6 bg-gradient-to-r flex items-center justify-center gap-2 cursor-pointer from-blue-600 to-teal-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                <Edit />Edit Profile
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                    <CalendarPlus2 />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">Set Availability</div>
                    <div className="text-sm text-gray-500">Manage your schedule</div>
                  </div>
                </button>

                <button className="w-full flex items-center gap-3 p-4 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-xl transition-all duration-300">
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center">
                    <ClipboardPlus />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">Patient Records</div>
                    <div className="text-sm text-gray-500">View medical histories</div>
                  </div>
                </button>

                <button className="w-full flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl transition-all duration-300">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center">
                    <ChartColumnIncreasing />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">Analytics</div>
                    <div className="text-sm text-gray-500">View performance stats</div>
                  </div>
                </button>

                <button className="w-full flex items-center gap-3 p-4 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-xl transition-all duration-300">
                  <div className="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center">
                    <Settings />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">Settings</div>
                    <div className="text-sm text-gray-500">Account preferences</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">Consultation completed</div>
                    <div className="text-xs text-gray-500">with Amit Singh • 2 hours ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">New patient registered</div>
                    <div className="text-xs text-gray-500">Priya Sharma • 4 hours ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">Prescription sent</div>
                    <div className="text-xs text-gray-500">to Rajesh Patel • Yesterday</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}