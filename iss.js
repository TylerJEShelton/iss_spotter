const request = require('request');

const fetchMyIP = callback => {
  // use request to fetch IP address from JSON API
  const url = "https://api.ipify.org?format=json";

  request(url, (err, response, body) => {
    if (err) {
      callback(`There was an error: ${err}`, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);
    const ip = data.ip;
    callback(null, ip);
  });

};

const fetchCoordsByIP = (ip, callback) => {
  const url = "https://freegeoip.app/json/" + ip;

  request(url, (err, response, body) => {
    if (err) {
      callback(`There was an error: ${err}`, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body);
    callback(null, `lat: ${latitude}, lon: ${longitude}`);
  });

};


module.exports = { fetchMyIP, fetchCoordsByIP };