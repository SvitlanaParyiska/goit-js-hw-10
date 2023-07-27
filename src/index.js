import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectEl = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const boxCatInfoEl = document.querySelector('.cat-info');

selectEl.addEventListener('change', setOutput);

loaderEl.classList.remove('visually-hidden');
fetchBreeds()
  .then(data => {
    selectEl.innerHTML = createSelectList(data);
    loaderEl.classList.add('visually-hidden');
  })
  .catch(err => {
    loaderEl.classList.add('visually-hidden');
    errorEl.classList.remove('is-hidden');
  });

function createSelectList(arr) {
  return arr
    .map(({ name, id }) => `<option value=${id}>${name}</option>`)
    .join('');
}

function setOutput() {
  boxCatInfoEl.innerHTML = '';
  loaderEl.classList.remove('visually-hidden');
  return fetchCatByBreed(selectEl.value)
    .then(data => {
      boxCatInfoEl.innerHTML = createCatInfo(data);
      loaderEl.classList.add('visually-hidden');
    })
    .catch(err => {
      errorEl.classList.remove('is-hidden');
      loaderEl.classList.add('visually-hidden');
    });
}

function createCatInfo(arr) {
  return arr
    .map(
      ({ breeds, url }) => `<img src=${url} alt=${breeds[0].name} width=600>
<div class="text-box"><h2>${breeds[0].name}</h2>
<p>${breeds[0].description}</p>
<p><span class="temp-style">Temperament: </span>${breeds[0].temperament}</p>
</div>`
    )
    .join('');
}
