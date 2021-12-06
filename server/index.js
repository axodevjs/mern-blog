import express from 'express'
import mongoose from "mongoose";
import dotenv from 'dotenv';
import postRoutes from './routes/postRoutes.js';
import authRoutes from './routes/authRoutes.js';
import corsMiddleware from './middleware/cors.middleware.js';
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 6400;
const DB_URL = process.env.DB_URL;

const app = express()

app.use(corsMiddleware)
app.use(express.json())
app.use('/api', postRoutes)
app.use('/api/', categoryRoutes)
app.use('/api/auth', authRoutes)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true})
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp()

