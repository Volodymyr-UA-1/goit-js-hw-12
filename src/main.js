import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import {getImagesByQuery} from './js/pixabay-api';
import {createGallery,
        clearGallery,
        showLoader,
        hideLoader,
        showLoadMoreButton,
        hideLoadMoreButton,
} from './js/render-functions';

const formPixabay = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');
const galleryList = document.querySelector('[data-js-gallery]');
const loadMoreButton = document.querySelector('.js-btn-load');

let query;
let currentPage = 1;
let totalPages = 0;

formPixabay.addEventListener('submit', async e =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        query = formData.get('search-text').trim();
        currentPage = 1;

if (!query) {
    iziToast.error({
      message: "Please enter text!",
      position: "topCenter",
    });
    return;
  }

  clearGallery();
  hideLoadMoreButton();
  showLoader();
  input.value = "";

  try {
    const res = await getImagesByQuery(query, currentPage);

    if (res.hits.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        position: "center",
        backgroundColor: "red",
        timeout: 3000,
        pauseOnHover: true,
        messageColor: "white",
      });
      return;
    }

    createGallery(res.hits);

    totalPages = Math.ceil(res.totalHits / 15);

    if (currentPage < totalPages) {
      showLoadMoreButton();
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: "Not connecting, Please try again!",
      position: "center",
      backgroundColor: "yellow",
    });
  } finally {
    hideLoader();
  }
});
loadMoreButton.addEventListener("click", async () => {
  currentPage++;
  showLoader();
  try {
    const res = await getImagesByQuery(query, currentPage);
    createGallery(res.hits);
    const firstCard = document.querySelector('.gallery li');
if (firstCard) {
  const cardHeight = firstCard.getBoundingClientRect().height;
  window.scrollBy({ top: cardHeight * 2, behavior: "smooth" });
}

    if (currentPage >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: "bottomCenter",
      });
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: "Error loading more images.",
      position: "center",
    });
  } finally {
    hideLoader();
  }
});
