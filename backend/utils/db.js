import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected")
    } catch (error) {
        console.log("Error in DB connection", error)
    }
}

export default connectDB