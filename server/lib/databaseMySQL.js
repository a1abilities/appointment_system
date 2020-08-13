const env = 'prod';
let DbName = 'connectiv_appointment';
let domainName = 'appointment.connectivitysoftwaresolutions.com';

console.log('env db', env);

if (env === 'prod') {
  DbName = 'connectiv_appointment';
  domainName = 'appointment.connectivitysoftwaresolutions.com';
} else {  
  DbName = 'a1abiliti_fme'
  domainName = 'localhost:3000'
}





module.exports = { dbName: DbName, domainName: domainName, env: env };