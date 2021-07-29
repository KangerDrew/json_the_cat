const request = require('request');
const search = process.argv[2];
const webpageStr = `https://api.thecatapi.com/v1/breeds/search?q=${search}`;

request(webpageStr, (error, response, body) => {
  if (error) {
    console.log(`There was a problem loading the page.`);
    return undefined;
  }

  if (response.statusCode !== 200) {
    console.log(`The URL returns ${response.statusCode} status code.`);
    return undefined;
  }

  const data = JSON.parse(body);

  if (data[0] === undefined) {
    console.log('Search yielded no results.');
    return undefined;
  }

  const breedInfo = data[0]['description'];
  console.log(breedInfo);

});