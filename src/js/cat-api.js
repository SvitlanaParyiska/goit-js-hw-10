import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_pHi7zJKgztESKSsik7YNzhmT2y3qfTMR7cM61qWcRJFjsl0hVFgJHa2UtI92YzLv';

const BASE_URL = 'https://api.thecatapi.com/v1/';

function fetchBreeds() {
  return axios.get(`${BASE_URL}breeds`).then(resp => resp.data);
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}images/search?breed_ids=${breedId}`)
    .then(resp => resp.data);
}

export { fetchBreeds, fetchCatByBreed };
