const express = require('express');
const http = require('http');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

const mainRoute = require('./routes/mainRoute');
const appointmentRouter = require('./routes/appointment');

app.use('/api/appointment', appointmentRouter);
app.use('/',mainRoute);


const server = http.createServer(app);
server.listen(5000, () => {
    console.log('server is running on port: 5000');    
});