import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export const createGallery = images => {
    const markup = images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => 
        `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img
                    class="gallery-image"
                    src="${webformatURL}"
                    data-source="${largeImageURL}"
                    alt="${tags}"
                    width = "360"
                    height = "152"
                />
                <ul class="features">
                    <li class="feature">Likes <br /> <span class="text">${likes}</span></li>
                    <li class="feature">Views <span class="text">${views}</span></li>
                    <li class="feature">Comments <span class="text">${comments}</span></li>
                    <li class="feature">Downloads <span class="text">${downloads}</span></li>
                </ul>
            </a>
        </li>`).join("");
    gallery.innerHTML += markup;
    lightbox.refresh();
} 

export function clearGallery(){
    gallery.innerHTML = '';
}

const loader = document.querySelector('.loader');
export function showLoader(){
    loader.classList.remove('is-hidden');
}
export function hideLoader(){
    loader.classList.add('is-hidden');
}