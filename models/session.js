import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true},
    role: { type: String, enum: ["doctor", "patient", "pharmacist"] , required: true},
    sessionToken: { type: String, required: true, unique: true},
    createdAt: { type: Date, default: Date.now},
    expiresAt: { type: Date, default: () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
})

sessionSchema.index({ expiresAt: 1}, { expireAfterSeconds: 0});

export default mongoose.models.Session || mongoose.model("Session", sessionSchema)