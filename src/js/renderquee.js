const libary = document.querySelector('.gallery__list');
import libRend from '../handlebars/gallery.hbs';
import axios from 'axios';
const API_KEY = '0d162b8d206fdcffbed55fe71207ad50';
const BASE_URL = 'https://api.themoviedb.org/3';
const ID_URL = `${BASE_URL}/movie/`;
const ADD = document.querySelector('.btn-watched');
const QE = document.querySelector('.btn-queue');
// const reset = document.querySelector('.btn-reset');
import { LoadSpinner } from './loading-spinner';

const spinner = new LoadSpinner({
  selector: '.backdrop-spinner',
  hidden: true,
});
//
//
// DLYA MODALKI

import ListItems from '../handlebars/modal.hbs';
const open = document.querySelector('.gallery');
const modal = document.querySelector('.backdropp');
const closeBt = document.querySelector('.modal__button_close');
const backdropp = document.querySelector('.backdropp');
const modalll = document.querySelector('.modal');
// const API_KEY = '0d162b8d206fdcffbed55fe71207ad50';
// const BASE_URL = 'https://api.themoviedb.org/3';

let arr = [0];
losos();
function losos() {
  if (localStorage.getItem('id') == null) {
    // console.log(1);
    return;
  } else {
    // localStorage.setItem('id', ',');
    let ididid = localStorage.getItem('id');
    arr = ididid.split(',');
    console.log(arr);
  }
}
let arrSec = [];
lososSec();
function lososSec() {
  if (localStorage.getItem('id2') == null) {
    // console.log(1);
    return;
  } else {
    // localStorage.setItem(',');
    let ididid = localStorage.getItem('id2');
    arrSec = ididid.split(',');
  }
}

// /
//
//
//
//

let ara = [];
forel();
function forel() {
  let idid = localStorage.getItem('id');
  if (idid == null) {
    return;
  } else {
    ara = idid.split(',');
  }
}

let araSec = [];
forel2();
function forel2() {
  let ididid = localStorage.getItem('id2');
  if (ididid == null) {
    return;
  } else {
    araSec = ididid.split(',');
  }
}

function getMovieById(id) {
  const data = axios.get(`${ID_URL}${id}?api_key=${API_KEY}`);
  data.then(resp => {});

  return data;
}

ADD.addEventListener('click', () => {
  libary.innerHTML = '';
  for (const ar of ara) {
    // console.log(ar);
    // console.log('1');
    getMovieById(ar)
      .then(response => {
        // console.log(response.data);
        const title = response.data.title;
        const [genre] = response.data.genres;
        const genres = genre.name;
        const popularity = response.data.popularity;
        const vote = response.data.vote_average;
        const votes = response.data.vote_count;
        const original = response.data.original_title;
        const about = response.data.overview;
        const img = response.data.poster_path;
        const [com] = response.data.production_companies;
        const comp = com.logo_path;
        const id = response.data.id;

        libary.insertAdjacentHTML(
          'afterbegin',
          libRend({
            id,
            title,
            vote,
            img,
            comp,
            about,
            votes,
            genres,
            popularity,
            original,
          }),
        );
      })
      .catch(err => {
        console.log(err);
      });
  }
});

QE.addEventListener('click', () => {
  libary.innerHTML = '';
  for (const ar of araSec) {
    console.log(ar);
    console.log('1');
    getMovieById(ar)
      .then(response => {
        console.log(response.data);
        const title = response.data.title;
        const [genre] = response.data.genres;
        const genres = genre.name;
        const popularity = response.data.popularity;
        const vote = response.data.vote_average;
        const votes = response.data.vote_count;
        const original = response.data.original_title;
        const about = response.data.overview;
        const img = response.data.poster_path;
        const [com] = response.data.production_companies;
        const comp = com.logo_path;
        const id = response.data.id;

        libary.insertAdjacentHTML(
          'afterbegin',
          libRend({
            id,
            title,
            vote,
            img,
            comp,
            about,
            votes,
            genres,
            popularity,
            original,
          }),
        );
      })

      .catch(err => {
        console.log(err);
      });
  }
});

//
//
//
//
// MODALKA
//
// let idx = null;
// open.addEventListener('click', openModall);
// function openModall(e) {
//   e.preventDefault();

