import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true},
    role: { type: String, enum: ["doctor", "patient"] , required: true},
    sessionToken: { type: String, required: true, unique: true},
    createdAt: { type: Date, default: Date.now, expires: '7d'}
})

export default mongoose.models.session || mongoose.model("session", sessionSchema)