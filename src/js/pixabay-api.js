import axios from "axios";

export function getImagesByQuery(query){
const baseURL = 'https://pixabay.com';
const endPoint ='/api/';
const params = new URLSearchParams({
key:"53366828-bd78e2a0684a00ed0fbe9f50e",
q: query,
image_type: 'photo',
orientation: 'horizontal',
safesearch: 'true',
});
const url = `${baseURL}${endPoint}?${params}`;
return axios.get(url).then(res => res.data);
}
