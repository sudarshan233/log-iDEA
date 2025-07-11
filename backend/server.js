import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';

import ideas from './routes/IdeaRoutes.js'
import {connectDB} from "./config/database.js";

connectDB();
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;
const __dirname = path.resolve();

if (process.env.NODE_ENV !== 'production') {
    app.use(cors(
        {
            origin: 'http://localhost:5173',
        }
    ));
}

app.use('/api/ideas', ideas);

if (process.env.NODE_ENV === 'production') {
    const frontendPath = path.join(__dirname, '../frontend/logIdea/dist');

    // Serve static files first
    app.use(express.static(frontendPath));

    // Only catch non-API routes and serve React index.html
    app.get(/^\/(?!api).*/, (req, res) => {
        res.sendFile(path.join(frontendPath, 'index.html'));
    });
}


// app.get('/', (req, res) => {
//     res.send(`<h1>iDEA</h1>`);
// });

app.listen(PORT, (error) => {
    if(error) throw error;
    console.log(`Server is running on port ${PORT}`);
});