const env = 'prod';
let DbName = 'a1abiliti_appointment_ms';
let domainName = 'appoint.a1abilities.co.nz';
// let mailPass = 'y&GFhE16U';
// let mailService = 'rentronics.saimrc.com'

console.log('env db', env);

if (env === 'prod') {
  DbName = 'a1abiliti_appointment_ms';
  domainName = 'appoint.a1abilities.co.nz'
} else {  
  DbName = 'appointment_ms'
  domainName = 'localhost:3000'
}

module.exports = { dbName: DbName, domainName: domainName, env: env };