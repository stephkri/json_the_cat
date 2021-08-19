const { fetchBreedDescription } = require("./breedFetcher");

const query = process.argv[2];

fetchBreedDescription(query, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});