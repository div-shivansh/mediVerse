"use client"
import { CalendarClock, CheckCircle, Clock, Hospital, Languages, LogOut, MapPin, Search } from "lucide-react";
import React, { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const languages = ["Hindi", "English", "Tamil", "Telugu", "Kannada", "Malayalam", "Gujarati", "Marathi", "Bengali", "Punjabi", "Odia", "Assamese"];
const states = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]

export default function PatientDashboard() {

  const router = useRouter()
  const searchParams = useSearchParams()

  const [doctors, setDoctors] = useState([])
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [bookingDate, setBookingDate] = useState("")
  const [bookingTime, setBookingTime] = useState("")
  const [filters, setFilters] = useState({
    state: searchParams.get("state") || "",
    language: searchParams.get("language") || "",
    degree: searchParams.get("degree") || "",
    specialization: searchParams.get("specialization") || "",
  })

  useEffect(() => {
    const params = new URLSearchParams()

    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })

    router.push(`/patient-dashboard?${params.toString()}`)
  }, [filters])

  const handleReset = () => {
    setFilters({
      state: "",
      language: "",
      degree: "",
      specialization: "",
    });

    router.push("/patient-dashboard")
  }


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me")
        const data = await res.json()

        if (!res.ok || !data.success) {
          router.push("/patient-login")
        } else {
          setUser(data.user)
        }
      } catch (err) {
        console.error("Error fetching user:", err)
        router.push("/patient-login")
      } finally {
        setIsLoading(false)
      }
    }
    fetchUser()
  }, [router])

  useEffect(() => {
    const fetchDoctors = async () => {
      const res = await fetch("/api/doctors");
      const data = await res.json()
      if (data.success) setDoctors(data.doctors);
    }
    fetchDoctors();
  }, [])

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      const matchersState = filters.state
        ? doc.location?.toLowerCase().includes(filters.state.toLowerCase())
        : true;

      const matchesLanguage = filters.language
        ? doc.spokenLanguage?.some((lang) =>
          lang.toLowerCase().includes(filters.language.toLowerCase())
        ) || (
        ["hindi", "english"].includes(filters.language.toLowerCase())
      )
        : true;

      const matchesDegree = filters.degree
        ? doc.degree?.toLowerCase().includes(filters.degree.toLowerCase())
        : true;

      const matchesSpecialization = filters.specialization
        ? doc.specialization?.toLowerCase().includes(filters.specialization.toLowerCase())
        : true;

      return matchersState && matchesLanguage && matchesDegree && matchesSpecialization
    })
  }, [doctors, filters]);

  if (isLoading) {
    return (
      <div role="status" className="flex justify-center items-center">
        <svg aria-hidden="true" className="h-8 w-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  if (!user) return null;

  const handleConfirmBooking = () => {
    if (!bookingDate || !bookingTime) {
      toast.warning("Please select both date and time.");
      return;
    }

    const selectedDateTime = new Date(`${bookingDate}T${bookingTime}`)
    const now = new Date();

    if (selectedDateTime <= now) {
      toast.warning("You cannot book an apointment in the past. Please choose a future date and Time")
      return
    }

    console.log("Booking confirmed for:", selectedDateTime);

    toast.success(`Appointment booked for ${bookingDate} at ${bookingTime}`);
    setShowModal(false);
  };

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
    <div className="block min-h-screen">
      <header className="bg-white shadow-md border-b border-gray-200 sticky top-23 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-800">MediVerse</h1>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Patient Portal</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="hidden sm:block">
                  <div className="font-semibold text-gray-800">{user.name}</div>
                  <div className="text-sm text-gray-500">Verified Patient</div>
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

      <div className="bg-gray-50 min-h-screen pt-20">
        <div className="bg-white shadow-md py-8 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center">
              <h1 className="text-5xl text-gray-800 mb-4 font-bold">Find Your Perfect Doctor</h1>
              <p className="text-gray-600 text-lg">Browse through our network of 8000+ NMC-verified doctors across 60+ specializations</p>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="container mx-auto px-5">
            <div className="bg-white py-10 px-8 rounded-2xl shadow-md mb-10">
              <h3 className="text-2xl text-gray-800 mb-6 font-bold">Search Doctors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
                <select value={filters.state} onChange={(e) => setFilters({ ...filters, state: e.target.value })} label="Location" name="location" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600">
                  <option value="">Select State</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
                <select value={filters.degree} onChange={(e) => setFilters({ ...filters, degree: e.target.value })} className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600">
                  <option value="">All Degrees</option>
                  <option value="MBBS">MBBS</option>
                  <option value="BDS">BDS</option>
                  <option value="BAMS">BAMS</option>
                  <option value="BHMS">BHMS</option>
                  <option value="MD">MD</option>
                  <option value="MS">MS</option>
                  <option value="MDS">MDS</option>
                </select>
                <select value={filters.specialization} onChange={(e) => setFilters({ ...filters, specialization: e.target.value })} className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600">
                  <option value="">All Specializations</option>
                  <option value="General Medicine">General Medicine</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Gynecology">Gynecology</option>
                  <option value="Psychiatry">Psychiatry</option>
                  <option value="General Dentistry">General Dentistry</option>
                  <option value="Orthodontics">Orthodontics</option>
                  <option value="Oral Surgery">Oral Surgery</option>
                  <option value="General Ayurveda">General Ayurveda</option>
                  <option value="Panchakarma">Panchakarma</option>
                  <option value="General Homeopathy">General Homeopathy</option>
                </select>
                <select value={filters.language} onChange={(e) => setFilters({ ...filters, language: e.target.value })} label="Location" name="location" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600">
                  <option value="">Select Language</option>
                  {languages.map((language, index) => (
                    <option key={index} value={language}>{language}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="bg-white py-8 px-8 rounded-2xl shadow-md">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-gray-800 font-bold text-xl">Available Doctors</h3>
                <button onClick={handleReset} className="text-gray-600 cursor-pointer hover:text-blue-500 hover:bg-gray-100 px-2 py-1 rounded-lg transition-all duration-300">Show All Doctors</button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
                {filteredDoctors.length === 0 ? (
                  <p className="text-gray-500 text-center col-span-full">
                    No doctors found matching your criteria.
                  </p>
                ) : (
                  filteredDoctors.map((doc) => (
                    
                    <div key={doc._id} className="bg-white border border-gray-200 rounded-2xl py-8 px-6 transition-all duration-300 cursor-pointer relative overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-blue-600 before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-600 before:to-teal-500 before:-translate-x-full before:transition-transform before:duration-300 hover:before:translate-x-0">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="w-15 h-15 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-2xl text-white flex-shrink-0">
                      👨‍⚕️
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. {doc.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{doc.degree}, {doc.specialization}</p>
                      <p className="text-gray-600 text-sm">{doc.experience} years experience</p>
                    </div>
                    <div className="inline-flex items-center gap-1 bg-green-100/60 text-green-800 py-1.5 px-3 rounded-md text-xs font-semibold">
                      <CheckCircle />
                      NMC Verified
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Hospital />
                      <span>{doc.affiliation || 'Not working offline'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin />
                      <span>{doc.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Languages />
                      <span>{doc.spokenLanguage && doc.spokenLanguage.length > 0 ? doc.spokenLanguage.join(', ') : 'Hindi, English'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CalendarClock />
                      <span>{doc.availability && doc.availability.length > 0
                        ? doc.availability.map(day => day.substring(0, 3)).join(', ')
                        : 'Everyday'}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="text-orange-400">★★★★★</div>
                    <span className="font-semibold text-gray-800">4.8</span>
                    <span className="text-gray-600 text-sm">(156 reviews)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-green-600">₹{doc.fees}</div>
                    <button onClick={() => setShowModal(true)} className="py-3 px-6 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 no-underline inline-flex items-center gap-2 text-sm relative overflow-hidden bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md hover:-translate-y-1 hover:shadow-xl">
                      <Clock /> Schedule Booking
                    </button>
                  </div>
                </div>
              )))}
                </div>
            </div>

            {showModal && (
              <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-2xl shadow-lg w-[90%] sm:w-[400px]">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Choose Appointment Slot
                  </h2>

                  <div className="flex flex-col gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-gray-700">
                        Select Date
                      </label>
                      <input
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-blue-600 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-1 text-gray-700">
                        Select Time
                      </label>
                      <input
                        type="time"
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-blue-600 outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 rounded-lg text-gray-700 cursor-pointer border border-gray-300 hover:bg-gray-100 transition-all"
                    >
                      Cancel
                    </button>

                    <button
                      onClick={handleConfirmBooking}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r cursor-pointer from-blue-600 to-teal-500 text-white font-semibold hover:opacity-90 transition-all"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}