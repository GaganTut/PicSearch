/*jshint esversion: 6*/

const searchInputButton = document.querySelector('#searchInputButton');
const beginSearchButton = document.querySelector('#beginSearchButton');

beginSearchButton.on('click', () => {
  displayImages(searchImages(searchInputButton.value));
});

const displayImages = (images) => {

};

const searchImages = (searchTerm) => {
  const imageSearchRequest = new XMLHttpRequest();
  imageSearchRequest.on('load', returnImageData);
  imageSearchRequest.on('error', returnError);
  imageSearchRequest.setRequestHeader('Api-Key', API_KEY);
  imageSearchRequest.open('GET', `https://api.gettyimages.com/v3/search/images?phrase=${searchTerm}`);
};

function returnImageData() {
  let imageData = JSON.parse(this.responseText);
  console.log(imageData);
}