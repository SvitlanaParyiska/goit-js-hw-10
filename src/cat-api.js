const BASE_URL = 'https://api.thecatapi.com/v1/';

const ARI_KEY =
  'live_pHi7zJKgztESKSsik7YNzhmT2y3qfTMR7cM61qWcRJFjsl0hVFgJHa2UtI92YzLv';

// function fetchBreeds() {
//   return fetch(`${BASE_URL}breeds?x-api-key=${ARI_KEY}`).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   });
// }

// function fetchCatByBreed(breedId) {
//   return fetch(
//     `${BASE_URL}images/search?api_key=${ARI_KEY}&breed_ids=${breedId}`
//   ).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   });
// }

export { fetchBreeds, fetchCatByBreed };
