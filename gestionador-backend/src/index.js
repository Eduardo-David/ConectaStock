import express from 'express';
import { PORT } from './config.js';
import router from './routes/user.routes.js';
import cors from 'cors';

const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json());
app.use(router)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

