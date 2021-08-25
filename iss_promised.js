const request = require('request-promise-native');

const fetchMyIP = () => {
  // use request to fetch IP address from JSON API
  const url = "https://api.ipify.org?format=json";

  return new Promise((resolve, reject) => {
    request(url, (err, response, body) => {
      if (err) {
        reject(`There was an error: ${err}`);
        return;
      }
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        reject(Error(msg));
        return;
      }
      const data = JSON.parse(body);
      const ip = data.ip;
      resolve(ip);

    });
  });
};

const fetchCoordsByIP = ip => {
  const url = "https://freegeoip.app/json/" + ip;

  return new Promise((resolve, reject) => {
    request(url, (err, response, body) => {
      if (err) {
        reject(`There was an error: ${err}`);
        return;
      }
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        reject(Error(msg));
        return;
      }
      const { latitude, longitude } = JSON.parse(body);
      resolve(`lat: ${latitude}, lon: ${longitude}`);
    });
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP };