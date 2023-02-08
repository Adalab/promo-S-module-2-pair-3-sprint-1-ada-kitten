'use strict';

const form = document.querySelector('.js-new-form');

const list = document.querySelector('.js-list');

const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio';
const kittenOneDesc = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';


const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenTwoName = 'Fiona';
const kittenTwoDesc = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenTwoRace = 'Sphynx';


const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenThreeName = 'Cielo';
const kittenThreeDesc = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThreeRace = 'Maine Coon';

renderKitten(kittenOneImage,kittenOneDesc, kittenOneName, kittenOneRace);

renderKitten(kittenTwoImage,kittenTwoDesc, kittenTwoName, kittenTwoRace);

renderKitten(kittenThreeImage,kittenThreeDesc, kittenThreeName, kittenThreeRace);

// list.innerHTML = `${kittenOne} ${kittenTwo} ${kittenThree}`;

const input_search_desc = document.querySelector('.js_in_search_desc');

/*
if( kittenOneDesc.includes(descrSearchText) ) {
  list.innerHTML = `${kittenOne}`;
  } 
  
if( kittenTwoDesc.includes(descrSearchText) ) {
    list.innerHTML += `${kittenTwo}`;
  }
  
if( kittenThreeDesc.includes(descrSearchText) ) {
    list.innerHTML += `${kittenThree}`;
  }
  */

const formMenu = document.querySelector('.js-menu');
const addButton = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const cancel = document.querySelector('.js-cancel');

formMenu.addEventListener('click', handleClick);
function handleClick(ev){
  if (form.classList.contains('collapsed')) {
    showNewCatForm()
    //form.classList.remove("collapsed"); 
   } else {
    hideNewCatForm()
     //form.classList.add('collapsed');
   }
}
function showNewCatForm() {
  form.classList.remove('collapsed');
}
function hideNewCatForm() {
  form.classList.add('collapsed');
}

addButton.addEventListener('click', addNewKitten);
function addNewKitten(event) {
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
  labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo'
  } else {
  }
}
/*
cancel.addEventListener('click', () => {
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
  form.classList.add('collapsed');
})
*/

function renderKitten(url, desc, name, race) {
  const kitten = `<li class="card">
  <article>
  <img
                class="card_img"
                src= ${url}
                alt="sphynx-cat"
              />
              <h3 class="card_title">${name} </h3>
              <h4 class="card_race">${race} </h4>
              <p class="card_description">
              ${desc}
              </p>
  </article>
  </li>`;
  list.innerHTML += `${kitten}`;
}



const cancelNewKitten = (event) => {
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
  form.classList.add('collapsed');
};

const buttonCancelForm = document.querySelector('.js-cancel');
buttonCancelForm.addEventListener('click', cancelNewKitten);

const buttonSearch = document.querySelector('.js-button-search');

const filterKitten = (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const descrSearchText = input_search_desc.value;
  console.log(descrSearchText)
  
  if (kittenOneDesc.includes(descrSearchText) || kittenOneRace.includes(descrSearchText)) {
    renderKitten(kittenOneImage, kittenOneDesc, kittenOneName, kittenOneRace);
  }
  if (kittenTwoDesc.includes(descrSearchText)) {
    renderKitten(kittenTwoImage, kittenTwoDesc, kittenTwoName, kittenTwoRace);
  }
  if (kittenThreeDesc.includes(descrSearchText)) {
    renderKitten(kittenThreeImage, kittenThreeDesc, kittenThreeName, kittenThreeRace);
  }
};
buttonSearch.addEventListener('click', filterKitten);