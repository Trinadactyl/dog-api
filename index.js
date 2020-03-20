'use strict'

function getDogImage(){
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(responseJson => 
    displayResults(responseJson))
  .catch(error => alert('Oops. Something went wong')
  );
}

function displayResults(responseJson){
  console.log(responseJson);
  $('.results-img').replaceWith(
    `<img src=${responseJson.message} class="results-img">`
  )
  $('.results').removeClass('hidden');
}

function watchForm(){
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});