import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery } from './js/render-functions.js';
import { clearGallery } from './js/render-functions.js';
import { showLoader } from './js/render-functions.js';
import { hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');


form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  const query = form.elements['search-text'].value.trim();
  if (query === '') return;
  clearGallery();
  showLoader();
 
  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message: 'Sorry, there are no images matching your search query.',
          position: 'topRight',
          color: 'red',
          icon: 'material-icons',
          iconText: 'block',
        });
        return;
      }
      console.log(data.hits);
      createGallery(data.hits);
    })
    .catch(error => {
      console.error(error);
      iziToast.show({
          message: 'Помилка запиту',
          position: 'topRight',
          color: 'red',
          icon: 'material-icons',
          iconText: 'block',
        });
    }).finally(() => {
      hideLoader();
    });
}

