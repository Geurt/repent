import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

import { conenctDb, connectDb } from './models/index';

const port = process.env.PORT || 5000;
const app = express();

import routes from './routes/index';

// middleware
app.use(cors());
app.use(express.json());

// first we serve the React app statically on the root
app.use(express.static(path.join(__dirname, 'client/build')));

// API routes
// we route the resource here to the appropriate route defined eg in routes/confessions.js
app.use('/confessions', routes.confessions);

// catchall handler (order matters here!)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// connect to db and start server
connectDb().then(async () => {
    app.listen(port, () => {
        console.log(`The server is listening on port: ${port}`);
    });
});

