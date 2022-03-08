const albums = require("./../data/albums");

getAllAlbums = () => {
  //This method returns all albums
  return albums;
};

getAlbumByUserId = (userId) => {
  //Filters and returns those with the same userId
  return albums.filter((item) => item.userId == userId);
};

module.exports = { getAllAbums, getAlbumByUserId }; // functions exported
