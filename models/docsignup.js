import mongoose from "mongoose";

const docSignupSchema = new mongoose.Schema({
    license: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    degree: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: String, required: true},
    fees: { type: Number, required: true},
    phone: { type: String, required: true},
    location: { type: String, required: true},
    affiliation: String,
    spokenLanguage: [String],
    availability: [String],
    Bio: String
}, { timestamps: true})

export default mongoose.models.docsignup || mongoose.model("docsignup", docSignupSchema)