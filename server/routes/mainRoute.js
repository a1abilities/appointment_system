const path = require('path');
const mainRoute = require('express').Router();
const { env } = require("../lib/databaseMySQL");


mainRoute.get('*', (req, res) => {
  
  // const route = path.join(__dirname, '..', 'dist', 'index.html');
  
  if (env === 'prod') {
    // const route = path.join(__dirname, '..', '..', 'build', 'index.html');
    // res.sendFile(route);
  } else {
    // const route = path.join(__dirname, '..', '..', 'build', 'index.html');
    const route = path.join(__dirname, '..', '..', 'public', 'index.html');
    res.sendFile(route);
  }
});

module.exports = mainRoute;
