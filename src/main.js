import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import {getImagesByQuery} from './js/pixabay-api';
import {createGallery,
        clearGallery,
        showLoader,
        hideLoader
} from './js/render-functions';

const formPixabay = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');


formPixabay.addEventListener('submit', (e) =>{
        e.preventDefault();
const inputValue = input.value.trim();
input.value = "";
input.focus();

 if (inputValue === "") {
    iziToast.error({
      message: 'Please enter text!',
      position: 'topCenter',
    });
    return;
  }
  showLoader();
  clearGallery();
    

  getImagesByQuery(inputValue)
    .then(res => {
      const hits = res.hits;
      if (hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
          backgroundColor: 'red',
          timeout: 3000,    
          pauseOnHover: true, 
          messageColor: 'white',
        });
        return;
      }
      console.log(hits);
      createGallery(hits);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        message: 'Not connecting, Please try again! ',
        position: 'center',
        backgroundColor: 'yellow',
        
      });
    })
    .finally(() => {
      hideLoader();
    });
})
