'use strict';

const form = document.querySelector('.js-new-form');

const list = document.querySelector('.js-list');

/*const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio';
const kittenOneDesc = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';*/



/*const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenTwoName = 'Fiona';
const kittenTwoDesc = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenTwoRace = 'Sphynx';


const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenThreeName = 'Cielo';
const kittenThreeDesc = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThreeRace = 'Maine Coon';*/

const kittenOne = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};

const kittenTwo = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};

const kittenThree = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};


renderKitten(kittenOne);

renderKitten(kittenTwo);

renderKitten(kittenThree);

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

function renderKitten(kittenData) {

  console.log(kittenData)

  const kitten = `<li class="card">
        <article>
              <img
                class="card_img"
                src= "${kittenData.image}"
                alt="sphynx-cat"/>
              <h3 class="card_title"> ${kittenData.name} </h3>
              <h4 class="card_race">${kittenData.race} </h4>
              <p class="card_description">
              ${kittenData.desc}
              </p>
  </article>
  </li>`;
  list.innerHTML += `${kitten}`;
  console.log()
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
  
  if (kittenOne.desc.includes(descrSearchText) || kittenOne.race.includes(descrSearchText)) {
    renderKitten(kittenOne.image, kittenOne.desc, kittenOne.name, kittenOne.race);
  }
  if (kittenTwo.desc.includes(descrSearchText)) {
    renderKitten(kittenTwo.image, kittenTwo.desc, kittenTwo.name, kittenTwo.race);
  }
  if (kittenThree.desc.includes(descrSearchText)) {
    renderKitten(kittenThree.image, kittenThree.desc, kittenThree.name, kittenThree.race);
  }
};
buttonSearch.addEventListener('click', filterKitten);

