// Import Statements
import express from 'express';

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


// Global Catches
app.use((error, req, res, next) => {
    res.status(500).send('An Internal Server Error has Occurred.');
})

app.listen(3000, () => {
    console.log('App listening on port 3000');
})