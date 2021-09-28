/*
 *  I'm using an API to get the Harry Potter Characters informations
 *  Estou usando uma API para obter as informações dos personagens do Harry Potter.
 *  http://hp-api.herokuapp.com/api/characters
 *  Created by:
 *  https://twitter.com/edinbeth
 *  https://github.com/bethfraser/hp-api
 * 
 * I had to change the HP-API data to a JSON file, because the API haven't a secure protocal HTTPS.
 * 
 */




async function getCharacter() {
  const chars = await fetch ('/json/characters.json')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    return json;
  });

  return chars;
}

function createChars(chars) {
  const element = document.querySelector('.owl-carousel');
  let   output = '';

  for (let c of chars) {
    output += `<div class="item">
    <img src="${c.image}" alt="" class="chars-box">
    <p class="char-name">${c.name}</p>
    <p class="char-house">${c.house}</p>
    </div>`
  }

  output += '';

  element.innerHTML = output;

  carouselSetup();
}

async function pageCharacters() {
  const chars = await getCharacter();
  createChars(chars);
  console.log(chars);
}

pageCharacters();