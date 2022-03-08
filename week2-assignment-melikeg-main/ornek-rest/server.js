// call the required libraries.
const http = require("http");

//include json files
const albums = require("./data/albums.json");
const photos = require("./data/photos.json");

//create server
const server = http.createServer((req, res) => {
  console.log(`Talep geldi : ${req.url}`);
  if (req.url === "/albums") {
    //albums returns
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(albums));
    res.end();
  } else if (req.url === "/photos") {
    //photos returns
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(photos));
    res.end();
  } else {
    res.writeHead(404, "Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Routing Incorrect" }));
  }
});

// set port number
const PORT = 5000;

// start listening to the server
server.listen(PORT, () => {
  console.log(`Server started listening on ${PORT}...`);
});
