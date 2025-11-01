import mongoose from "mongoose";

const pharmaSignupSchema = new mongoose.Schema({
    store: { type: String, required: true },
    name: { type: String, required: true },
    license: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    phone: { type: String, required: true},
    city: { type: String, required: true},
    location: { type: String, required: true},
    pincode: { type: Number, required: true},
    address: String,
    account: { type: String, required: true},
    ifscCode: { type: String, required: true},
    gst: String
}, {timestamps: true})

export default mongoose.models.pharmasignup || mongoose.model("pharmasignup", pharmaSignupSchema)