//   if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'H3') {
//     return;
//   }
//   modal.classList.remove('is-hiden');

//   idx = e.target.dataset.action;

//   getMovieById(idx)
//     .then(response => {
//       const title = response.data.title;
//       const [genre] = response.data.genres;
//       const genres = genre.name;
//       const popularity = response.data.popularity;
//       const vote = response.data.vote_average;
//       const votes = response.data.vote_count;
//       const original = response.data.original_title;
//       const about = response.data.overview;
//       const img = response.data.poster_path;
//       const [com] = response.data.production_companies;
//       const comp = com.logo_path;

//       modalll.insertAdjacentHTML(
//         'beforeend',
//         ListItems({
//           // id,
//           title,
//           vote,
//           img,
//           comp,
//           about,
//           votes,
//           genres,
//           popularity,
//           original,
//         }),
//       );
//     })
//     .catch(err => {
//       console.log(err);
//     });

// closeBt.addEventListener('click', closeModall);
// document.body.addEventListener('keydown', closeModallEsc);

// backdropp.addEventListener('click', event => {
//   if (event.target === backdropp) {
//     return closeModall();
//   }
// });
// console.log(arr);
// setTimeout(() => {
//   const knopka = document.querySelector('.modal__button_watch');
//   for (let i = 0; i <= arr.length; i += 1) {
//     if (idx == arr[i]) {
//       knopka.classList.add('activ');
//     }
//   }
// knopka.addEventListener('click', event => {
//   for (let i = 0; i <= arr.length; i += 1) {
//     console.log(arr);
//     if (idx == arr[i]) {
//       delete arr[i];
//       // arr.splice(arr[i], 1);
//       // localStorage.setItem('id', arr);
//       knopka.classList.remove('activ');
//       // console.log(arr);
//       return;
//     } else if (idx !== arr[i]) {
//       knopka.classList.add('activ');
//       // arr.splice(0, 0, idx);
//       //   console.log(arr);
//       // localStorage.setItem('id', arr);
//       return;
//     }
//     // return;
//   }
// });
// }, 50);
// setTimeout(() => {
//   const knopkaSecond = document.querySelector('.modal__button_queue');
//   for (let i = 0; i <= arrSec.length; i += 1) {
//     if (idx == arrSec[i]) {
//       knopkaSecond.classList.add('activ');
//     }
//   }
//     knopkaSecond.addEventListener('click', event => {
//       for (let i = 0; i <= arrSec.length; i += 1) {
//         //   console.log(arr);
//         if (idx !== arrSec[i]) {
//           arrSec.splice(0, 0, idx);
//           // console.log(arr);
//           localStorage.setItem('id2', arrSec);
//           knopkaSecond.classList.add('activ');
//           return;
//         } else if (idx == arrSec[i]) {
//           knopkaSecond.classList.remove('activ');
//           delete arrSec[i];
//           localStorage.setItem('id2', arrSec);

//           return;
//         }
//       }
//     });
//   }, 50);
// }

// function closeModall() {
//   modal.classList.add('is-hiden');
//   closeBt.removeEventListener('click', closeModall);
//   document.body.removeEventListener('keydown', closeModallEsc);
//   // location.reload();
//   modalll.innerHTML = '';
//   window.location.reload();
// }
// function closeModallEsc(e) {
//   if (e.key === 'Escape') {
//     return closeModall();
//   }
// }
// function getMovieById(id) {
//   const data = axios.get(`${ID_URL}${id}?api_key=${API_KEY}`);
//   data.then(resp => {});

//   return data;
// }

//
//
// DELAYEM MAGIC
document.addEventListener('DOMContentLoaded', function (e) {
  // ждем окончание загрузки
  setTimeout(function () {
    const myElement = document.querySelector('.btn-watched');
    myElement.classList.add('is-active'); // ищем нужный элемент
    myElement.click(); // клик!
  }, 0); // 5000 msec = 5 sec
});

ADD.addEventListener('click', tajikistan);
QE.addEventListener('click', uzbekistan);

function uzbekistan() {
  ADD.classList.remove('is-active');
  QE.classList.add('is-active');
}

function tajikistan() {
  QE.classList.remove('is-active');
  ADD.classList.add('is-active');
}

//
//
//
