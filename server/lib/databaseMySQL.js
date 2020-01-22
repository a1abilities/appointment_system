const env = 'local';
let DbName = 'appointment_ms';
let domainName;
// let mailPass = 'y&GFhE16U';
// let mailService = 'rentronics.saimrc.com'

console.log('env db', env);

if (env === 'prod') {
  DbName = 'appointment_ms';
  // domainName = 'rentronicsdev.saimrc.com'
} else {  
  DbName = 'appointment_ms'
  domainName = 'localhost:3000'
}

module.exports = { dbName: DbName, domainName: domainName, env: env };