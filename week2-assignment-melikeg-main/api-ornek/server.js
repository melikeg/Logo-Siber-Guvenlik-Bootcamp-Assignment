const express = require("express"); //express library included
const photosController = require("./src/controllers/photo-controllers"); //self-created modules included
const albumsController = require("./src/controllers/album-controllers");

const app = express();

app.get("/albums", (req, res) => {
  //Code working in /albums page
  var albums = albumsController.getAllAlbums(); //Executes function getAllAlbums() in module albumsController
  res.send(albums);
});

app.get("/albums/:userId", (req, res) => {
  //takes the parameter that comes with /albums
  var album = albumsController.getAlbumByUserId(req.params.userId); //Executes function getAlbumByUserId() in module albumsController
  res.send(album);
});

app.get("/photos", (req, res) => {
  //Code working in /photos page
  var photos = photosController.getAllPhotos(); //Executes function getAllPhotos() in module photosController
  res.send(photos);
});

app.get("/photos/:albumId", (req, res) => {
  //takes the parameter that comes with /photos
  var photo = photosController.getPhotoByAlbumId(req.params.userId); //Executes function getPhotoByAlbumId() in module photosController
  res.send(photo);
});

const PORT = 5000; //set port number
app.listen(PORT); //start listening to the server
