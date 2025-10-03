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
const corsOptions = {
    origin: ['http://localhost:5173', 'https://movie-pedia-one.vercel.app'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions))

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is running' })
})

//api routes
app.use('/api/v1/users', userRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
});
