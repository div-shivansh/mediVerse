import mongoose from "mongoose";

const PatientSignupSchema = new mongoose.Schema({
    name: { type: String, required: true},
    age: { type: Number, required: true},
    email: { type: String, required: true, unique: true},
    phone: { type: String, required: true, unique: true},
    gender: { type: String, required: true},
    city: { type: String, required: true},
    password: { type: String, required: true},
    medical: String
}, { timestamps: true})

export default mongoose.models.patientsignup || mongoose.model("patientsignup", PatientSignupSchema)