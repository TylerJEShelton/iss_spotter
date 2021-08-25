const { fetchMyIP, fetchCoordsByIP } = require('./iss_promised');

fetchMyIP()
  //.then(ip => console.log('It worked! Returned IP:', ip));
  .then(ip => fetchCoordsByIP(ip))
  .then(coords => console.log(coords))
    //.then()