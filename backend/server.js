import express from 'express';
import dotenv from 'dotenv';

import ideas from './routes/IdeaRoutes.js'
import {connectDB} from "./config/database.js";

connectDB();
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use('/api/ideas', ideas);

app.get('/', (req, res) => {
    res.send(`<h1>iDEA</h1>`);
});

app.listen(PORT, (error) => {
    if(error) throw error;
    console.log(`Server is running on port ${PORT}`);
});