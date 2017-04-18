/*jshint esversion: 6*/

const searchInputBox = document.querySelector('#searchInputBox');
const beginSearchButton = document.querySelector('#beginSearchButton');
const searchedImages = document.querySelector('#searchedImages');

beginSearchButton.addEventListener('click', () => {
  searchImages(searchInputBox.value);
});

const displayImages = (imageObjects) => {
  for (let i = 0; i < imageObjects.images.length; i++) {
    let imageDiv = document.createElement('div');

    let imageTag = document.createElement('img');
    imageTag.setAttribute('src', imageObjects.images[i].display_sizes[0].uri);

    let imageTitle = document.createElement('h3');
    imageTitle.innerHTML = imageObjects.images[i].title;

    let imageCaption = document.createElement('p');
    imageCaption.innerHTML = imageObjects.images[i].caption;

    imageDiv.appendChild(imageTag);
    imageDiv.appendChild(imageTitle);
    imageDiv.appendChild(imageCaption);

    searchedImages.appendChild(imageDiv);
  }
};

const searchImages = (searchTerm) => {
  const imageSearchRequest = new XMLHttpRequest();
  imageSearchRequest.addEventListener('load', returnImageData);
  imageSearchRequest.addEventListener('error', returnError);
  imageSearchRequest.open('GET', `https://api.gettyimages.com/v3/search/images?phrase=${searchTerm}`);
  imageSearchRequest.setRequestHeader('Api-Key', API_KEY);
  imageSearchRequest.send();
};

function returnImageData() {
  let imageData = JSON.parse(this.responseText);
  console.log(imageData);
  displayImages(imageData);
}

const returnError = () => {
  console.log('ERROR!!!');
};