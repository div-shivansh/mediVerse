import { Award, BriefcaseMedical, ClipboardCheck, Clock, Globe2, Globe2Icon, Handshake, Laptop, Lightbulb, MailCheck, Map, MapPinMinus, MapPinned, Medal, Phone, Rocket, ShieldCheck, Smartphone, Star, Stethoscope, Tablet, TabletSmartphone, ThumbsUp, Trophy, User, Users, Webcam } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function About() {
    return (
  <div className="block min-h-screen bg-white">
    {/* Hero Section */}
    <section className="bg-gradient-to-br mt-20 from-blue-600/95 to-teal-500/95 text-white py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-md">
            About MediVerse
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-95 leading-relaxed">
            India&apos;s premier telemedicine platform dedicated to bridging the healthcare gap between urban medical expertise and rural communities.
          </p>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full py-3 px-8 border border-white/30">
            <i className="fas fa-heart text-red-400 mr-3 text-lg"></i>
            <span className="font-semibold text-lg">Where Healthcare Meets Heart</span>
          </div>
        </div>
      </div>
    </section>

    {/* Mission Section */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-teal-500 after:rounded-sm">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We believe that every Indian, regardless of their geographic location or economic background, deserves access to quality healthcare services. Our mission is to make healthcare accessible, affordable, and available to every corner of India.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">8000+</div>
                <div className="text-sm text-gray-600">NMC Verified Doctors</div>
              </div>
              <div className="text-center p-4 bg-teal-50 rounded-lg">
                <div className="text-3xl font-bold text-teal-600 mb-2">500K+</div>
                <div className="text-sm text-gray-600">Consultations</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
            <div className="w-full h-64 rounded-xl flex items-center justify-center bg-[url('/about-poster.jpg')]">
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Our Story Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From a college project to India&apos;s most trusted telemedicine platform
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r text-white from-blue-600 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb size={32}/>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">The Idea</h3>
              <p className="text-gray-600">
                Born from witnessing rural healthcare challenges where 70% of patients travel 30-40km for basic consultations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r text-white from-teal-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">The Journey</h3>
              <p className="text-gray-600">
                What started as a college project evolved into a comprehensive platform connecting urban doctors with rural patients.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r text-white from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">The Impact</h3>
              <p className="text-gray-600">
                Today, we serve 500,000+ patients across 1,000+ cities, transforming healthcare accessibility across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What Makes Us Different */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What Makes Us Different</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India-first design with uncompromising quality and security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r text-white from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
              <Globe2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🌏 India-First Design</h3>
            <ul className="space-y-2 text-gray-600 pl-5">
              <li className="flex items-center"> 12+ Indian Languages</li>
              <li className="flex items-center"> Cultural Sensitivity</li>
              <li className="flex items-center"> Local Understanding</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl border border-teal-200 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r text-white from-teal-500 to-green-400 rounded-2xl flex items-center justify-center mb-6">
              <ThumbsUp />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">✅ Quality Assurance</h3>
            <ul className="space-y-2 text-gray-600 pl-5">
              <li className="flex items-center"> NMC Verification</li>
              <li className="flex items-center"> Multi-System Medicine</li>
              <li className="flex items-center"> Continuous Monitoring</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r text-white from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🔒 Security & Privacy</h3>
            <ul className="space-y-2 text-gray-600 pl-5">
              <li className="flex items-center"> End-to-End Encryption</li>
              <li className="flex items-center"> HIPAA Compliance</li>
              <li className="flex items-center"> Privacy First</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Our Impact */}
    <section className="py-20 bg-gray-800 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-90"></div>
      
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Transforming healthcare delivery across India, one consultation at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-5">
              <MapPinned />
              Transforming Rural Healthcare
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-md">
                <div className="text-4xl font-bold mb-2">500K+</div>
                <div className="text-sm opacity-90">Consultations Completed</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-md">
                <div className="text-4xl font-bold mb-2">30-40km</div>
                <div className="text-sm opacity-90">Travel Eliminated</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-md">
                <div className="text-4xl font-bold mb-2">₹1-2K</div>
                <div className="text-sm opacity-90">Saved Per Visit</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-md">
                <div className="text-4xl font-bold mb-2">98.5%</div>
                <div className="text-sm opacity-90">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold gap-5 mb-8 flex items-center">
              <BriefcaseMedical />
              Empowering Healthcare Professionals
            </h3>
            <div className="space-y-4">
              <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-md">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Users />
                </div>
                <div>
                  <div className="text-2xl font-bold">8,000+</div>
                  <div className="text-sm opacity-90">Verified Doctors</div>
                </div>
              </div>
              <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-md">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Stethoscope />
                </div>
                <div>
                  <div className="text-2xl font-bold">60+</div>
                  <div className="text-sm opacity-90">Medical Specializations</div>
                </div>
              </div>
              <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-md">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Clock />
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Our Values */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Handshake size={32} />,
              title: "Accessibility",
              description: "Healthcare should be a fundamental right, not a privilege. We make quality care accessible to every Indian.",
              color: "from-blue-500 to-blue-600"
            },
            {
              icon: <Lightbulb size={32} />,
              title: "Innovation",
              description: "We continuously innovate to improve healthcare delivery with cutting-edge technology and human compassion.",
              color: "from-teal-500 to-teal-600"
            },
            {
              icon: <Star size={32} />,
              title: "Excellence",
              description: "We maintain the highest standards in everything from doctor verification to platform security and patient care.",
              color: "from-green-500 to-green-600"
            },
            {
              icon: <Webcam size={32} />,
              title: "Connection",
              description: "We believe in human connection, bringing together patients and doctors, urban expertise and rural needs.",
              color: "from-purple-500 to-purple-600"
            }
          ].map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <span className="text-white">{value.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{value.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Technology Section */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Technology</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced telemedicine platform with smart healthcare features
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="fas fa-desktop mr-3 text-blue-600"></i>
                Advanced Telemedicine Platform
              </h3>
              <div className="space-y-4">
                {[
                  "HD Video Consultations with crystal-clear audio and video",
                  "Digital Prescriptions with pharmacy integration",
                  "Health Records Management with secure cloud storage",
                  "Multi-Device Compatibility across all platforms"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="fas fa-brain mr-3 text-teal-600"></i>
                Smart Healthcare Features
              </h3>
              <div className="space-y-4">
                {[
                  "AI-Powered Doctor Matching to find the right specialist",
                  "Appointment Scheduling with automated reminders",
                  "Payment Integration with multiple options",
                  "Follow-up Care Management for continuous monitoring"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br text-white from-blue-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <TabletSmartphone size={60} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Multi-Platform Access</h4>
              <p className="text-gray-600 mb-6">
                Access MediVerse seamlessly across smartphones, tablets, and computers with synchronized data and consistent experience.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Smartphone size={60} />
                  <div className="text-sm text-gray-600">Mobile</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <Tablet size={60} />
                  <div className="text-sm text-gray-600">Tablet</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <Laptop size={60} />
                  <div className="text-sm text-gray-600">Desktop</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Recognition & Awards */}
    <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Recognition & Awards</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Industry recognition for our contribution to Indian healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Trophy />,
              title: "Best Telemedicine Platform 2024",
              org: "Healthcare Innovation Awards"
            },
            {
              icon: <Award />,
              title: "Rural Healthcare Champion",
              org: "Digital India Awards"
            },
            {
              icon: <Medal />,
              title: "Top Healthcare Startup",
              org: "Indian Medical Association"
            },
            {
              icon: <ClipboardCheck />,
              title: "Excellence in Patient Care",
              org: "National Health Technology"
            }
          ].map((award, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span>{award.icon}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{award.title}</h3>
              <p className="text-sm opacity-75">{award.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to join the MediVerse family? Contact us today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone />
            </div>
            <h3 className="text-xl font-bold mb-2">Patient Support</h3>
            <p className="text-gray-300">1800-XXX-CARE</p>
            <p className="text-gray-300">(2273)</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User />
            </div>
            <h3 className="text-xl font-bold mb-2">Doctor Support</h3>
            <p className="text-gray-300">1800-XXX-DOCS</p>
            <p className="text-gray-300">(3627)</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MailCheck />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Support</h3>
            <p className="text-gray-300">support@mediverse.in</p>
            <p className="text-gray-300">hello@mediverse.in</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake />
            </div>
            <h3 className="text-xl font-bold mb-2">Partnerships</h3>
            <p className="text-gray-300">partners@mediverse.in</p>
            <p className="text-gray-300">business@mediverse.in</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
          <p className="text-gray-400 text-lg font-semibold">
            MediVerse - Where Healthcare Meets Heart
          </p>
          <p className="text-gray-500 italic">
            Transforming lives, one consultation at a time.
          </p>
        </div>
      </div>
    </section>
  </div>
)

}