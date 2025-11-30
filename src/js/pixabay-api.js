import axios from "axios";

export async function getImagesByQuery(query, page){
const baseURL = 'https://pixabay.com';
const endPoint ='/api/';
const params = new URLSearchParams({
key:"53366828-bd78e2a0684a00ed0fbe9f50e",
q: query,
image_type: 'photo',
orientation: 'horizontal',
safesearch: 'true',
per_page: 15,
page: page,
});

const url = `${baseURL}${endPoint}?${params}`;
const res = await axios.get(url);
return res.data;
}
