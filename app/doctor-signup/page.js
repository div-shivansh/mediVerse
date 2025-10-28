'use client'
import {React, useState} from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

const languages = [ "Hindi", "English", "Tamil", "Telugu", "Kannada", "Malayalam", "Gujarati", "Marathi", "Bengali", "Punjabi", "Odia", "Assamese"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export default function DoctorSignUp() {
  const [license, setLicense] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [degree, setDegree] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [experience, setExperience] = useState("")
  const [fees, setFees] = useState("")
  const [phone, setPhone] = useState("")
  const [location , setLocation ] = useState("")
  const [affiliation, setAffiliation] = useState("")
  const [spokenLanguage, setSpokenLanguage] = useState([])
  const [availability, setAvailability] = useState([])
  const [bio, setBio] = useState("")



  const handlespoken = (e) => {
    const { value, checked} = e.target
    if(checked){
      setSpokenLanguage([...spokenLanguage, value])
    } else {
      setSpokenLanguage(spokenLanguage.filter((e) => e !== value))
    }
  }

  const handleavailability = (e) => {
    const {value, checked} = e.target
    if(checked){
      setAvailability([...availability, value])
    } else {
      setAvailability(availability.filter((e) => e !== value))
    }
  }

  console.log(availability)

    return (
  <div className="block min-h-screen">
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-5">
      <div className="bg-white py-12 mt-22 px-10 rounded-2xl shadow-xl w-full max-w-4xl border border-gray-200">
        <button className="flex items-center gap-2 text-blue-600 cursor-pointer mb-5 text-sm font-medium">
          <MoveLeft /> Back
        </button>
        <h2 className="text-4xl mb-2.5 text-center text-gray-800 font-bold">Doctor Registration</h2>
        <p className="text-center text-gray-600 mb-10 text-lg">Join India's most trusted telemedicine platform</p>
        
        <form>
          {/* Medical License Number - First and Most Important */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-800">Medical License Number *</label>
            <input 
              value={license} onChange={(e) => setLicense(e.target.value)}
              type="text" 
              className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" 
              placeholder="e.g., MBBS/DL/12345" 
              required 
            />
            <div className="text-sm text-gray-500 mt-2">Your NMC registration number. Format: DEGREE/STATE/NUMBER</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Full Name *</label>
              <input 
                value={name} onChange={(e) => setName(e.target.value)}
                type="text" 
                className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" 
                placeholder="Dr. Your Full Name" 
                required 
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Email Address *</label>
              <input 
                value={email} onChange={(e) => setEmail(e.target.value)}
                type="email" 
                className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" 
                placeholder="your.email@example.com" 
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Medical Degree *</label>
              <select value={degree} onChange={(e) => setDegree(e.target.value)} className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" required>
                <option value="">Select Degree</option>
                <option value="MBBS">MBBS</option>
                <option value="BDS">BDS</option>
                <option value="BAMS">BAMS</option>
                <option value="BHMS">BHMS</option>
                <option value="MD">MD</option>
                <option value="MS">MS</option>
                <option value="MDS">MDS</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Specialization *</label>
              <select value={specialization} onChange={(e) => setSpecialization(e.target.value)} className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" required>
                <option value="">Select Specialization</option>
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
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Years of Experience *</label>
              <select value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" required>
                <option value="">Select Experience</option>
                <option value="1-2">1-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="11-15">11-15 years</option>
                <option value="16-20">16-20 years</option>
                <option value="20+">20+ years</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Consultation Fee (₹) *</label>
              <input 
                value={fees} onChange={(e) => setFees(e.target.value)}
                type="number" 
                className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" 
                placeholder="500" 
                min="100" 
                max="5000" 
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Phone Number *</label>
              <input 
                value={phone} onChange={(e) => setPhone(e.target.value)}
                type="tel" 
                className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" 
                placeholder="+91 98765 43210" 
                required 
              />
              <div className="text-sm text-gray-500 mt-2">We'll verify with your registered phone number</div>
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">State/Location *</label>
              <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" required>
                <option value="">Select State</option>
                <option value="Delhi">Delhi</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Punjab">Punjab</option>
                <option value="Haryana">Haryana</option>
                <option value="Telangana">Telangana</option>
                <option value="Kerala">Kerala</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-800">Hospital/Clinic Affiliation</label>
            <input 
              value={affiliation} onChange={(e) => setAffiliation(e.target.value)}
              type="text" 
              className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" 
              placeholder="Your hospital or clinic name" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Languages Spoken *</label>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {languages.map((language, index) => (
                  <label key={index} className="flex items-center gap-2 cursor-pointer">
                    <input id={language} value={language} checked={spokenLanguage.includes(language)} onChange={handlespoken} type="checkbox" className="text-blue-600" />
                    <span>{language}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Availability *</label>
              <div className="space-y-2 text-sm">
                {days.map((day, index) => (
                  <label key={index} className="flex items-center gap-2 cursor-pointer">
                    <input id={day} value={day} checked={availability.includes(day)} onChange={handleavailability} type="checkbox" className="text-blue-600" />
                    <span>{day}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-800">Brief Bio/About (Optional)</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} 
              className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" 
              rows="3" 
              placeholder="Brief description of your expertise, achievements, or approach to patient care..."
            ></textarea>
          </div>
          
          <div className="mb-6 text-center">
            <label className="flex items-center justify-center gap-2.5 cursor-pointer">
              <input type="checkbox" required />
              I agree to the <a href="#" className="text-blue-600">Terms & Conditions</a> and <a href="#" className="text-blue-600">Privacy Policy</a>
            </label>
          </div>
          
          <Link href="/doctor-dashboard">
          <button type="submit" className="py-5 px-9 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 no-underline inline-flex items-center justify-center gap-2 text-lg relative overflow-hidden bg-gradient-to-r from-blue-500 to-green-400 text-white shadow-md hover:-translate-y-1 hover:shadow-xl w-full">
            <i className="fas fa-user-plus"></i> Register & Verify with NMC
          </button>
          </Link>
        </form>
        
        <div className="text-center mt-5">
          Already have an account? <Link href="/doctor-login" className="text-blue-600">Login as Doctor</Link>
        </div>

        {/* Verification Status Box */}
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg hidden">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="font-semibold text-blue-800">NMC Verification in Progress</span>
          </div>
          <p className="text-blue-700 text-sm">
            We are verifying your credentials with the National Medical Commission database. This usually takes 2-3 minutes.
          </p>
        </div>
      </div>
    </div>
  </div>
)

}