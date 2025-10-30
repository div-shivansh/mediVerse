import mongoose from 'mongoose';

const connectDB = async () => {
    try {

        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined.")
        }
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'mediverse',
        })
        console.log('MongoDB connected')
    } catch (error) {
        console.error('MongoDB connection error:', error)
    }
}

export default connectDB;