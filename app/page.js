import React from "react";
import Link from "next/link";
import { ClipboardPlus, BriefcaseMedical, GraduationCap, Ambulance, Stethoscope, ChartLine, TabletSmartphone, HandCoins, Video, MapPin, Smile } from "lucide-react";

export default function Home() {
  return (
  <div className="block min-h-screen">
    {/* Hero Section */}
    <main className="bg-gradient-to-br from-blue-600/95 to-teal-500/95 text-white py-40 text-center relative overflow-hidden bg-cover bg-center">
      
      <div className="container mx-auto px-5 relative z-[2]">
        <h2 className="text-6xl mb-6 font-extrabold text-white leading-tight drop-shadow-md">
          Transform Your Health Journey with <span className="text-teal-400">India's Most Trusted</span> Telemedicine Platform
        </h2>
        <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
          Connect with 8000+ NMC-verified doctors across 60+ specializations. Book consultations in 12+ Indian languages, get instant prescriptions, and manage your health digitally - all from the comfort of your home.
        </p>
        
        <div className="flex gap-6 justify-center flex-wrap mb-20">
          <Link href="/patient-signup" className="py-5 px-9 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 no-underline inline-flex items-center gap-2 text-lg relative overflow-hidden bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md hover:-translate-y-1 hover:shadow-xl">
            <BriefcaseMedical />Book a Consultation
          </Link>
          <Link href="/doctor-signup">
          <button className="py-5 px-9 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 no-underline inline-flex items-center gap-2 text-lg relative overflow-hidden bg-gradient-to-r from-blue-500 to-green-400 text-white shadow-md hover:-translate-y-1 hover:shadow-xl">
             <GraduationCap />Join as Doctor
          </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-8 mx-auto">
          {[
            { number: "8000+", label: "Verified Doctors" },
            { number: "5L+", label: "Consultations" },
            { number: "1000+", label: "Cities Covered" },
            { number: "98.5%", label: "Satisfaction" },
            { number: "12+", label: "Languages" },
            { number: "60+", label: "Specializations" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/15 py-8 px-2 rounded-2xl backdrop-blur-[20px] border border-white/20 text-center transition-all duration-300 hover:-translate-y-2.5 hover:bg-white/20">
              <span className="text-5xl font-extrabold block mb-2.5 drop-shadow-md">{stat.number}</span>
              <span className="text-lg font-semibold opacity-90">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </main>

    {/* Trust Indicators Section */}
    <section id="trust" className="bg-white py-20 border-t border-gray-200">
      <div className="mx-auto px-5">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-extrabold text-gray-800 mb-6 relative after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-25 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-teal-500 after:rounded-sm">
            Why Choose Healthcare Connect?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of healthcare with our comprehensive telemedicine platform designed for modern India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              title: "NMC Verified Doctors",
              description: "Every doctor on our platform is verified through the National Medical Commission database, ensuring authentic credentials and professional qualifications."
            },
            {
              title: "HD Video Consultations",
              description: "Crystal-clear video calls with screen sharing, digital prescription writing, medical record sharing, and real-time chat support."
            },
            {
              title: "12+ Indian Languages",
              description: "Consult in Hindi, English, Tamil, Telugu, Kannada, Malayalam, Gujarati, Marathi, Bengali, Punjabi, Odia, and Assamese."
            },
            {
              title: "Secure & Private",
              description: "End-to-end encrypted consultations, HIPAA-compliant data storage, and strict privacy protocols to protect your medical information."
            },
            {
              title: "24/7 Availability",
              description: "Round-the-clock access to healthcare professionals for urgent consultations, emergency care, and health monitoring."
            },
            {
              title: "Multi-System Medicine",
              description: "Choose from Allopathy (MBBS/MD), Dental (BDS/MDS), Ayurveda (BAMS), Homeopathy (BHMS) - India's complete healthcare ecosystem."
            }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-5 bg-gray-50 py-8 px-6 rounded-2xl border border-gray-200 transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-blue-600 before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-600 before:to-teal-500 before:-translate-x-full before:transition-transform before:duration-300 hover:before:translate-x-0">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works Section */}
    <section id="how-it-works" className="py-25 bg-gray-50">
      <div className="mx-auto px-5">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-extrabold text-gray-800 mb-6 relative after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-25 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-teal-500 after:rounded-sm">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get quality healthcare in 5 simple steps - it's that easy!
          </p>
        </div>
        
        <div className=" mx-auto container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
            {[
              {
                number: "1",
                title: "Sign Up & Choose",
                description: "Create your account with basic details, select preferred language, and choose from 60+ medical specializations based on your health needs."
              },
              {
                number: "2",
                title: "Find Your Doctor",
                description: "Browse verified doctors by specialization, location, ratings, consultation fees, and availability that suits your schedule."
              },
              {
                number: "3",
                title: "Book Appointment",
                description: "Select convenient time slot, choose consultation type (video/audio), make secure payment, and receive instant confirmation."
              },
              {
                number: "4",
                title: "Video Consultation",
                description: "Join high-quality video call, discuss symptoms with your doctor, get professional diagnosis, and receive digital prescription."
              },
              {
                number: "5",
                title: "Follow-up Care",
                description: "Access digital prescription, download reports, book follow-up appointments, and maintain complete digital health records."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white py-12 px-8 rounded-2xl text-center shadow-lg border-2 border-transparent transition-all duration-[0.4s] relative overflow-hidden hover:-translate-y-4 hover:scale-[1.02] hover:border-blue-600 hover:shadow-2xl before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-gradient-to-r before:from-blue-600 before:to-teal-500 before:-translate-x-full before:transition-transform before:duration-[0.4s] hover:before:translate-x-0">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-3xl font-extrabold text-white mx-auto mb-8 shadow-lg relative after:absolute after:-top-1 after:-left-1 after:-right-1 after:-bottom-1 after:border-2 after:border-blue-600 after:rounded-full after:opacity-0 after:scale-75 after:transition-all after:duration-300 hover:after:opacity-30 hover:after:scale-100">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-5">{step.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-25 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-extrabold text-gray-800 mb-6 relative after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-25 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-teal-500 after:rounded-sm">
            Comprehensive Healthcare Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need for complete digital healthcare management
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-15">
          {[
            {
              icon: <ClipboardPlus size={50} />,
              title: "Digital Health Records",
              description: "Maintain complete medical history, lab reports, prescriptions, and consultation notes in secure, encrypted digital format accessible anytime."
            },
            {
              icon: <Ambulance size={50} />,
              title: "Emergency Consultations",
              description: "24/7 access to emergency specialists for urgent medical consultations, critical health situations, and immediate medical advice."
            },
            {
              icon: <Stethoscope size={50} />,
              title: "Digital Prescriptions",
              description: "Receive verified digital prescriptions instantly, with direct pharmacy integration for home delivery of medicines."
            },
            {
              icon: <ChartLine size={50} />,
              title: "Health Analytics",
              description: "Track your health progress with detailed analytics, medication reminders, and personalized health insights."
            },
            {
              icon: <TabletSmartphone size={50} />,
              title: "Mobile Optimized",
              description: "Access healthcare services seamlessly across all devices - smartphone, tablet, or desktop with synchronized data."
            },
            {
              icon: <HandCoins size={50} />,
              title: "Affordable Care",
              description: "Transparent pricing with no hidden costs. Consultations starting from ₹200 with various payment options available."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white py-12 px-10 rounded-2xl shadow-md border border-gray-200 transition-all duration-[0.4s] relative overflow-hidden hover:-translate-y-2.5 hover:shadow-2xl hover:border-blue-600 before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-gradient-to-r before:from-blue-600 before:to-teal-500 before:-translate-x-full before:transition-transform before:duration-[0.4s] hover:before:translate-x-0">
              <div className="size-20 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl mb-5 shadow-lg text-white font-extrabold flex items-center justify-center">{feature.icon}
                </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-5">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Statistics Section */}
    <section id="stats" className="py-25 bg-gray-800 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-90"></div>
      
      <div className="max-w-6xl mx-auto px-5 relative z-[2]">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-extrabold text-white mb-6 relative after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-25 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-teal-500 after:rounded-sm">
            Trusted by Millions Across India
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Leading the digital healthcare revolution with world-class medical services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-15">
          {[
            { icon: <Stethoscope size={50} />, value: "8000+", description: "NMC Verified Doctors" },
            { icon: <Video size={50} />, value: "5L+", description: "Successful Consultations" },
            { icon: <MapPin size={50} />, value: "1000+", description: "Cities Covered" },
            { icon: <Smile size={50} />, value: "98.5%", description: "Patient Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center py-12 px-8 bg-white/15 rounded-2xl backdrop-blur-[20px] border border-white/20 transition-all duration-[0.4s] hover:-translate-y-4 hover:scale-105 hover:bg-white/25">
              <div className="bg-white/15 border-white/10 border rounded-full size-20 mx-auto flex items-center justify-center drop-shadow-xl mb-5">{stat.icon}</div>
              <div className="text-6xl font-extrabold text-white mb-4 drop-shadow-md">{stat.value}</div>
              <div className="text-xl text-white/90 font-medium">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section id="testimonials" className="py-25 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-extrabold text-gray-800 mb-6 relative after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-25 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-teal-500 after:rounded-sm">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real experiences from patients who trusted Healthcare Connect for their medical needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-15">
          {[
            {
              content: "Excellent platform! Got consultation with a cardiologist within 30 minutes during a medical emergency. The doctor was very professional, understood my condition perfectly, and prescribed medicines that helped me recover quickly. The video quality was crystal clear and the entire process was seamless.",
              name: "Rajesh Kumar",
              details: "Software Engineer, Mumbai • Age 34",
              avatar: "R"
            },
            {
              content: "Being able to consult in Kannada made all the difference! The dermatologist understood my skin problem perfectly and provided effective treatment. As a working mother, this platform saved me so much time. I didn't have to take leave from work or arrange childcare. Highly recommend to everyone.",
              name: "Priya Sharma",
              details: "Marketing Manager, Bangalore • Age 29",
              avatar: "P"
            },
            {
              content: "As a doctor, I appreciate the platform's verification process and user interface. It's professional, secure, and allows me to provide quality care to patients from across the country. The scheduling system is efficient and the payment process is transparent. Great platform for both doctors and patients.",
              name: "Dr. Amit Singh",
              details: "Cardiologist, AIIMS Delhi • 15 years experience",
              avatar: "A"
            },
            {
              content: "Living in a small town, access to specialist doctors was always a challenge. Healthcare Connect changed everything! I can now consult with top doctors from metros. The pediatrician I consulted for my child was excellent and the follow-up care was outstanding. This platform is a blessing for rural India.",
              name: "Sunita Patel",
              details: "Teacher, Rajkot • Age 32",
              avatar: "S"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white py-12 px-10 rounded-2xl border border-gray-200 relative transition-all duration-[0.4s] shadow-md hover:-translate-y-2.5 hover:shadow-2xl hover:border-blue-600">
              <div className="text-xl leading-relaxed text-gray-800 mb-10 italic relative">
                {testimonial.content}
              </div>
              <div className="flex items-center gap-5">
                <div className="w-18 h-18 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-800 text-xl mb-1">{testimonial.name}</div>
                  <div className="text-gray-600 mb-2.5">{testimonial.details}</div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(star => (
                      <span key={star} className="text-orange-400 text-xl">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
}
