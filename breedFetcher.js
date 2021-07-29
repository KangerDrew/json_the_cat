const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  const webpageStr = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(webpageStr, (error, response, body) => {
    if (error) {
      callback(error,null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(`The URL returns ${response.statusCode} status code.`, null);
      return;
    }

    const data = JSON.parse(body);

    if (data[0] === undefined) {
      callback('Search yielded no results.', null);
      return;
    }

    const breedInfo = data[0]['description'];
    
    callback(null, breedInfo);
  });
};


module.exports = { fetchBreedDescription };