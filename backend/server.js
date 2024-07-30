import express from 'express'
import cors from 'cors';
import { connectDB } from './config/db.js';
import 'dotenv/config'
import userRouter from './routes/userRoute.js';

const app = express()
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/user',userRouter)

app.listen(port , () => {
    console.log(`server started on http://localhost:${port}`)
})