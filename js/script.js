console.log('js-array-carousel');

const itemsWrapper = document.querySelector('.items-wrapper');
const topArrow = document.querySelector('.top');
const downArrow = document.querySelector('.down');
const thumbWrapper = document.querySelector('.thumbnail-wrapper')

let counterImg = 0;

const images = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp',
];

// ItemsWrapper mi stampa il tag img la le immagini dell'array con le sua apposita classe hide
for (let i = 0; i < images.length; i++) {
  const img = images[i];
  itemsWrapper.innerHTML += `
  <img class="img hide" src="${img}" alt="#">
  `;
  thumbWrapper.innerHTML += `
  <img class="thumb" src="${img}" alt="#">
  `;
}

// Le variabili Hide e active;
const itemsCollector = document.getElementsByClassName('img');
const thumbnailCollector = document.getElementsByClassName('thumb');

// Hide mi rimuove la classe hide nella prima immagine cosí da poterla mostrare;
itemsCollector[counterImg].classList.remove('hide');
// Active mi aggiunge la classe active enfatizzare l'immagine selezionata con le frecce;
thumbnailCollector[counterImg].classList.add('active');

// Freccia in alto
topArrow.addEventListener('click', function(){
  itemsCollector[counterImg].classList.add('hide');

  // Mi toglie Active al click della freccia in alto;
  thumbnailCollector[counterImg].classList.remove('active');
  counterImg--;
  
  // L'immagine quando é minore di 0 del contatore prende l'ultima immagine;
  if (counterImg < 0) {
    counterImg = images.length - 1;
  }

  itemsCollector[counterImg].classList.remove('hide');
  // Mi aggiunge Active al click della freccia in alto;
  thumbnailCollector[counterImg].classList.add('active')
})

// Freccia in basso
downArrow.addEventListener('click', function(){

  itemsCollector[counterImg].classList.add('hide');
  thumbnailCollector[counterImg].classList.remove('active');
  counterImg++;

  // Alla fine del contatore dell'array, l'immagine ritorna a 0
  if (counterImg >= images.length) {
    counterImg = 0;
  }

  itemsCollector[counterImg].classList.remove('hide');
  thumbnailCollector[counterImg].classList.add('active');

})

