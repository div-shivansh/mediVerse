'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { HeartPulse, LogOut, Plus, X } from 'lucide-react';

export default function MedicalStoreDashboard() {
  const router = useRouter();
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

    const handleLogout = async () => {
  try {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (res.ok) {
      alert("You have been logged out successfully!");
      router.push("/")
    } else {
      alert("Logout failed. Try again!");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong during logout.");
  }
};

  const [patients, setPatients] = useState([
    {
      id: '1',
      name: 'Rajesh Kumar',
      age: 45,
      phone: '+91 98765 43210',
      appointmentDate: '2025-10-31 10:00 AM',
      doctorName: 'Dr. Sharma',
      specialization: 'Cardiology',
      status: 'completed',
      consultationFee: 800,
      commission: 32
    },
    {
      id: '2',
      name: 'Priya Singh',
      age: 32,
      phone: '+91 98765 43211',
      appointmentDate: '2025-10-31 11:30 AM',
      doctorName: 'Dr. Patel',
      specialization: 'Dermatology',
      status: 'confirmed',
      consultationFee: 600,
      commission: 24
    },
    {
      id: '3',
      name: 'Amit Verma',
      age: 38,
      phone: '+91 98765 43212',
      appointmentDate: '2025-11-01 2:00 PM',
      doctorName: 'Dr. Gupta',
      specialization: 'Orthopedics',
      status: 'confirmed',
      consultationFee: 700,
      commission: 28
    },
    {
      id: '4',
      name: 'Sneha Desai',
      age: 28,
      phone: '+91 98765 43213',
      appointmentDate: '2025-11-01 3:30 PM',
      doctorName: 'Dr. Iyer',
      specialization: 'Gynecology',
      status: 'pending',
      consultationFee: 750,
      commission: 30
    },
    {
      id: '5',
      name: 'Vikram Singh',
      age: 52,
      phone: '+91 98765 43214',
      appointmentDate: '2025-10-30 9:00 AM',
      doctorName: 'Dr. Malhotra',
      specialization: 'Neurology',
      status: 'completed',
      consultationFee: 1000,
      commission: 40
    },
    {
      id: '6',
      name: 'Anjali Tiwari',
      age: 41,
      phone: '+91 98765 43215',
      appointmentDate: '2025-11-02 4:00 PM',
      doctorName: 'Dr. Nair',
      specialization: 'Pulmonology',
      status: 'pending',
      consultationFee: 850,
      commission: 34
    },
    {
      id: '7',
      name: 'Rohan Kapoor',
      age: 35,
      phone: '+91 98765 43216',
      appointmentDate: '2025-11-02 5:15 PM',
      doctorName: 'Dr. Joshi',
      specialization: 'Gastroenterology',
      status: 'confirmed',
      consultationFee: 900,
      commission: 36
    },
    {
      id: '8',
      name: 'Divya Rao',
      age: 29,
      phone: '+91 98765 43217',
      appointmentDate: '2025-11-03 10:30 AM',
      doctorName: 'Dr. Kumar',
      specialization: 'General Medicine',
      status: 'pending',
      consultationFee: 500,
      commission: 20
    }
  ]);

  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    phone: '',
    gender: '',
    symptoms: '',
    preferredDate: '',
    preferredTime: ''
  });

  const totalEarnings = patients
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.commission, 0);

  const pendingEarnings = patients
    .filter(p => p.status === 'confirmed' || p.status === 'pending')
    .reduce((sum, p) => sum + p.commission, 0);

  const handleAddPatient = (e) => {
    e.preventDefault();
    const consultationFee = 500;
    const patient = {
      id: Date.now().toString(),
      name: newPatient.name,
      age: parseInt(newPatient.age),
      phone: newPatient.phone,
      appointmentDate: `${newPatient.preferredDate} ${newPatient.preferredTime}`,
      doctorName: 'Dr. Kumar',
      specialization: 'General Medicine',
      status: 'pending',
      consultationFee: consultationFee,
      commission: consultationFee * 0.04 // 4% commission
    };

    setPatients([...patients, patient]);
    setShowAddPatient(false);
    setNewPatient({
      name: '',
      age: '',
      phone: '',
      gender: '',
      symptoms: '',
      preferredDate: '',
      preferredTime: ''
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-100 text-blue-800 border border-blue-300';
      case 'completed': return 'bg-green-100 text-green-800 border border-green-300';
      case 'pending': return 'bg-amber-100 text-amber-800 border border-amber-300';
      case 'cancelled': return 'bg-red-100 text-red-800 border border-red-300';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredPatients = filterStatus === 'all' 
    ? patients 
    : patients.filter(p => p.status === filterStatus);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b border-gray-200 sticky top-23 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-800">MediVerse</h1>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Pharmacist Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                N
              </div>
              <div className="hidden sm:block">
                <div className="font-semibold text-gray-800">Negi Medical Store</div>
                <div className="text-sm text-gray-500">Verified Partner</div>
              </div>
            </div>
            <button onClick={handleLogout} className="py-2.5 px-4 border-none flex items-center justify-center gap-1 rounded-lg cursor-pointer font-medium transition-all duration-300 text-sm bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white">
              <LogOut />Logout
            </button>
          </div>
        </div>
      </div>
    </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r mt-20 from-blue-600 via-blue-500 to-teal-500 text-white rounded-3xl p-8 mb-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
            <div>
              <h2 className="text-4xl font-bold mb-2">Welcome Back! 👋</h2>
              <p className="text-blue-100 text-lg">
                You have <span className="font-bold text-white">{patients.filter(p => p.status === 'pending').length} pending</span> and <span className="font-bold text-white">{patients.filter(p => p.status === 'confirmed').length} confirmed</span> appointments
              </p>
              <div className="mt-4 flex gap-4">
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30">
                  <p className="text-xs text-blue-100">Today's Registrations</p>
                  <p className="text-2xl font-bold">{patients.filter(p => p.status === 'pending').length}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowAddPatient(true)}
              className="mt-6 md:mt-0 bg-white text-blue-600 flex gap-1 items-center px-5 py-4 rounded-2xl cursor-pointer font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus />Register New Patient
            </button>
          </div>
        </div>

        {/* Stats Cards - WITH ENHANCED ICONS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Total Patients Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center shadow-md border border-purple-200">
                <div className="text-center">
                  <i className="fas fa-users text-purple-600 text-3xl block"></i>
                </div>
              </div>
              <span className="text-4xl font-bold text-gray-800">{patients.length}</span>
            </div>
            <h3 className="text-gray-800 text-sm font-bold mb-1">Total Patients</h3>
            <p className="text-xs text-gray-400">
              <i className="fas fa-arrow-up text-green-500 mr-1"></i>
              +{patients.filter(p => p.status === 'pending').length} this week
            </p>
            <div className="mt-3 h-1 bg-gradient-to-r from-purple-400 to-purple-200 rounded-full"></div>
          </div>

          {/* Total Earnings Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center shadow-md border border-green-200">
                <div className="text-center">
                  <i className="fas fa-money-bill-wave text-green-600 text-3xl block"></i>
                </div>
              </div>
              <span className="text-4xl font-bold text-gray-800">₹{totalEarnings}</span>
            </div>
            <h3 className="text-gray-800 text-sm font-bold mb-1">Total Earnings</h3>
            <p className="text-xs text-gray-400">
              <i className="fas fa-check-circle text-green-500 mr-1"></i>
              Completed bookings
            </p>
            <div className="mt-3 h-1 bg-gradient-to-r from-green-400 to-green-200 rounded-full"></div>
          </div>

          {/* Pending Commission Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center shadow-md border border-amber-200">
                <div className="text-center">
                  <i className="fas fa-clock text-amber-600 text-3xl block"></i>
                </div>
              </div>
              <span className="text-4xl font-bold text-gray-800">₹{pendingEarnings}</span>
            </div>
            <h3 className="text-gray-800 text-sm font-bold mb-1">Pending Commission</h3>
            <p className="text-xs text-gray-400">
              <i className="fas fa-hourglass-end text-amber-500 mr-1"></i>
              {patients.filter(p => p.status === 'confirmed' || p.status === 'pending').length} appointments
            </p>
            <div className="mt-3 h-1 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full"></div>
          </div>

          {/* Completed Bookings Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center shadow-md border border-blue-200">
                <div className="text-center">
                  <i className="fas fa-check-double text-blue-600 text-3xl block"></i>
                </div>
              </div>
              <span className="text-4xl font-bold text-gray-800">
                {patients.filter(p => p.status === 'completed').length}
              </span>
            </div>
            <h3 className="text-gray-800 text-sm font-bold mb-1">Completed Bookings</h3>
            <p className="text-xs text-gray-400">
              <i className="fas fa-fire text-blue-500 mr-1"></i>
              {((patients.filter(p => p.status === 'completed').length / patients.length) * 100).toFixed(0)}% success rate
            </p>
            <div className="mt-3 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
          </div>
        </div>

        {/* Patients List */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Patient Registry</h3>
              <p className="text-gray-500 text-sm">Manage all registered patients and appointments</p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0 flex-wrap">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${filterStatus === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                All
              </button>
              <button
                onClick={() => setFilterStatus('pending')}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${filterStatus === 'pending' ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Pending
              </button>
              <button
                onClick={() => setFilterStatus('confirmed')}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${filterStatus === 'confirmed' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Confirmed
              </button>
              <button
                onClick={() => setFilterStatus('completed')}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${filterStatus === 'completed' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Completed
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Patient Info</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Contact</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Appointment</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Doctor & Specialty</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Commission (4%)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPatients.length > 0 ? (
                  filteredPatients.map((patient, index) => (
                    <tr key={patient.id} className="hover:bg-blue-50 transition-colors duration-200">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {patient.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">{patient.name}</div>
                            <div className="text-xs text-gray-500">Age: {patient.age} years</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm text-gray-600">
                          <p className="font-medium">{patient.phone}</p>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm">
                          <p className="font-medium text-gray-800">{patient.appointmentDate}</p>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm">
                          <p className="font-semibold text-gray-800">{patient.doctorName}</p>
                          <p className="text-xs text-gray-500">{patient.specialization}</p>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`px-4 py-2 rounded-full text-xs font-bold ${getStatusColor(patient.status)}`}>
                          {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm">
                          <p className="font-bold text-green-600 text-lg">₹{patient.commission.toFixed(0)}</p>
                          <p className="text-xs text-gray-500">4% of ₹{patient.consultationFee}</p>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex gap-3">
                          <button className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-all flex items-center justify-center" title="View Details">
                            <i className="fas fa-eye"></i>
                          </button>
                          <button className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-200 transition-all flex items-center justify-center" title="Edit">
                            <i className="fas fa-edit"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-8 text-center">
                      <p className="text-gray-500">No patients found</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Stats Footer */}
          <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-gray-600 text-sm">Total Consultations</p>
              <p className="text-2xl font-bold text-gray-800">{filteredPatients.length}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-800">
                ₹{filteredPatients.reduce((sum, p) => sum + p.consultationFee, 0)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Commission (4%)</p>
              <p className="text-2xl font-bold text-green-600">
                ₹{filteredPatients.reduce((sum, p) => sum + p.commission, 0).toFixed(0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Patient Modal */}
      {showAddPatient && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center top-20 z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-teal-500 px-8 py-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Register New Patient</h3>
              <button
                onClick={() => setShowAddPatient(false)}
                className="w-10 h-10 rounded-full bg-white/20 text-white cursor-pointer hover:bg-white/30 flex items-center justify-center transition-all"
              >
                <X />
              </button>
            </div>

            <form onSubmit={handleAddPatient} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-3 font-semibold text-gray-800">Patient Name *</label>
                  <input
                    type="text"
                    value={newPatient.name}
                    onChange={(e) => setNewPatient({...newPatient, name: e.target.value})}
                    className="w-full py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-3 font-semibold text-gray-800">Age *</label>
                  <input
                    type="number"
                    value={newPatient.age}
                    onChange={(e) => setNewPatient({...newPatient, age: e.target.value})}
                    className="w-full py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all"
                    placeholder="Age"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-3 font-semibold text-gray-800">Phone Number *</label>
                  <input
                    type="tel"
                    value={newPatient.phone}
                    onChange={(e) => setNewPatient({...newPatient, phone: e.target.value})}
                    className="w-full py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-3 font-semibold text-gray-800">Gender *</label>
                  <select
                    value={newPatient.gender}
                    onChange={(e) => setNewPatient({...newPatient, gender: e.target.value})}
                    className="w-full py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-3 font-semibold text-gray-800">Symptoms/Reason for Visit *</label>
                <textarea
                  value={newPatient.symptoms}
                  onChange={(e) => setNewPatient({...newPatient, symptoms: e.target.value})}
                  className="w-full py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all"
                  rows={3}
                  placeholder="Describe patient's symptoms or reason for visit"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block mb-3 font-semibold text-gray-800">Preferred Date *</label>
                  <input
                    type="date"
                    value={newPatient.preferredDate}
                    onChange={(e) => setNewPatient({...newPatient, preferredDate: e.target.value})}
                    className="w-full py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-3 font-semibold text-gray-800">Preferred Time *</label>
                  <input
                    type="time"
                    value={newPatient.preferredTime}
                    onChange={(e) => setNewPatient({...newPatient, preferredTime: e.target.value})}
                    className="w-full py-3 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <i className="fas fa-calendar-plus mr-3"></i>
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
