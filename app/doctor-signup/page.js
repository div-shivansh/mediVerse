'use client'
import { React, useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GraduationCap, MoveLeft } from "lucide-react";

const languages = ["Hindi", "English", "Tamil", "Telugu", "Kannada", "Malayalam", "Gujarati", "Marathi", "Bengali", "Punjabi", "Odia", "Assamese"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const states = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]

export default function DoctorSignUp() {

  const router = useRouter()

  const [license, setLicense] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confPassword, setConfPassword] = useState("")
  const [degree, setDegree] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [experience, setExperience] = useState("")
  const [fees, setFees] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")
  const [affiliation, setAffiliation] = useState("")
  const [spokenLanguage, setSpokenLanguage] = useState([])
  const [availability, setAvailability] = useState([])
  const [bio, setBio] = useState("")
  const [touched, setTouched] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  const formData = {
    license, name, phone, email, password, confPassword, degree, specialization, experience, fees, location
  }

  const errors = useMemo(() => {
    const newErrors = {}

    if (!/^[A-Z0-9\/\s-]{5,30}$/i.test(formData.license)) {
      newErrors.license = "Please enter a valid Medical License Number."
    }
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.'
    } else if (!/^[A-Za-z\s.]+$/.test(formData.name)) {
      newErrors.name = 'Full Name can only contain letters and spaces and periods.'
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits.'
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be 8+ characters with an uppercase, number, and special character.'
    }
    if (formData.password !== formData.confPassword) {
      newErrors.confPassword = "Passwords do not match."
    }
    if (degree.trim() === "") {
      newErrors.degree = 'Please select your Medical Degree.'
    } else if (specialization.trim() === "") {
      newErrors.specialization = 'Please select your specialization.'
    } else if (experience.trim() === "") {
      newErrors.experience = 'Please select your experience.'
    }
    if (!formData.fees.trim()) {
      newErrors.fees = 'Consultation Fee is required. You can enter 0 for free consultations.'
    }
    if (location.trim() === "") {
      newErrors.location = 'Please select your state.'
    }
    return newErrors
  }, [formData])

  const isFormValid =
    formData.license && formData.name && formData.phone && formData.email && formData.password && formData.confPassword && formData.degree && formData.specialization && formData.experience && formData.fees && formData.location
  Object.keys(errors).length === 0




  const handlespoken = (e) => {
    const { value, checked } = e.target
    if (checked) {
      setSpokenLanguage([...spokenLanguage, value])
    } else {
      setSpokenLanguage(spokenLanguage.filter((e) => e !== value))
    }
  }

  const handleavailability = (e) => {
    const { value, checked } = e.target
    if (checked) {
      setAvailability([...availability, value])
    } else {
      setAvailability(availability.filter((e) => e !== value))
    }
  }

  const submit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      license, name, email, degree, specialization, experience, password, fees, phone, location, affiliation, spokenLanguage, availability, bio
    })
    
    const requstOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response = await fetch("/api/docregister", requstOptions)
    const result = await response.json()
    if (result.success) {
      alert("Doctor registered successfully")
      router.push("/doctor-login")
    } else {
      alert("Error: " + result.message)
    }
    setIsLoading(false)
  }

  return (
    <div className="block min-h-screen">
      <div className="flex justify-center items-center min-h-screen bg-gray-50 py-5">
        <div className="bg-white py-12 mt-22 px-10 rounded-2xl shadow-xl w-full max-w-4xl border border-gray-200">
          <button className="flex items-center gap-2 text-blue-600 cursor-pointer mb-5 text-sm font-medium">
            <MoveLeft /> Back
          </button>
          <h2 className="text-4xl mb-2.5 text-center text-gray-800 font-bold">Doctor Registration</h2>
          <p className="text-center text-gray-600 mb-10 text-lg">Join India&apos;s most trusted telemedicine platform</p>

          <form onSubmit={submit}>
            {/* Medical License Number - First and Most Important */}
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">Medical License Number <span className="text-red-500" >&#42;</span></label>
              <input
                value={license} onChange={(e) => setLicense(e.target.value)} onBlur={handleBlur} label="License" name="license"
                type="text"
                className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]"
                placeholder="Enter your NMC Registration Number"
                required={true}
              />
              {errors.license && touched.license && <p className="px-2 text-sm text-red-500">{errors.license}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">Full Name <span className="text-red-500" >&#42;</span></label>
                <input
                  value={name} onChange={(e) => setName(e.target.value)} onBlur={handleBlur} label="Name" name="name"
                  type="text"
                  className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]"
                  placeholder="Dr. Your Full Name"
                  required
                />
                {errors.name && touched.name && <p className="px-2 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">Email Address <span className="text-red-500" >&#42;</span></label>
                <input
                  value={email} onChange={(e) => setEmail(e.target.value)} onBlur={handleBlur} label="Email" name="email"
                  type="email"
                  className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]"
                  placeholder="your.email@example.com"
                  required
                />
                {errors.email && touched.email && <p className="px-2 text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">Medical Degree <span className="text-red-500" >&#42;</span></label>
                <select value={degree} onChange={(e) => setDegree(e.target.value)} onBlur={handleBlur} label="Degree" name="degree" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" required>
                  <option value="">Select Degree</option>
                  <option value="MBBS">MBBS</option>
                  <option value="BDS">BDS</option>
                  <option value="BAMS">BAMS</option>
                  <option value="BHMS">BHMS</option>
                  <option value="MD">MD</option>
                  <option value="MS">MS</option>
                  <option value="MDS">MDS</option>
                </select>
                {errors.degree && touched.degree && <p className="px-2 text-sm text-red-500">{errors.degree}</p>}
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">Specialization <span className="text-red-500" >&#42;</span></label>
                <select value={specialization} onChange={(e) => setSpecialization(e.target.value)} onBlur={handleBlur} label="Specialization" name="specialization" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" required>
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
                {errors.specialization && touched.specialization && <p className="px-2 text-sm text-red-500">{errors.specialization}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">Experience (in Years) <span className="text-red-500" >&#42;</span></label>
                <select value={experience} onChange={(e) => setExperience(e.target.value)} onBlur={handleBlur} label="Experience" name="experience" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" required>
                  <option value="">Select Experience</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="11-15">11-15 years</option>
                  <option value="16-20">16-20 years</option>
                  <option value="20+">20+ years</option>
                </select>
                {errors.experience && touched.experience && <p className="px-2 text-sm text-red-500">{errors.experience}</p>}
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">Consultation Fee (₹) <span className="text-red-500" >&#42;</span></label>
                <input
                  value={fees} onChange={(e) => setFees(e.target.value)} onBlur={handleBlur} label="Fees" name="fees"
                  type="number"
                  className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]"
                  placeholder="500"
                  min="0"
                  max="5000"
                  required
                />
                {errors.fees && touched.fees && <p className="px-2 text-sm text-red-500">{errors.fees}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">Phone Number <span className="text-red-500" >&#42;</span></label>
                <input
                  value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={handleBlur} label="Phone" name="phone"
                  type="tel"
                  className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]"
                  placeholder="+91 98765 43210"
                  required
                />
                {errors.phone && touched.phone && <p className="px-2 text-sm text-red-500">{errors.phone}</p>}
                <div className="text-sm text-gray-500 mt-2">We&apos;ll verify with your registered phone number</div>
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">State <span className="text-red-500" >&#42;</span></label>
                <select value={location} onChange={(e) => setLocation(e.target.value)} onBlur={handleBlur} label="Location" name="location" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" required>
                  <option value="">Select State</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
                {errors.location && touched.location && <p className="px-2 text-sm text-red-500">{errors.location}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">Password <span className="text-red-500" >&#42;</span></label>
                <input
                  value={password} onChange={(e) => setPassword(e.target.value)} onBlur={handleBlur} label="Password" name="password"
                  type="password"
                  className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]"
                  placeholder="Enter Password"
                  required
                />
                {errors.password && touched.password && <p className="px-2 text-sm text-red-500">{errors.password}</p>}
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">Confirm Password <span className="text-red-500" >&#42;</span></label>
                <input
                  value={confPassword} onChange={(e) => setConfPassword(e.target.value)} onBlur={handleBlur} label="ConfPassword" name="confPassword"
                  type="password"
                  className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]"
                  placeholder="Enter Password Again"
                  required
                />
                {errors.confPassword && touched.confPassword && <p className="px-2 text-sm text-red-500">{errors.confPassword}</p>}
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
            {isLoading ? (
              <div role="status" className="flex justify-center items-center">
                <svg aria-hidden="true" className="h-8 w-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <button type="submit" disabled={!isFormValid} className="py-5 px-9 border-none  rounded-xl cursor-pointer font-semibold transition-all duration-300 no-underline inline-flex items-center justify-center gap-2 disabled:bg-gradient-to-r disabled:from-gray-700 disabled:to-neutral-400 disabled:cursor-no-drop text-lg relative overflow-hidden bg-gradient-to-r from-blue-500 to-green-400 text-white shadow-md hover:-translate-y-1 hover:shadow-xl w-full">
                <GraduationCap /> Register & Verify with NMC
              </button>
            )}
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