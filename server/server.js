const express = require("express");
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

const getAllTrips = require('./routes/trips');

app.use('/trips', getAllTrips);

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});