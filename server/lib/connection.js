const MySQL = require("mysql");

let dbOptions = '';
// let dbName = 'appointment_ms';
const { env, dbName } = require("./databaseMySQL");

if (env === 'prod') {
   dbOptions = {
      host: 'localhost',
      user: 'root',
      password: '6mNMX9Ln0oykXKic',
      port: 3306
      // database: 'rentronics'
   };
} else {
   dbOptions = {
      host: 'localhost',
      user: 'root',
      password: '',
      // database: 'rentronics'
   };
}


let connectionPool = MySQL.createPool({ host: dbOptions.host, user: dbOptions.user, password: dbOptions.password, port: dbOptions.port, database: dbName });

const getConnection = async function (done) {
   try {
      connectionPool.getConnection(done);
   } catch (ex) {
      console.log("ex........", ex);
      throw ex;
   }
};

module.exports = { getConnection: getConnection, dbName: dbName };