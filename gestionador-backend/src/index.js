import express from 'express';
import { PORT } from './config.js';
import router from './routes/user.routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, // Permite el envío de cookies
}))
app.use(express.json());
app.use(router); 
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

