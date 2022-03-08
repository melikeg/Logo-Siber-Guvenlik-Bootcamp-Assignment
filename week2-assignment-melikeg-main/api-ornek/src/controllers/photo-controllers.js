const photos = require("./../data/photos");

getAllPhotos = () => {
  //This method returns all photos
  return photos;
};

getPhotoByAlbumId = (albumId) => {
  //Filters and returns those with the same albumId
  return photos.filter((item) => item.albumId == albumId);
};

module.exports = { getAllPhotos, getPhotoByAlbumId }; // functions exported
