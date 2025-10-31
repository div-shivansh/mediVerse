'use client'
import { React, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MoveLeft, UserPlus } from "lucide-react";


const states = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]


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
  const [touched, setTouched] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  const formData = {
    name, age, email, phone, gender, city, password, confPassword
  }

  const errors = useMemo(() => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.'
    } else if (!/^[A-Za-z\s.]+$/.test(formData.name)) {
      newErrors.name = 'Full Name can only contain letters and spaces and periods.'
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits.'
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be 8+ characters with an uppercase, number, and special character.'
    }
    if (formData.password !== formData.confPassword) {
      newErrors.confPassword = "Passwords do not match."
    }
    if (age.trim() === "") {
      newErrors.age = "Age is required."
    } else if (age < 1 || age > 120) {
      newErrors.age = "Please enter a valid age."
    }
    if (gender.trim() === "") {
      newErrors.gender = "Gender is required."
    }
    if (city.trim() === "") {
      newErrors.city = "State is required."
    }
    return newErrors
  }, [formData])

  const isFormValid = formData.name && formData.age && formData.email && formData.phone && formData.gender && formData.city && formData.password && formData.confPassword

  const submit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
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
    setIsLoading(false)
  }


  return (
    <div className="block min-h-screen">
      <div className="flex justify-center items-center min-h-screen bg-gray-50 py-5">
        <div className="bg-white py-5 mt-22 px-10 rounded-2xl shadow-xl w-full max-w-4xl border border-gray-200">
          <Link href={"/"} className="flex gap-2 items-center text-blue-600 cursor-pointer mb-5 text-sm font-medium">
            <MoveLeft /> Back
          </Link>
          <h2 className="text-4xl mb-2.5 text-center text-gray-800 font-bold">Patient Sign Up</h2>
          <p className="text-center text-gray-600 mb-10 text-lg">Create your account to book consultations</p>

          <form onSubmit={submit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">Full Name <span className="text-red-500">&#42;</span></label>
                <input value={name} onChange={(e) => setName(e.target.value)} onBlur={handleBlur} label="Name" name="name" type="text" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" placeholder="Enter your full name" required />
                {errors.name && touched.name && <p className="px-2 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">Age <span className="text-red-500">&#42;</span></label>
                <input value={age} onChange={(e) => setAge(e.target.value)} onBlur={handleBlur} label="Age" name="age" type="number" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" placeholder="Enter your age" min="1" max="120" required />
                {errors.age && touched.age && <p className="px-2 text-sm text-red-500">{errors.age}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">Email Address </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} onBlur={handleBlur} label="Email" name="email" type="email" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" placeholder="your.email@example.com" required />
                {errors.email && touched.email && <p className="px-2 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">Phone Number <span className="text-red-500">&#42;</span></label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={handleBlur} label="Phone" name="phone" type="tel" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" placeholder="+91 98765 43210" required />
                {errors.phone && touched.phone && <p className="px-2 text-sm text-red-500">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">Gender <span className="text-red-500">&#42;</span></label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} onBlur={handleBlur} label="Gender" name="gender" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && touched.gender && <p className="px-2 text-sm text-red-500">{errors.gender}</p>}
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">State <span className="text-red-500">&#42;</span></label>
                <select value={city} onChange={(e) => setCity(e.target.value)} onBlur={handleBlur} label="City" name="city" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" required>
                  <option value="">Select State</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
                {errors.city && touched.city && <p className="px-2 text-sm text-red-500">{errors.city}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">Password <span className="text-red-500">&#42;</span></label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} onBlur={handleBlur} label="Password" name="password" type="password" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" placeholder="Create Password" required />
                {errors.password && touched.password && <p className="px-2 text-sm text-red-500">{errors.password}</p>}
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-800">Confirm Password <span className="text-red-500">&#42;</span></label>
                <input value={confPassword} onChange={(e) => setConfPassword(e.target.value)} onBlur={handleBlur} label="ConfPassword" name="confPassword" type="password" className="w-full py-3.5 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]" placeholder="Confirm Password" required />
                {errors.confPassword && touched.confPassword && <p className="px-2 text-sm text-red-500">{errors.confPassword}</p>}
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
                <UserPlus /> Create Patient Account
              </button>
            )}
          </form>

          <div className="text-center mt-5">
            Already have an account? <Link href="/patient-login" className="text-blue-600">Login as Patient</Link>
          </div>
        </div>
      </div>
    </div>
  )
}