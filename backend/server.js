import express from 'express'
import dotenv from 'dotenv'
import connectDB from './utils/db.js'
import userRoutes from './routes/user.route.js'
import cookiesParser from 'cookie-parser'
import cors from 'cors'


dotenv.config()
//DB connection
connectDB()

const app = express()
const PORT = process.env.PORT || 3000

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookiesParser())
app.use(cors())

//api routes
app.use('/api/v1/users', userRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
});
