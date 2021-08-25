const { fetchMyIP, fetchCoordsByIP } = require('./iss_promised');

fetchMyIP()
  .then(ip => fetchCoordsByIP(ip))
  .then(coords => console.log(coords));