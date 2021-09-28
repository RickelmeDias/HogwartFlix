/*
 *  I created a local JSON with the informations about the 4 houses. I got this datas using fetch.
 *  Eu criei um JSON local com as informações das 4 casas. Eu peguei esses dados com fetch.
 */

async function getHouses() {
  const houses = await fetch ('/json/houses.json')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    return json;
  });

  return houses;
}

function createChars(houses) {
  const element = document.querySelector('.owl-carousel');
  let   output = '';

  for (let h of houses) {
    output += `<div class="item">
    <img src="${h.image}" alt="" class="movie-box">
    <p class="char-name">${h.house}</p>
    <p class="char-house">${h.founder}</p>
    </div>`
  }

  output += '';

  element.innerHTML = output;

  carouselSetup();
}

async function pageCharacters() {
  const houses = await getHouses();
  createChars(houses);
}

pageCharacters();