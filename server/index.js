const express = require('express');
const http = require('http');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());

const mainRoute = require('./routes/mainRoute');
const appointmentRouter = require('./routes/appointment');

app.use('/api/appointment', appointmentRouter);
app.use('/',mainRoute);


const server = http.createServer(app);
server.listen(5000, () => {
    console.log('server is running on port: 5000');    
});