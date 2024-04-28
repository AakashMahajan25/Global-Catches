// Import Statements
import express from 'express';
import errorHandler from './middlewares/errorHandler.mjs';

// Configurations
const app = express();

// Middlewares
app.use(express.json());

// API's

app.get('/api/v1/getData', (req, res) => {
    res.send('Hello');
})

app.post('/api/v1/postData', (req, res) => {
    const data = req.body.json();
    console.log(data);
})


// Global Catches (Error Handling Middleware)
app.use(errorHandler);

app.listen(3000, () => {
    console.log('App listening on port 3000');
})