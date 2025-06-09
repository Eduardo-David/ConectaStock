import express from 'express';
import { PORT } from './config.js';
import router from './routes/user.routes.js';

const app = express();

app.use(router)
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

