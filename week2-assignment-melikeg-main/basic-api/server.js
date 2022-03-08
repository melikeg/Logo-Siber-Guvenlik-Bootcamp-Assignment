//call the required libraries.
const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");
const persons = require("./data.json"); //I included the json file we created ourselves

var FAVICON = path.join(__dirname, "public", "favicon.ico"); //Define to add a favicon to the title part.

//create server
const server = http.createServer((req, res) => {
  var pathname = url.parse(req.url).pathname;

  if (req.method === "GET" && pathname === "/favicon.ico") {
    // MIME type of your favicon.
    //
    // .ico = 'image/x-icon' or 'image/vnd.microsoft.icon'
    // .png = 'image/png'
    // .jpg = 'image/jpeg'
    // .jpeg = 'image/jpeg'
    res.setHeader("Content-Type", "image/x-icon");

    // Serve your favicon and finish response.
    //
    // You don't need to call `.end()` yourself because
    // `pipe` will do it automatically.
    fs.createReadStream(FAVICON).pipe(res);

    return;
  }

  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(persons));
  res.end();
});

//set port number
const PORT = 5000;

//start listening to the server
server.listen(PORT, () => {
  console.log(`Server started resting on ${PORT}...`);
});
