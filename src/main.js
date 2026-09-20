import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('input[type="text"]');

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const inputImage = input.value.trim().toLowerCase();
  if (!inputImage) {
    return;
  }
  showLoader();
  clearGallery();

  getImagesByQuery(inputImage)
    .then(images => {
      if (images.length > 0) {
        createGallery(images);
      } else {
        iziToast.error({
          title: 'Error',
          message: `Sorry, there are no images matching your search query. Please try again!`,
        });
      }
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message: `Please try again!`,
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
}
