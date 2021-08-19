const request = require("request");

const fetchBreedDescription = function(query, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + query;
  request(url, (error, response, body) => {
    const dataArray = JSON.parse(body);
    const data = dataArray[0];
    //console.log(`Data: ${data} - Error: ${response.statusCode}`); // data is undefined in 2nd example
    if (!data || error) {
      return callback(true, null);
    } else {
      const desc = data.description;
      return callback(false, desc);
    }
  });
};

/*
This works if request is called in index.js
const fetchBreedDescription = function(error, response, body) {
  if (error) {
    console.log(error, response);
    return false;
  }
  const dataArray = JSON.parse(body);
  if (dataArray.length === 0) {
    console.log("Invalid search query; breed not found");
  } else {
    const data = dataArray[0];
    console.log(data.name);
    console.log(data.description);
  }
};
*/

module.exports.fetchBreedDescription = fetchBreedDescription;

/*
request(url, (error, response, body) => {
  if (error) {
    console.log(error, response);
    return false;
  }
  const dataArray = JSON.parse(body);
  if (dataArray.length === 0) {
    console.log("Invalid search query; breed not found");
  } else {
    const data = dataArray[0];
    console.log(data.name);
    console.log(data.description);
  }
});
*/