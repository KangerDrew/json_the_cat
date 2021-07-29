const { fetchBreedDescription } = require('./breedFetcher');

const search = process.argv[2];

fetchBreedDescription(search, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});


