const env = 'local';
let DbName = 'a1abiliti_fme';
let domainName = 'appoint.a1abilities.co.nz';

console.log('env db', env);

if (env === 'prod') {
  DbName = 'a1abiliti_fme';
  domainName = 'appoint.a1abilities.co.nz'
} else {  
  DbName = 'a1abiliti_fme'
  domainName = 'localhost:3000'
}





module.exports = { dbName: DbName, domainName: domainName, env: env };