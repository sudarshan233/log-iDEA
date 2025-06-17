import express from 'express';

import ideas from './routes/IdeaRoutes.js'

const app = express();
const PORT = 5000;

app.use('/api/ideas', ideas);

app.get('/', (req, res) => {
    res.send(`<h1>iDEA</h1>`);
});

app.listen(PORT, (error) => {
    if(error) throw error;
    console.log(`Server is running on port ${PORT}`);
});