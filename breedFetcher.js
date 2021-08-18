const request = require("request");

const args = process.argv;
const query = args[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + query;

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