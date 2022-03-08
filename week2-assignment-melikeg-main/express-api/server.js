const express = require("express"); //express library included
const albums = require("./data/albums.json"); //photos and albums json files included
const photos = require("./data/photos.json");

const app = express();

app.get("/", (req, res) => {
  //successfully run message when connected to server
  res.send("The server ran successfully");
});

app.get("/albums", (req, res) => {
  //Codes to run when redirect to albums page
  if (req.query.id) {
    //works if there is a query next to albums
    var album = albums.filter((x) => x.id == req.query.id); //Filters and prints those with the same id
    res.send(album);
  } else {
    //prints all albums
    res.send(albums);
  }
});

app.get("/photos/:albumId", (req, res) => {
  //works if there is a query next to photos
  result = photos.filter((x) => x.albumId == req.params.albumId); //Filters and prints those with the same albumId
  res.send(result);
});

app.get("/photos", (req, res) => {
  //prints all photos
  res.send(photos);
});
const PORT = 5000; //set port number
app.listen(PORT); //start listening to the server
