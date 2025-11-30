import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', 
  captionPosition: 'bottom', 
});
export function createGallery(images){
const gallery  = document.querySelector('.gallery');
const markup = images.map(image => {
    return `
      <li>
        <a href="${image.largeImageURL}" title="${image.tags}">
          <img src="${image.webformatURL}" alt="${image.tags}">
        </a>
        <div class="info">
          <p>Likes: <span class="value">${image.likes}</span></p>
          <p>Views: <span class="value">${image.views}</span></p>
          <p>Comments: <span class="value">${image.comments}</span></p>
          <p>Downloads: <span class="value">${image.downloads}</span></p>
        </div>
      </li>
    `;
  }).join('');
gallery.insertAdjacentHTML('beforeend', markup);
lightbox.refresh();

}

export function clearGallery(){
   const gallery = document.querySelector('.gallery');
gallery.innerHTML = "";
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('is-hidden');
}

export function showLoadMoreButton() {
const btnLoad = document.querySelector('.js-btn-load');
  btnLoad.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
const btnLoad = document.querySelector('.js-btn-load');
  btnLoad.classList.add('is-hidden');
}