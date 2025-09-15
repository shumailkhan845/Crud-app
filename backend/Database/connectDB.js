import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connectionInstance = mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected : ",connectionInstance)
    } catch (error) {
        console.log("Error while connecting database : ", error)
        process.exit(1);
    }
}

export default connectDB;